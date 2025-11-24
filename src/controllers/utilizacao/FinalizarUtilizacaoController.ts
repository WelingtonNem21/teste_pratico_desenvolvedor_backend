import { Request, Response } from "express";
import { FinalizarUtilizacaoService } from "../../services/utilizacao/FinalizarUtilizacaoService";

class FinalizarUtilizacaoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new FinalizarUtilizacaoService();
    const result = await service.execute(Number(id));

    return res.json(result);
  }
}

export { FinalizarUtilizacaoController };
