import { IUserRepository } from "../../Repository/IUserRepository";

export class CreateUserUseCase {

  constructor(private userRepository: IUserRepository) { }

  async execute(name: string, email: string) {

    const verifyUserAlreadyExists = await this.userRepository.findOne(email)

    if (verifyUserAlreadyExists) {

      throw new Error("This customer already Exists")
    }

    const createUser = await this.userRepository.create(name, email)
    return createUser


  }
}