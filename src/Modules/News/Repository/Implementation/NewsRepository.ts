import { INewsRepository } from "../INewsRepository";
import { News } from "../../model/News";
import { prisma } from "../../../../Client/Prisma/Client.prisma";


export class NewsRepository implements INewsRepository {

  private constructor() { }
  private static INSTANCE: NewsRepository
  public static getInstance(): NewsRepository {

    if (!NewsRepository.INSTANCE) {

      NewsRepository.INSTANCE = new NewsRepository()

    }

    return NewsRepository.INSTANCE
  }

  async create(title: string, description: string, userId: string, categoryId: string) {

    const newsTitle = title
    const newsDescription = description

    const newsProps = {

      title: newsTitle,
      description: newsDescription,
      userId: userId,
      categoryId: categoryId
    }

    const news = new News(newsProps)
    await news.create(newsProps)

    console.log(news)
    return news
  }

  async findOne(id: string) {

    const newsId = id

    const findOne = await prisma.new.findUnique({

      where: { id: newsId },

      include: {

        User_New: true,
        Category_New: true
      }
    })

    return findOne
  }

  async discoverByTitle(title: string) {

    const discoverNewsByTitle = await prisma.new.findMany({

      where: {

        title: {

          startsWith: title

        }
      },

    })

    return discoverNewsByTitle
  }

  async findByKeyWords(words: string[]) {

    const keys = [...words]

    if (keys.length > 5) {

      return keys
    }

    const firstKey = keys[0]
    const secondKey = keys[1]
    const thirdKey = keys[2]
    const bedroomKey = keys[3]
    const lastKey = keys[4]

    const findByKeyWords = await prisma.new.findMany({

      where: {
        OR: [{

          title: {

            contains: firstKey
              || secondKey
              || thirdKey
              || bedroomKey
              || lastKey
          }
        }]
      }
    })

    return findByKeyWords
  }

  async findAll() {

    const findAllNews = await prisma.new.findMany({

      include: {

        User_New: true,
        Category_New: true
      }
    })

    return findAllNews
  }

  async remove(newsId: string) {

    const id = newsId

    const removeNews = await prisma.new.delete({

      where: { id: id }
    })

    return removeNews
  }
}