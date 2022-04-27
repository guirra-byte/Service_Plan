import { CreateNewsUseCase } from "./CreateNewsUseCase";
import { Request, Response } from 'express'
import { verifyNewsAlreadyExists } from "../../../../Routes/Middleware/News.middleware";

export class CreateNewsController {

  constructor(private createNewsUseCase: CreateNewsUseCase) { }
  async handle(request: Request, response: Response) {

    const { title, description, userId, categoryId } = request.body

    try {

      const createNews = await this.createNewsUseCase.execute(title, description, userId, categoryId)
      return response.status(201).send(createNews)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}