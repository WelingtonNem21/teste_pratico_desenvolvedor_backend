import { z } from "zod";

export const createUtilizacaoSchema = z.object({
  body: z.object({
    motivoUtilizacao: z.string().min(3, "Motivo obrigatório"),
    motoristaId: z.number().int("motoristaId deve ser número"),
    automovelId: z.number().int("automovelId deve ser número"),
  }),
});

export const finalizarUtilizacaoSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID inválido"),
  }),
});
