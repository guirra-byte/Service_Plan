import { NewsRepository } from "../../Repository/Implementation/NewsRepository";
import { FindByKeywordsController } from "./FindByKeywordsController";
import { FindByKeywordsUseCase } from "./FindByKeywordsUseCase";

const newsRepository = NewsRepository.getInstance()

const findNewsByKeysUseCase = new FindByKeywordsUseCase(newsRepository)

const findNewsByKeysController = new FindByKeywordsController(findNewsByKeysUseCase)

export { findNewsByKeysController }