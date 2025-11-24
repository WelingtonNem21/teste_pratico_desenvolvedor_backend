import { Request, Response } from "express";
import { ByIdDriverService } from "../../services/driver/ByIdDriverService";

class ByIdDriverController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;

    if (!id) {
      throw new Error("nd placa");
    }

    const byIdDriverService = new ByIdDriverService();

    const response = await byIdDriverService.execute({ id });

    res.json(response);
  }
}

export { ByIdDriverController };
