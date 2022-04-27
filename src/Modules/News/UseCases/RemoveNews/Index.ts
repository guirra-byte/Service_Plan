import { RemoveNewsController } from "./RemoveNewsController";
import { RemoveNewsUseCase } from "./RemoveNewsUseCase";
import { NewsRepository } from "../../Repository/Implementation/NewsRepository";

const newsRepository = NewsRepository.getInstance();

const removeNewsUseCase = new RemoveNewsUseCase(newsRepository);

const removeNewsController = new RemoveNewsController(removeNewsUseCase);

export { removeNewsController };