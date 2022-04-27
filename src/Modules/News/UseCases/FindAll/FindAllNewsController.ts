import { FindAllNewsUseCase } from "./FindAllNewsUseCase";
import { Request, Response } from 'express'


export class FindAllNewsController {

  constructor(private findAllNewsUseCase: FindAllNewsUseCase) { }
  async handle(request: Request, response: Response) {

    try {

      const findAllNews = await this.findAllNewsUseCase.execute()
      return response.status(200).send(findAllNews)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}