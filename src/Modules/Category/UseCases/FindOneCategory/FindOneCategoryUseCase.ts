import { ICategoryRepository } from "../../Repository/ICategoryRepository";


export class FindOneCategoryUseCase {

  constructor(private categoryRepository: ICategoryRepository) { }
  async execute(categoryId: string) {

    const verifyCategoryAlreadyExists = await this.categoryRepository.findOne(categoryId)
    if (!verifyCategoryAlreadyExists) {

      throw new Error("This category not exists")
    }

    return verifyCategoryAlreadyExists
  }
}