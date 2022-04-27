import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { Request, Response } from 'express'

export class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }
  async handle(request: Request, response: Response) {

    const { title, description } = request.body

    try {

      const createCategory = await this.createCategoryUseCase.execute(title, description)
      return response.status(201).send(createCategory)
    }

    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}