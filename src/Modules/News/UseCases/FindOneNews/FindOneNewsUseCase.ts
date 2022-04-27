import { INewsRepository } from "../../Repository/INewsRepository";


export class FindOnewNewsUseCase {

  constructor(private newsRepository: INewsRepository) { }
  async execute(newsId: string) {

    const verifyNewsAlreadyExists = await this.newsRepository.findOne(newsId)
    if (!verifyNewsAlreadyExists) {

      throw new Error("This news not exists")
    }

    return verifyNewsAlreadyExists
  }
}