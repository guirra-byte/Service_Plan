import { Entity } from "../../Class/Entity";
import { prisma } from '../../../Client/Prisma/Client.prisma'


type UserProps = {

  name: string
  email: string
  plan_access?: boolean
}

export class User extends Entity<UserProps>{

  constructor(props: UserProps) {

    props.plan_access = false
    super(props)
  }

  async create(props: UserProps) {

    const name = props.name
    const email = props.email
    const plan_access = props.plan_access

    const create = await prisma.user.create({

      data: {

        name,
        email,
        plan_access
      }
    })

    console.log(create)
    return create
  }
}

