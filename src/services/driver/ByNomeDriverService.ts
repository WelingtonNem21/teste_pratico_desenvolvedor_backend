import { prismaDb } from "../../prisma/prisma";

interface FilterProps {
  nome: string;
}

class ByNomeDriverService {
  async execute({ nome }: FilterProps) {
    if (!nome) {
      throw new Error("Informe a nome do motorista.");
    }
    const byNomeService = await prismaDb.motorista.findMany({
      where: {
        nome: nome,
      },
    });

    return byNomeService;
  }
}

export { ByNomeDriverService };
