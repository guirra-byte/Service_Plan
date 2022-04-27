import { Request, Response, NextFunction } from 'express'
import { prisma } from '../../Client/Prisma/Client.prisma'

async function verifyNewsAlreadyExists(request: Request, response: Response, next: NextFunction) {

  const { title } = request.body;

  const verifyNews = await prisma.new.findFirst({

    where: { title: title }
  })

  if (verifyNews) {

    return response.status(400).send({ error: "This news already exists" })
  }

  return next()

}

export { verifyNewsAlreadyExists }