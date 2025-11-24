import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  nome: string;
}

class CreateDriverService {
  async execute({ nome }: propsCar) {
    if (!nome) {
      throw new Error("Informe a nome do motorista.");
    }

    const createCarService = await prismaDb.motorista.create({
      data: {
        nome: nome,
      },
    });

    return createCarService;
  }
}

export { CreateDriverService };
