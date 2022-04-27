import { response, Router } from 'express';

import { createNewsController } from '../Modules/News/UseCases/CreateNews/Index';
import { findAllNewsController } from '../Modules/News/UseCases/FindAll/Index';
import { removeNewsController } from '../Modules/News/UseCases/RemoveNews/Index';
import { findOneNewsController } from '../Modules/News/UseCases/FindOneNews/Index';
import { findNewsByKeysController } from '../Modules/News/UseCases/FindByKeywords/Index';

import { verifyNewsAlreadyExists } from './Middleware/News.middleware';

const newsRoutes = Router();

newsRoutes.post('/', verifyNewsAlreadyExists, (request, response) => {

  createNewsController.handle(request, response)
})

newsRoutes.get('/', (request, response) => {

  findAllNewsController.handle(request, response)
})

newsRoutes.delete('/:newsId', (request, response) => {

  removeNewsController.handle(request, response)
})

newsRoutes.get('/:newsId', (request, response) => {

  findOneNewsController.handle(request, response)
})

newsRoutes.post('/keys', (request, response) => {

  findNewsByKeysController.handle(request, response)
})

export { newsRoutes };