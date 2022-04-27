import { ICategoryRepository } from "../../Repository/ICategoryRepository";

export class RemoveCategoryUseCase {

  constructor(private categoryRepository: ICategoryRepository) { }
  async execute(categoryId: string) {

    const verifyCategoryAlreadyExists = await this.categoryRepository.findOne(categoryId)
    if (!verifyCategoryAlreadyExists) {

      throw new Error("Not is possible remove this category")
    }

    const removeCategory = await this.categoryRepository.remove(categoryId)
    return removeCategory
  }

}