import { ICategoryRepository } from "../../Repository/ICategoryRepository";

export class FindAllCategoryUseCase {

  constructor(private categoryRepository: ICategoryRepository) { }
  async execute() {

    const findAllCategory = await this.categoryRepository.findAll()
    return findAllCategory
  }
}