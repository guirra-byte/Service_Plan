import { IUserRepository } from "../../Repository/IUserRepository";

export class NewPlanUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute(email: string) {

    const verifyUserAlreadyExists = await this.userRepository.findOne(email)
    if (!verifyUserAlreadyExists) {

      throw new Error('This Customer not exists')
    }

    const updateUserPlan = await this.userRepository.newPlan(email)
    return updateUserPlan
  }
}