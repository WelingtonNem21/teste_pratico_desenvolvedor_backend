import { Request, Response } from "express";
import { CreateDriverService } from "../../services/driver/CreateDriverService";

class CreateDriverController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body as {
      nome: string;
    };

    const createDriverService = new CreateDriverService();

    const response = await createDriverService.execute({ nome });

    res.json({
      messagem: "Criado com sucesso",
      informação: response,
    });
  }
}

export { CreateDriverController };
