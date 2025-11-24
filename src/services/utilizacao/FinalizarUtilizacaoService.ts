import { prismaDb } from "../../prisma/prisma";

class FinalizarUtilizacaoService {
  async execute(id: number) {
    const utilizacao = await prismaDb.utilizacao.findUnique({
      where: { id },
    });

    if (!utilizacao) throw new Error("Utilização não encontrada");

    if (utilizacao.dataTerminoUtilizacao) {
      throw new Error("Utilização já finalizada");
    }

    const updated = await prismaDb.utilizacao.update({
      where: { id },
      data: {
        dataTerminoUtilizacao: new Date(),
      },
    });

    return updated;
  }
}

export { FinalizarUtilizacaoService };
