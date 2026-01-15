-- CreateTable
CREATE TABLE "game_spins" (
    "id" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_spins_pkey" PRIMARY KEY ("id")
);
