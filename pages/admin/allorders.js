import useQuiosco from "@/hooks/useQuiosco"
import AdminLayout from "@/layout/AdminLayout"
import OrdenesDespachadas from "@/components/OrdenesDespachadas"
import { formatearDinero } from "@/helpers"


export default function AllOrders() {    
    const { dataOrdenTrue, dataOrdenFalse, totalDespachadas, totalPendientes } = useQuiosco()
    
    
    return (
      <AdminLayout     
      pagina={'Admin - Todas las Ordenes'}>
        <h1 className="text-4xl font-black">
          Panel de Administración
        </h1>  
        
        <p className="text-2xl my-10">
          Resumen de Todas las Ordenes
        </p>

        <h2 className="text-2xl my-8 font-bold"> Ordenes Pendientes: </h2>
  
        {dataOrdenFalse && dataOrdenFalse?.length ? 
          
          dataOrdenFalse?.map(platillo => (
            <OrdenesDespachadas
              key={platillo.id}
              platillo={platillo}                      
              />)) :  <p>No hay ordenes Péndientes</p> }
        <div className="border border-gray-500 p-2 h-12 bg-amber-400 text-center items-">
            <p className="font-semibold text-xl">Por Cobrar: <label className="font-semibold text-red-600">{formatearDinero(totalPendientes)}</label></p>
        </div>      
        
        <h2 className="text-2xl my-8 font-bold "> Ordenes Despachadas: </h2>

          {dataOrdenTrue && dataOrdenTrue?.length ? 
          
          dataOrdenTrue?.map(platillo => (
            <OrdenesDespachadas
              key={platillo.id}
              platillo={platillo}                      
              />)) :  <p>No hay ordenes Péndientes</p> }    

        <div className="border border-gray-500 p-2 h-12 bg-amber-400 text-center items-">
            <p className="font-semibold text-xl">Ingresos: <label className="font-semibold text-red-600">{formatearDinero(totalDespachadas)}</label></p>
        </div>        
        
      </AdminLayout>
        )
  }