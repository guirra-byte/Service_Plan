import { INewsRepository } from "../../Repository/INewsRepository";

export class FindByKeywordsUseCase {

  constructor(private newsRepository: INewsRepository) { }

  async execute(words: string[]) {

    const verifyNewsExistsWhifWords = await this.newsRepository.findByKeyWords(words)
    return verifyNewsExistsWhifWords
  }
}