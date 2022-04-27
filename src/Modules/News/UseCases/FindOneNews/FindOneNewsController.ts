import { FindOneUserUseCase } from "../../../User/UseCases/FindOneUser/FindOneUserUseCase";
import { FindOnewNewsUseCase } from "./FindOneNewsUseCase";
import { Request, Response } from 'express'

export class FindOneNewsController {

  constructor(private findOneNewsUseCase: FindOnewNewsUseCase) { }
  async handle(request: Request, response: Response) {

    const { newsId } = request.params;

    try {

      const findOneNews = await this.findOneNewsUseCase.execute(newsId)
      return response.status(200).send(findOneNews)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}