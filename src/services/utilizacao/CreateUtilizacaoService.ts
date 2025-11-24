import { prismaDb } from "../../prisma/prisma";

interface PropsCreate {
  dataInicioUtilizacao: Date;
  motivoUtilizacao: string;
  motoristaId: number;
  automovelId: number;
}

class CreateUtilizacaoService {
  async execute({
    dataInicioUtilizacao,
    motivoUtilizacao,
    motoristaId,
    automovelId,
  }: PropsCreate) {
    if (!motivoUtilizacao) {
      throw new Error("Motivo obrigatório");
    }
    if (!motoristaId) {
      throw new Error("Motorista obrigatório");
    }
    if (!automovelId) {
      throw new Error("Automóvel obrigatório");
    }

    const utilizacao = await prismaDb.utilizacao.create({
      data: {
        dataInicioUtilizacao,
        motivoUtilizacao,
        motoristaId,
        automovelId,
      },
    });

    return utilizacao;
  }
}

export { CreateUtilizacaoService };
