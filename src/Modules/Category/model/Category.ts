import { Entity } from "../../Class/Entity";
import { prisma } from '../../../Client/Prisma/Client.prisma'


type CategoryProps = {

  title: string
  description: string
}

export class Category extends Entity<CategoryProps>{

  constructor(props: CategoryProps) {

    super(props)
  }

  async create(props: CategoryProps) {

    const title = props.title
    const description = props.description

    const create = await prisma.category.create({

      data: {

        title,
        description
      }
    })

    console.log(create)
    return create
  }
}