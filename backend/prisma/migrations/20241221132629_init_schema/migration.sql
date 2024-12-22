/*
  Warnings:

  - Added the required column `age` to the `Disease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symptomdays` to the `Disease` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disease" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "symptomdays" INTEGER NOT NULL;
