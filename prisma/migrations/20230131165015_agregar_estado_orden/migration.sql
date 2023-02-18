/*
  Warnings:

  - You are about to drop the column `cliente` on the `orden` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `cliente`,
    ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
