import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import ResumenProducto from "@/components/ResumenProducto"



export default function Resumen() {
    const { pedido } = useQuiosco()


    return (
        <Layout pagina={'Resumen'}>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>

            {pedido.lenght === 0 ?( <p className="text-center text-2xl">Peidodo vacío, agrega al menos un elemento</p>) :
                pedido.map(producto => (
                    <ResumenProducto
                        producto={producto}
                        key={producto.id}/>
                ))
            }
           
        </Layout>
    )

}