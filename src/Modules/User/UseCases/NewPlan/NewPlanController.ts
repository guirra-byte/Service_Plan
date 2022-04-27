import { Request, Response } from "express";
import { NewPlanUseCase } from "./NewPlanUseCase";

export class NewPlanController {


  constructor(private newPlanUseCase: NewPlanUseCase) { }
  async handle(request: Request, response: Response) {

    const { userEmail } = request.body

    try {

      const findAndUpdateUserPlan = await this.newPlanUseCase.execute(userEmail)
      return response.status(201).send(findAndUpdateUserPlan)
    }
    catch (exception) {

      return response.status(400).send(exception)
    }
  }
}