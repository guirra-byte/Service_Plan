import { IUserRepository } from "../../Repository/IUserRepository";

export class FindAllUserUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute() {

    const findAllUser = await this.userRepository.findAll()
    return findAllUser
  }
}