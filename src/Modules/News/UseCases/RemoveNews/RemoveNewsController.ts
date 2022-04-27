import { RemoveNewsUseCase } from "./RemoveNewsUseCase";
import { Request, response, Response } from 'express';

export class RemoveNewsController {

  constructor(private removeNewsUseCase: RemoveNewsUseCase) { }

  async handle(request: Request, response: Response) {

    const { newsId } = request.params;

    try {

      const findAndRemoveNews = await this.removeNewsUseCase.execute(newsId);
      return response.status(204).send(findAndRemoveNews);
    }
    catch (exception) {

      return response.status(400).send(exception);
    }
  };
};