import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"

export default function Categoria({categoria}) {
    const {handleClickCategoria, categoriaActual} = useQuiosco()
    const {nombre, icono, id} = categoria

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-black text-white' : ''}
                     flex items-center gap-4 w-full border hover:bg-black hover:text-white p-5`}>
        <Image alt="Imagen Icono" 
               width={70} 
               height={70} 
               src={`/assets/img/icono_${icono}.svg`}
                />
        <button type="button" 
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => handleClickCategoria(id)}>
                {nombre}
        </button>
    </div>
  )
}


