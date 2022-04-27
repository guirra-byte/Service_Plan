import { IUserRepository } from "../IUserRepository";
import { User } from "../../model/User";
import { prisma } from "../../../../Client/Prisma/Client.prisma";

export class UserRepository implements IUserRepository {

  private constructor() { }

  private static INSTANCE: UserRepository
  public static getInstance(): UserRepository {

    if (!UserRepository.INSTANCE) {

      UserRepository.INSTANCE = new UserRepository()
    }

    return UserRepository.INSTANCE
  }

  async create(name: string, email: string) {

    const userName = name
    const userMail = email

    const newUserProps = {

      name: userName,
      email: userMail
    }

    const newUser = new User(newUserProps)
    await newUser.create(newUserProps)

  }

  async findOne(email: string) {

    const userEmail = email

    const findById = await prisma.user.findUnique({

      where: { email: userEmail }
    })

    return findById
  }

  async findAll() {

    const findAllUsers = await prisma.user.findMany({

      include: { User_New: true }

    })

    return findAllUsers

  }

  async remove(email: string) {

    const userMail = email

    const findAndRemove = await prisma.user.delete({

      where: { email: userMail }

    })

    return findAndRemove
  }

  async newPlan(email: string) {

    const userMail = email

    const findAndUpdate = await prisma.user.update({

      where: { email: userMail },
      data: {

        plan_access: true

      }
    })

    return findAndUpdate
  }

}