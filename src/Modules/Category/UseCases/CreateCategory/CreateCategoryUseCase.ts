import { ICategoryRepository } from "../../Repository/ICategoryRepository";

export class CreateCategoryUseCase {

  constructor(private categoryRepository: ICategoryRepository) { }
  async execute(title: string, description: string) {

    const verifyCategoryAlreadyExists = await this.categoryRepository.findOne(title)
    if (verifyCategoryAlreadyExists) {

      throw new Error('This Category Already Exists')
    }

    const createCategory = await this.categoryRepository.create(title, description)
    return createCategory
  }
}