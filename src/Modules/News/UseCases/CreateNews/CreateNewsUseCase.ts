import { INewsRepository } from '../../Repository/INewsRepository';
import { IUserRepository } from '../../../User/Repository/IUserRepository';
import { prisma } from '../../../../Client/Prisma/Client.prisma';

export class CreateNewsUseCase {

  constructor(private newsRepository: INewsRepository, private userRepository: IUserRepository) { }

  async execute(title: string, description: string, userId: string, categoryId: string) {

    // const verifyNewsAlreadyExists = await prisma.new.findUnique({

    //   where: { title: title }
    // })

    // if (verifyNewsAlreadyExists) {

    //   throw new Error('This News Already Exists, try again')
    // }

    const createNews = await this.newsRepository.create(title, description, userId, categoryId);
    return createNews;
  }
};