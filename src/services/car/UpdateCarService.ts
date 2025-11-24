import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  id: string;
  placa: string;
  marca: string;
  cor: string;
}

class UpdateCarService {
  async execute({ id, placa, cor, marca }: propsCar) {
    if (!placa) {
      throw new Error("Informe a placa do veículo.");
    }

    if (!cor) {
      throw new Error("Informe a cor do veículo.");
    }

    if (!marca) {
      throw new Error("Informe a marca do veículo.");
    }
    if (!id) {
      throw new Error("Informe a id do veículo.");
    }

    const updateCarService = await prismaDb.car.update({
      where: {
        id: Number(id),
      },
      data: {
        placa: placa,
        cor: cor,
        marca: marca,
      },
    });

    return updateCarService;
  }
}

export { UpdateCarService };
