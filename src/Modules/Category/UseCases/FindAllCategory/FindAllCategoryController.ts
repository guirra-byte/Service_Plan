import { FindAllCategoryUseCase } from "./FindAllCategoryUseCase";
import { Request, Response } from 'express'

export class FindAllCategoryController {

  constructor(private findAllCategoryUseCase: FindAllCategoryUseCase) { }
  async handle(request: Request, response: Response) {

    try {

      const findAllCategory = await this.findAllCategoryUseCase.execute()
      return response.status(200).send(findAllCategory)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}