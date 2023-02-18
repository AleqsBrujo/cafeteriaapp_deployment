import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async function handler(req, res) {

    if(req.method === 'GET'){
      const ordenes = await prisma.orden.findMany({ 
        where: {
            estado: false
        }
    })
      res.status(200).json(ordenes)
    }

        if(req.method ==='POST'){
          const orden = await prisma.orden.create({
            data: {
                pedido: req.body.pedido,
                nombre: req.body.nombre,
                total: req.body.total,
                fecha: req.body.fecha,
            },
          })
          res.status(200).json(orden)
        }


}