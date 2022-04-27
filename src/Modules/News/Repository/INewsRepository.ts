
export interface INewsRepository {

  create(title: string, description: string, userId: string, categoryId: string): any
  findOne(id: string): any
  // discoverByTitle(title: string): any
  findByKeyWords(words: string[]): any
  findAll(): any
  remove(newsId: string): any
  // update

}