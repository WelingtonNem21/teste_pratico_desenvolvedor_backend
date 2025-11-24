import { Request, Response } from "express";
import { UpdateCarService } from "../../services/car/UpdateCarService";

class UpdateCarController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;
    const { placa, cor, marca } = req.body as {
      placa: string;
      cor: string;
      marca: string;
    };

    const updateCarService = new UpdateCarService();

    const response = await updateCarService.execute({
      placa,
      cor,
      marca,
      id,
    });

    res.json(response);
  }
}

export { UpdateCarController };
