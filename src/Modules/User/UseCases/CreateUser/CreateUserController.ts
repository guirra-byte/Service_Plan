import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, response, Response } from 'express'


export class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) { }
  async handle(request: Request, response: Response) {

    const { name, email } = request.body

    try {

      const createUser = await this.createUserUseCase.execute(name, email)
      return response.status(201).send(createUser)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}