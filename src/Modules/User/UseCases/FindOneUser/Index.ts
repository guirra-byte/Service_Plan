import { FindOneUserUseCase } from "./FindOneUserUseCase";
import { UserRepository } from "../../Repository/Implementation/UserRepository";
import { FindOneUserController } from "./FindOneUserController";

const userRepository = UserRepository.getInstance()

const findOneUserUseCase = new FindOneUserUseCase(userRepository)

const findOneUserController = new FindOneUserController(findOneUserUseCase)

export { findOneUserController }  