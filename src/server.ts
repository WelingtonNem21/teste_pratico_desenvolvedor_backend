import express, { type Request, type Response } from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    messagem: "Hello world",
  });
});

app.listen(8080, () => {
  console.log("SERVIDOR ONLINE");
});
