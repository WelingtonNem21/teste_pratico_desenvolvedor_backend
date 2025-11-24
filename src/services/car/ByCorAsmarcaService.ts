import { prismaDb } from "../../prisma/prisma";

interface FilterProps {
  cor?: string;
  marca?: string;
}

class ByCorAsmarcaService {
  async execute({ cor, marca }: FilterProps) {
    const where: any = {};

    if (cor) {
      where.cor = {
        contains: cor,
        mode: "insensitive",
      };
    }

    if (marca) {
      where.marca = {
        contains: marca,
        mode: "insensitive",
      };
    }

    const ByCorAsMarca = await prismaDb.car.findMany({
      where,
    });

    return ByCorAsMarca;
  }
}

export { ByCorAsmarcaService };
