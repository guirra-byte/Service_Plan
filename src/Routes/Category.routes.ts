import { response, Router } from 'express'
import { createCategoryController } from '../Modules/Category/UseCases/CreateCategory/Index'
import { findOneCategoryController } from '../Modules/Category/UseCases/FindOneCategory/Index'
import { findAllCategoryController } from '../Modules/Category/UseCases/FindAllCategory/Index'
import { removeCategoryController } from '../Modules/Category/UseCases/RemoveCategory/Index'

const categoryRoutes = Router()

categoryRoutes.post('/', (request, response) => {

  createCategoryController.handle(request, response)
})

categoryRoutes.get('/:categoryId', (request, response) => {

  findOneCategoryController.handle(request, response)

})
categoryRoutes.get('/', (request, response) => {

  findAllCategoryController.handle(request, response)

})
categoryRoutes.delete('/:categoryId', (request, response) => {

  removeCategoryController.handle(request, response)
})

export { categoryRoutes }