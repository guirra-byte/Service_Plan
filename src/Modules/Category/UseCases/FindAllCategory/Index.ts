import { FindAllCategoryController } from "./FindAllCategoryController";
import { CategoryRepository } from "../../Repository/Implementation/CategoryRepository";
import { FindAllCategoryUseCase } from "./FindAllCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance()

const findAllCategoryUseCase = new FindAllCategoryUseCase(categoryRepository)

const findAllCategoryController = new FindAllCategoryController(findAllCategoryUseCase)

export { findAllCategoryController }