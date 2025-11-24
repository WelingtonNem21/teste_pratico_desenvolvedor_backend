import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  placa: string;
  marca: string;
  cor: string;
}

class CreateCarService {
  async execute({ placa, cor, marca }: propsCar) {
    if (!placa) {
      throw new Error("Informe a placa do veículo.");
    }

    if (!cor) {
      throw new Error("Informe a cor do veículo.");
    }

    if (!marca) {
      throw new Error("Informe a marca do veículo.");
    }

    const verificarPlaca = await prismaDb.car.findUnique({
      where: {
        placa: placa,
      },
    });

    if (verificarPlaca) {
      throw new Error("Placa já está cadastrada");
    }

    const createCarService = await prismaDb.car.create({
      data: {
        placa: placa,
        cor: cor,
        marca: marca,
      },
    });

    return createCarService;
  }
}

export { CreateCarService };
