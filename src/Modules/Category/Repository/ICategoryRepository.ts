

export interface ICategoryRepository {

  create(title: string, description: string): any
  findOne(categoryId: string): any
  findAll(): any
  remove(categoryId: string): any
}

