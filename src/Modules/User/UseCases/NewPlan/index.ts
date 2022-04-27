import { NewPlanController } from "./NewPlanController";
import { NewPlanUseCase } from "./NewPlanUseCase";
import { UserRepository } from "../../Repository/Implementation/UserRepository";

const userRepository = UserRepository.getInstance()

const updateUserPlanUseCase = new NewPlanUseCase(userRepository)

const updateUserPlanController = new NewPlanController(updateUserPlanUseCase)

export { updateUserPlanController }