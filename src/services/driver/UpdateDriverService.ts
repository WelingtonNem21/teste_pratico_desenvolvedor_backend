import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  id: string;
  nome: string;
}

class UpdateDriverService {
  async execute({ id, nome }: propsCar) {
    if (!nome) {
      throw new Error("Informe a nome do motorista.");
    }

    if (!id) {
      throw new Error("Informe a id do motorista.");
    }

    const updateCarService = await prismaDb.motorista.update({
      where: {
        id: Number(id),
      },
      data: {
        nome: nome,
      },
    });

    return updateCarService;
  }
}

export { UpdateDriverService };
