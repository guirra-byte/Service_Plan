import { FindAllNewsController } from "./FindAllNewsController";
import { FindAllNewsUseCase } from "./FindAllNewsUseCase";
import { NewsRepository } from "../../Repository/Implementation/NewsRepository";

const newsRepository = NewsRepository.getInstance();

const findAllNewsUseCase = new FindAllNewsUseCase(newsRepository);

const findAllNewsController = new FindAllNewsController(findAllNewsUseCase);

export { findAllNewsController };