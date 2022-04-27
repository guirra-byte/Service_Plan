/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category_new` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_new` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `category_new` DROP FOREIGN KEY `Category_New_fk_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `category_new` DROP FOREIGN KEY `Category_New_new_fkey`;

-- DropForeignKey
ALTER TABLE `user_new` DROP FOREIGN KEY `User_New_fk_new_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_new` DROP FOREIGN KEY `User_New_fk_user_id_fkey`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `category_new`;

-- DropTable
DROP TABLE `user_new`;

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `categories_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_news` (
    `id` VARCHAR(191) NOT NULL,
    `fk_user_id` VARCHAR(191) NOT NULL,
    `fk_new_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category_news` (
    `id` VARCHAR(191) NOT NULL,
    `new` VARCHAR(191) NOT NULL,
    `fk_category_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_news` ADD CONSTRAINT `user_news_fk_user_id_fkey` FOREIGN KEY (`fk_user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_news` ADD CONSTRAINT `user_news_fk_new_id_fkey` FOREIGN KEY (`fk_new_id`) REFERENCES `news`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `category_news` ADD CONSTRAINT `category_news_new_fkey` FOREIGN KEY (`new`) REFERENCES `news`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `category_news` ADD CONSTRAINT `category_news_fk_category_id_fkey` FOREIGN KEY (`fk_category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
