import { Request, Response } from "express";
import { DeleteDriverService } from "../../services/driver/DeleteDriverService";

class DeleteDriverController {
  async handle(req: Request, res: Response) {
    const id = req.params.id as string;

    const deleteDriverService = new DeleteDriverService();

    const response = await deleteDriverService.execute({ id });

    res.json(response);
  }
}

export { DeleteDriverController };
