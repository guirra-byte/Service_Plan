import { response, Router } from 'express'
import { createUserController } from '../Modules/User/UseCases/CreateUser/Index'
import { findOneUserController } from '../Modules/User/UseCases/FindOneUser/Index'
import { removeUserController } from '../Modules/User/UseCases/RemoveUser/Index'
import { findAllUserController } from '../Modules/User/UseCases/FindAllUsers'
import { updateUserPlanController } from '../Modules/User/UseCases/NewPlan'

const userRoutes = Router()


userRoutes.post('/', (request, response) => {

  createUserController.handle(request, response)

})

userRoutes.get('/:userEmail', (request, response) => {

  findOneUserController.handle(request, response)
})

userRoutes.get('/', (request, response) => {

  findAllUserController.handle(request, response)
})

userRoutes.delete('/:userEmail', (request, response) => {

  removeUserController.handle(request, response)
})

userRoutes.patch('/', (request, response) => {

  updateUserPlanController.handle(request, response)
})

export { userRoutes }