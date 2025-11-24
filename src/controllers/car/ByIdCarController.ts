import { Request, Response } from "express";
import { ByIdCarService } from "../../services/car/ByIdCarService";

class ByIdCarController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;

    if (!id) {
      throw new Error("nd placa");
    }

    const byIdCarService = new ByIdCarService();

    const response = await byIdCarService.execute({ id });

    res.json(response);
  }
}

export { ByIdCarController };
