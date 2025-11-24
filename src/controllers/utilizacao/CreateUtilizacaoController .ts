import { Request, Response } from "express";
import { CreateUtilizacaoService } from "../../services/utilizacao/CreateUtilizacaoService";

class CreateUtilizacaoController {
  async handle(req: Request, res: Response) {
    const { motivoUtilizacao, motoristaId, automovelId } = req.body;

    const service = new CreateUtilizacaoService();

    const utilizacao = await service.execute({
      motivoUtilizacao,
      motoristaId,
      automovelId,
      dataInicioUtilizacao: new Date(),
    });

    return res.json({
      utilizacao,
    });
  }
}

export { CreateUtilizacaoController };
