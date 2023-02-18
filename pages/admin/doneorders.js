import AdminLayout from "@/layout/AdminLayout"
import OrdenesDespachadas from "@/components/OrdenesDespachadas"
import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"



export default function Doneorders() {  
  const {dataOrdenTrue, totalDespachadas} = useQuiosco() 
         
   
    
    return (
      <AdminLayout     
      pagina={'Admin - Orden Despachadas'}>
        <h1 className="text-4xl font-black">
          Panel de Administración
        </h1>  
        
        <p className="text-2xl my-10">
          Resumen de Ordenes despachadas
        </p>
  
        
          {dataOrdenTrue && dataOrdenTrue?.length ? 
          
          dataOrdenTrue?.map(platillo => (
            <OrdenesDespachadas
              key={platillo.id}
              platillo={platillo}                      
              />)) :  <p>No hay ordenes Péndientes</p> }

         {dataOrdenTrue && dataOrdenTrue?.length ?
          <h1 className="text-2xl my-10">
          Total facturado: 
          <label className="text-3xl font-black"> {formatearDinero( totalDespachadas) }</label>
      </h1> : 'Edo. de Cuenta sin datos' 
      }                 
               
        
      </AdminLayout>
        )
  }