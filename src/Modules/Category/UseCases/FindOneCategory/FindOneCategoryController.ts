import { FindOneCategoryUseCase } from "./FindOneCategoryUseCase";
import { Request, Response } from 'express'

export class FindOneCategoryController {

  constructor(private findOneCategoryUseCase: FindOneCategoryUseCase) { }
  async handle(request: Request, response: Response) {

    const { categoryId } = request.params

    try {

      const findOneCategory = await this.findOneCategoryUseCase.execute(categoryId)
      return response.status(200).send(findOneCategory)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}