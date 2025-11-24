import { Request, Response } from "express";
import { UpdateDriverService } from "../../services/driver/UpdateDriverService";

class UpdateDriverController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;
    const { nome } = req.body as {
      nome: string;
    };

    const updateDriverService = new UpdateDriverService();

    const response = await updateDriverService.execute({
      nome,
      id,
    });

    res.json(response);
  }
}

export { UpdateDriverController };
