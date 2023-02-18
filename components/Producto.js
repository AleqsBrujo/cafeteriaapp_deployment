import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"

import { formatearDinero } from "@/helpers"

function Producto({producto}) {
    const { nombre, precio, imagen } = producto
    const { handleSetItem, handleModal} = useQuiosco()
    
  return (
    <div className="border border-black rounded-md p-3 bg-white">
        <Image src={`/assets/img/${imagen}.jpg`} 
               alt={`Imagen de ${nombre}`} width={250} height={250}/>
        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}            
            </p>
            
            <button type="button"
                    className="bg-white hover:bg-black hover:text-white text-black w-full border border-black rounded-md
                    mt-5 p-3 uppercase font-bold"
                    onClick={() => {
                      handleModal(),
                      handleSetItem(producto)}}>
                    
              Agregar Producto
            </button>
        </div>
    </div>
  )
}

export default Producto