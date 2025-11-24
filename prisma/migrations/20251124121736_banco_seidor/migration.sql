-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "marca" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motorista" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Motorista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilizacao" (
    "id" SERIAL NOT NULL,
    "dataInicioUtilizacao" TIMESTAMP(3) NOT NULL,
    "dataTerminoUtilizacao" TIMESTAMP(3),
    "motivoUtilizacao" TEXT NOT NULL,
    "motoristaId" INTEGER NOT NULL,
    "automovelId" INTEGER NOT NULL,

    CONSTRAINT "Utilizacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_placa_key" ON "Car"("placa");

-- AddForeignKey
ALTER TABLE "Utilizacao" ADD CONSTRAINT "Utilizacao_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilizacao" ADD CONSTRAINT "Utilizacao_automovelId_fkey" FOREIGN KEY ("automovelId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
