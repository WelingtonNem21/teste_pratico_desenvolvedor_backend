import { Router } from "express";
import { CreateCarController } from "./controllers/car/CreateCarController";
import { UpdateCarController } from "./controllers/car/UpdateCarController";
import { DeleteCarController } from "./controllers/car/DeleteCarController";
import { ByIdCarController } from "./controllers/car/ByIdCarController";
import { ByCorAsmarcaController } from "./controllers/car/ByCorAsmarcaController";
import { CreateDriverController } from "./controllers/driver/CreateDriverController";
import { UpdateDriverController } from "./controllers/driver/UpdateDriverController";
import { DeleteDriverController } from "./controllers/driver/DeleteDriverController";
import { ByIdDriverController } from "./controllers/driver/ByIdDriverController";
import { ByNomeDriverController } from "./controllers/driver/ByNomeDriverController";
import { CreateUtilizacaoController } from "./controllers/utilizacao/CreateUtilizacaoController ";
import { FinalizarUtilizacaoController } from "./controllers/utilizacao/FinalizarUtilizacaoController";
import { ListUtilizacoesController } from "./controllers/utilizacao/ListUtilizacoesController";

import { validate } from "./validations/validate";

// Car validations
import { createCarSchema, updateCarSchema } from "./validations/car";

// Driver validations
import { createDriverSchema, updateDriverSchema } from "./validations/driver";

// Utilização validations
import {
  createUtilizacaoSchema,
  finalizarUtilizacaoSchema,
} from "./validations/utilizacao";

const routes = Router();

//car

routes.post(
  "/car",
  validate(createCarSchema),
  new CreateCarController().handle
);

routes.put(
  "/car/:id",
  validate(updateCarSchema),
  new UpdateCarController().handle
);

routes.delete("/car/:id", new DeleteCarController().handle);

routes.get("/car/:id", new ByIdCarController().handle);

routes.get("/car", new ByCorAsmarcaController().handle);

//motorista

routes.post(
  "/driver",
  validate(createDriverSchema),
  new CreateDriverController().handle
);

routes.put(
  "/driver/:id",
  validate(updateDriverSchema),
  new UpdateDriverController().handle
);

routes.delete("/driver/:id", new DeleteDriverController().handle);

routes.get("/driver/:id", new ByIdDriverController().handle);

routes.get("/driver", new ByNomeDriverController().handle);

//utilizacao

routes.post(
  "/utilizacao",
  validate(createUtilizacaoSchema),
  new CreateUtilizacaoController().handle
);

routes.put(
  "/utilizacao/finalizar/:id",
  validate(finalizarUtilizacaoSchema),
  new FinalizarUtilizacaoController().handle
);

routes.get("/utilizacao", new ListUtilizacoesController().handle);

export { routes };
