import { IUserRepository } from "../../Repository/IUserRepository";

export class FindOneUserUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute(email: string) {

    const findOneUser = await this.userRepository.findOne(email)
    if (!findOneUser) {

      throw new Error("Not is possible find this Customer")
    }

    return findOneUser
  }
}