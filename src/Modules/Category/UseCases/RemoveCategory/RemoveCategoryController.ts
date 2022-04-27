import { RemoveCategoryUseCase } from "./RemoveCategoryUseCase";
import { Request, response, Response } from 'express'

export class RemoveCategoryController {

  constructor(private removeCategoryUseCase: RemoveCategoryUseCase) { }
  async handle(request: Request, Response: Response) {

    const { categoryId } = request.params

    try {

      const findAndRemoveCategory = await this.removeCategoryUseCase.execute(categoryId)
      return response.status(204).send(findAndRemoveCategory)
    }

    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}