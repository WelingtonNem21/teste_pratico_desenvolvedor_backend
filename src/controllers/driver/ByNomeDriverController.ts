import { Request, Response } from "express";
import { ByNomeDriverService } from "../../services/driver/ByNomeDriverService";

class ByNomeDriverController {
  async handle(req: Request, res: Response) {
    const { nome } = req.query as { nome: string };

    const byNomeDriverService = new ByNomeDriverService();

    const response = await byNomeDriverService.execute({ nome });

    return res.json(response);
  }
}

export { ByNomeDriverController };
