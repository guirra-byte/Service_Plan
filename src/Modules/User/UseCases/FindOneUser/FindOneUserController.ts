import { FindOneUserUseCase } from "./FindOneUserUseCase";
import { Request, Response } from 'express'

export class FindOneUserController {

  constructor(private findOneUserUseCase: FindOneUserUseCase) { }
  async handle(request: Request, response: Response) {

    const { userEmail } = request.params

    try {

      const findOneUser = await this.findOneUserUseCase.execute(userEmail)
      return response.status(200).send(findOneUser)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}