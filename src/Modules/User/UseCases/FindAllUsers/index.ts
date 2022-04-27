import { UserRepository } from "../../Repository/Implementation/UserRepository";
import { FindAllUserController } from "./FindAllUserController";
import { FindAllUserUseCase } from "./FindAllUserUseCase";

const userRepository = UserRepository.getInstance()

const findAllUserUseCase = new FindAllUserUseCase(userRepository)

const findAllUserController = new FindAllUserController(findAllUserUseCase)

export { findAllUserController }