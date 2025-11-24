import { Request, Response } from "express";
import { DeleteCarService } from "../../services/car/DeleteCarService";

class DeleteCarController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;

    const deleteCarService = new DeleteCarService();

    const response = await deleteCarService.execute({ id });

    res.json(response);
  }
}

export { DeleteCarController };
