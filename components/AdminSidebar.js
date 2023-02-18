import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"


export default function AdminSidebar() {
const { ordenesTodas, ordenesPreparadas, ordenesPendientes } = useQuiosco()
  
 
    
  return (
    <>
    
      <Image width={300} 
               height={100} 
               src='/assets/img/logo.svg' 
               alt="Imagen de logo"/>
      
      <nav className="mt-5">

        <div className="flex items-center gap-4 w-full border hover:bg-amber-400 p-5"> 
        <Image alt="Imagen Icono" 
               width={70} 
               height={70} 
               src={`/assets/img/ordenpendiente.svg`}
                />
        <button type="button" 
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() =>  ordenesPendientes()}>
                {`Ordenes Pendientes`}
        </button>

        </div>
          
        <div className="flex items-center gap-4 w-full border hover:bg-amber-400 p-5">
        <Image alt="Imagen Icono" 
               width={70} 
               height={70} 
               src={`/assets/img/ordencompletada.svg`}
                />
        <button type="button" 
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => ordenesPreparadas()}>
                {`Ordenes listas`}
        </button>
        </div>

        <div className="flex items-center gap-4 w-full border hover:bg-amber-400 p-5">
          <Image alt="Imagen Icono" 
               width={70} 
               height={70} 
               src={`/assets/img/pedidostodos.svg`}
                />
          <button type="button" 
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => ordenesTodas()}>
                {`Todas las ordenes`}
          </button>
        </div>
        
        
  
      
      </nav>                      
        
      
   
    </>
  )
}
