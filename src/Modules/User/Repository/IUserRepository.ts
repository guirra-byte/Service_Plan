

export interface IUserRepository {

  create(name: string, email: string): any
  findOne(email: string): any
  findAll(): any
  remove(email: string): any
  newPlan(email: string): any
  // update()

}