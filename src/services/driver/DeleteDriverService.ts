import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  id: string;
}

class DeleteDriverService {
  async execute({ id }: propsCar) {
    if (!id) {
      throw new Error("Informe a id do motorista.");
    }

    const deleteCar = prismaDb.motorista.delete({
      where: {
        id: Number(id),
      },
    });

    return deleteCar;
  }
}

export { DeleteDriverService };
