import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  id: string;
}

class ByIdCarService {
  async execute({ id }: propsCar) {
    if (!id) {
      throw new Error("Informe a id do veículo.");
    }

    const ByIdCarService = await prismaDb.car.findUnique({
      where: {
        id: Number(id),
      },
    });

    return ByIdCarService;
  }
}

export { ByIdCarService };
