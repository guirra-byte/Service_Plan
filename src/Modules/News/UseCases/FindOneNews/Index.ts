import { NewsRepository } from "../../Repository/Implementation/NewsRepository";
import { FindOneNewsController } from "./FindOneNewsController";
import { FindOnewNewsUseCase } from "./FindOneNewsUseCase";

const newsRepository = NewsRepository.getInstance()

const findOneNewsUseCase = new FindOnewNewsUseCase(newsRepository)

const findOneNewsController = new FindOneNewsController(findOneNewsUseCase)

export { findOneNewsController }