import { INewsRepository } from "../../Repository/INewsRepository";

export class RemoveNewsUseCase {

  constructor(private newsRepository: INewsRepository) { };

  async execute(newsId: string) {

    const verifyNewsAlreadyExists = await this.newsRepository.findOne(newsId);

    if (!verifyNewsAlreadyExists) {

      throw new Error("This News not exists");
    }

    const removeNews = await this.newsRepository.remove(newsId);
    return removeNews;
  }
};