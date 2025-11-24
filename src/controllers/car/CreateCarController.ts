import { Request, Response } from "express";
import { CreateCarService } from "../../services/car/CreateCarService";

class CreateCarController {
  async handle(req: Request, res: Response) {
    const { placa, cor, marca } = req.body as {
      placa: string;
      cor: string;
      marca: string;
    };

    const createCarService = new CreateCarService();

    const response = await createCarService.execute({ placa, cor, marca });

    res.json(response);
  }
}

export { CreateCarController };
