import { CreateNewsController } from "./CreateNewsController";
import { CreateNewsUseCase } from "./CreateNewsUseCase";

import { NewsRepository } from "../../Repository/Implementation/NewsRepository";
import { UserRepository } from "../../../User/Repository/Implementation/UserRepository";

const newsRepository = NewsRepository.getInstance();
const userRepository = UserRepository.getInstance();

const createNewsUseCase = new CreateNewsUseCase(newsRepository, userRepository);

const createNewsController = new CreateNewsController(createNewsUseCase);

export { createNewsController };

