import { FindByKeywordsUseCase } from "./FindByKeywordsUseCase";
import { Request, Response } from 'express'

export class FindByKeywordsController {

  constructor(private findByKeywords: FindByKeywordsUseCase) { }
  async handle(request: Request, response: Response) {

    const { words } = request.body

    try {

      const findKeyWords = await this.findByKeywords.execute(words)
      return response.status(200).send(findKeyWords)
    }

    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}