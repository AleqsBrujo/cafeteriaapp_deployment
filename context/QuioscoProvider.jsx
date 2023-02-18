import { useState, useEffect, createContext, use } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from "next/router";
import useSWR from 'swr'


const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const fetcher = () => axios('/api/ordenesfalse').then(datos => datos.data)
    const { data: dataOrdenFalse, error, isLoading } = useSWR('/api/ordenesfalse', fetcher, {refreshInterval: 100})
    const fetcherTrue = () => axios('/api/ordenestrue').then(datos => datos.data)
    const { data: dataOrdenTrue, errorTrue, isLoadingTrue } = useSWR('/api/ordenestrue', fetcherTrue, {refreshInterval: 100})      
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [item, setItem] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
    const [totalDespachadas, setTotalDespachadas] = useState(0)
    const [totalPendientes, setTotalPendientes] = useState(0)           
    const router = useRouter()        
    

    
    const ordenesTodas =  async () => {

        router.push('/admin/allorders')
    }    

    const ordenesPreparadas = async () => {
         
        router.push('/admin/doneorders')
        
    }
  
    const ordenesPendientes = async() => {    
        
        router.push('/admin')
        
    }
    
    
    const obtenerCategorias = async() => {
        const {data} = await axios('/api/categorias')
        setCategorias(data)

    }

    useEffect(()=>{
        obtenerCategorias()
    }, [])

    useEffect(() => {
        const nuevoTotal = dataOrdenTrue?.reduce((total, orden) => (orden.total + total), 0)
        setTotalDespachadas(nuevoTotal)
    }, [dataOrdenTrue])
    
    useEffect(() => {
        const nuevoTotal = dataOrdenFalse?.reduce((total, orden) => (orden.total + total), 0)
        setTotalPendientes(nuevoTotal)
    }, [dataOrdenFalse]) 

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])    

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetItem = (item) => {
        setItem(item)
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({ categoriaId, ...item}) => {
        if(pedido.some(itemState => itemState.id === item.id)){
           //Actualizar la cantidad de productos por que el item ya existe en el carrito
           const itemActualizado = pedido.map(itemState => itemState.id === item.id ? item : itemState)
           setPedido(itemActualizado)
           toast.success('Producto actualizado con éxito')
        } else {
            setPedido([...pedido ,item])
            toast.success('Producto añadido correctamente')
            
        }
        setModal(false)
        
    }

    const handleActualizarCantidad = id => {
        const productoActualizado = pedido.filter( producto => producto.id === id)
        setItem(productoActualizado[0])
        setModal(!modal)

    }
    
    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)
        setPedido(pedidoActualizado)
        
    }

    const colocarOrden = async(e) => {
        e.preventDefault()
        
        try {
            await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString() })
                
            //Reseteamos Valores del State
            toast.success('Orden enviada con exito')

            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            setTimeout(() => {
                    router.push('/')
            }, 2500);

        } catch (error) {
            console.log(error)
        }

        
    }

    
    

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,                
                item,
                handleSetItem,
                modal,
                handleModal,
                handleAgregarPedido,
                pedido,
                handleActualizarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total,        
                ordenesTodas,
                dataOrdenFalse,
                dataOrdenTrue,
                ordenesPreparadas,
                ordenesPendientes,                
                totalDespachadas,
                totalPendientes
                                                  
                                                                             
                              
            }}>
            {children}
        </QuioscoContext.Provider>
    )

}

export {
    QuioscoProvider
}

export default QuioscoContext