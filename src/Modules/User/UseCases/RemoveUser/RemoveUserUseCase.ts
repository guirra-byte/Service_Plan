import { IUserRepository } from "../../Repository/IUserRepository";


export class RemoveUserUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute(id: string) {

    const verifyUserAlreadyExists = await this.userRepository.findOne(id)
    if (!verifyUserAlreadyExists) {

      throw new Error("This customer not exists")
    }

    const removeUser = await this.userRepository.remove(id)
    return removeUser
  }
}