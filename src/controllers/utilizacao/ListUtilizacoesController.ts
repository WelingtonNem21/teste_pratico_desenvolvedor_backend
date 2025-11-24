import { Request, Response } from "express";
import { ListUtilizacoesService } from "../../services/utilizacao/ListUtilizacoesService";

class ListUtilizacoesController {
  async handle(req: Request, res: Response) {
    const service = new ListUtilizacoesService();
    const utilizacoes = await service.execute();

    return res.json(utilizacoes);
  }
}

export { ListUtilizacoesController };
