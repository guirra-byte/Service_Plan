import { RemoveUserUseCase } from "./RemoveUserUseCase";
import { RemoveUserController } from "./RemoveUserController";
import { UserRepository } from "../../Repository/Implementation/UserRepository";

const userRepository = UserRepository.getInstance()

const removeUserUseCase = new RemoveUserUseCase(userRepository)

const removeUserController = new RemoveUserController(removeUserUseCase)

export { removeUserController }