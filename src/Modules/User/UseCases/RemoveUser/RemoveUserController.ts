import { RemoveUserUseCase } from "./RemoveUserUseCase";
import { Request, Response } from 'express'

export class RemoveUserController {

  constructor(private removeUserUseCase: RemoveUserUseCase) { }
  async handle(request: Request, response: Response) {

    const { userEmail } = request.params

    try {

      const findAndRemoveUser = await this.removeUserUseCase.execute(userEmail)
      return response.status(204).send(findAndRemoveUser)
    }
    catch (exception) {

      return response.status(401).send(exception)
    }
  }
}