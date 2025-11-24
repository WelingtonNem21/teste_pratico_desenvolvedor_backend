import { prismaDb } from "../../prisma/prisma";

interface propsCar {
  id: string;
}

class DeleteCarService {
  async execute({ id }: propsCar) {
    if (!id) {
      throw new Error("Informe a id do veículo.");
    }

    const deleteCar = prismaDb.car.delete({
      where: {
        id: Number(id),
      },
    });

    return deleteCar;
  }
}

export { DeleteCarService };
