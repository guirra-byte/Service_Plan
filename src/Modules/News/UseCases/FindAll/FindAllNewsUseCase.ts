import { INewsRepository } from "../../Repository/INewsRepository";

export class FindAllNewsUseCase {

  constructor(private newsRepository: INewsRepository) { }
  async execute() {

    const findAllNews = await this.newsRepository.findAll();
    return findAllNews;
  };
};