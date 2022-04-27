import { CategoryRepository } from "../../Repository/Implementation/CategoryRepository";
import { RemoveCategoryController } from "./RemoveCategoryController";
import { RemoveCategoryUseCase } from "./RemoveCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance()

const removeCategoryUseCase = new RemoveCategoryUseCase(categoryRepository)

const removeCategoryController = new RemoveCategoryController(removeCategoryUseCase)

export { removeCategoryController }