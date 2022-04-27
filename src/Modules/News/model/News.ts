import { prisma } from '../../../Client/Prisma/Client.prisma'
import { Entity } from "../../Class/Entity";


type NewsProps = {

  title: string
  description: string
  userId: string
  categoryId: string
}

export class News extends Entity<NewsProps>{

  constructor(props: NewsProps) {

    super(props)
  }

  async create(props: NewsProps) {

    const title = props.title
    const description = props.description

    const userId = props.userId
    const categoryId = props.categoryId

    const create = await prisma.new.create({

      data: {

        title,
        description,
        User_New: {

          //Primeiro Objeto passado é A Criação de um novo relationamento
          //Novo Registro na tabela de Relacionamentos
          create: {

            //Usando o Create pois não existe nenhum relacionamento existente
            //Chama o mesmo Objeto de Users

            user: {

              connect: {

                id: userId
              }
            }
          }
        },
        Category_New: {

          create: {

            category: {

              connect: {

                id: categoryId
              }
            }
          }

        }
      }
    })


    console.log(create)
    return create

  }
}

