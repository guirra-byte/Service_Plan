import { Request, Response } from 'express'
import { FindAllUserUseCase } from "./FindAllUserUseCase";

export class FindAllUserController {

  constructor(private findAllUserUseCase: FindAllUserUseCase) { }
  async handle(request: Request, response: Response) {

    try {

      const findAllUser = await this.findAllUserUseCase.execute()
      return response.status(201).send(findAllUser)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}