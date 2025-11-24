import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  id: string;
}

class ByIdDriverService {
  async execute({ id }: propsCar) {
    if (!id) {
      throw new Error("Informe a id do veículo.");
    }

    const byIdCarService = await prismaDb.motorista.findUnique({
      where: {
        id: Number(id),
      },
    });

    return byIdCarService;
  }
}

export { ByIdDriverService };
