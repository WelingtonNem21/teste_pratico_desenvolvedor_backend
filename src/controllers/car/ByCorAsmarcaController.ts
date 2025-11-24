import { Request, Response } from "express";
import { ByCorAsmarcaService } from "../../services/car/ByCorAsmarcaService";

class ByCorAsmarcaController {
  async handle(req: Request, res: Response) {
    const { cor, marca } = req.query as { cor: string; marca: string };

    const byCorAsmarcaService = new ByCorAsmarcaService();

    const response = await byCorAsmarcaService.execute({ cor, marca });

    return res.json(response);
  }
}

export { ByCorAsmarcaController };
