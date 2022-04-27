import { ICategoryRepository } from "../ICategoryRepository";
import { Category } from "../../model/Category";
import { prisma } from "../../../../Client/Prisma/Client.prisma";
import { PrismaClientRustPanicError } from "@prisma/client/runtime";

export class CategoryRepository implements ICategoryRepository {

  private constructor() { }
  private static INSTANCE: CategoryRepository
  public static getInstance(): CategoryRepository {

    if (!CategoryRepository.INSTANCE) {

      CategoryRepository.INSTANCE = new CategoryRepository()
    }

    return CategoryRepository.INSTANCE
  }

  async create(title: string, description: string) {

    const categoryTitle = title
    const categoryDescription = description

    const newCategoryProps = {

      title: categoryTitle,
      description: categoryDescription
    }

    const newCategory = new Category(newCategoryProps)
    await newCategory.create(newCategoryProps)
  }

  async findOne(categoryId: string) {

    const id = categoryId
    const findOne = await prisma.category.findUnique({

      where: { id: id },
      include: {

        Category_New: true
      }
    })

    return findOne
  }

  async findAll() {

    const findAll = await prisma.category.findMany({

      include: {

        Category_New: true,
      }
    })

    return findAll
  }

  async remove(categoryId: string) {

    const id = categoryId
    const findAndRemove = await prisma.category.delete({

      where: { id: id }

    })

    return findAndRemove
  }
}