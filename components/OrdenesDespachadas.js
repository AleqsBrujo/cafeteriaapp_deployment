import Image from "next/image"
import { formatearDinero } from "@/helpers"



export default function OrdenesDespachadas({platillo}) {
   const { id, nombre, total, pedido} = platillo         
              
  return (   
    
    <div className="border border-gray-500 p-5 space-y-3">
       <h3 className="text-2xl font-semibold">Orden: <label className="text-amber-500">{id}</label></h3>
       <p className="text-lg font-semibold">Cliente: <label className="text-amber-500">{nombre}</label></p>

       <div>
        {pedido?.map(plato => (
            <div key={plato.id} className='py-3 flex border-b border-gray-500 last-of-type:border-0 items-center'>
                <div className="w-16">
                    <Image
                        width={400}
                        height={500}
                        src={`/assets/img/${plato.imagen}.jpg`}
                        alt={`Imagen de ${plato.nombre}`}/>
                </div>

                <div className="p-5 space-y-2">
                    <h4 className="text-xl text-amber-500 font-semibold">{plato.nombre}</h4>
                    <p className="text-lg font-semibold">Cantidad: <label className="text-amber-500">{plato.cantidad}</label></p>
                </div>
            </div>
        ))}
       </div>
       <div className="md:flex md:items-center md:justify-between my-10">
            <p className="mt-5 font-semibold text-2xl ">
                Total: {formatearDinero(total)}
            </p>            
       </div>      
    </div>
    
    
    
  )
}
