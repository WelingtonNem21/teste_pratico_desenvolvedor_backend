import { prismaDb } from "../../prisma/prisma";

class ListUtilizacoesService {
  async execute() {
    const utilizacoes = await prismaDb.utilizacao.findMany({
      include: {
        motorista: true,
        automovel: true,
      },
    });

    return utilizacoes;
  }
}

export { ListUtilizacoesService };
