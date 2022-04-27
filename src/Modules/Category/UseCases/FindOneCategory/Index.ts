import { FindOneCategoryController } from "./FindOneCategoryController";
import { CategoryRepository } from "../../Repository/Implementation/CategoryRepository";
import { FindOneCategoryUseCase } from "./FindOneCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance()

const findOneCategoryUseCase = new FindOneCategoryUseCase(categoryRepository)

const findOneCategoryController = new FindOneCategoryController(findOneCategoryUseCase)

export { findOneCategoryController } 