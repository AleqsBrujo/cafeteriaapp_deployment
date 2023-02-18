import AdminLayout from "@/layout/AdminLayout"
import Ordenes from '@/components/Ordenes'
import useQuiosco from '@/hooks/useQuiosco'


export default function Admin() {
   const { dataOrdenFalse } = useQuiosco()  
  
  
  return (
    <AdminLayout     
    pagina={'Admin - Ordenes Pendientes'}>
      <h1 className="text-4xl font-black">
        Panel de Administración
      </h1>  
      
      <p className="text-2xl my-10">
        Administra las ordenes
      </p>

      
        {dataOrdenFalse && dataOrdenFalse?.length ? 
        
        dataOrdenFalse?.map(platillo => (
          <Ordenes
            key={platillo.id}
            platillo={platillo}                      
            />)) :  <p>No hay ordenes Péndientes</p> }    
              
      
    </AdminLayout>
      )
}
