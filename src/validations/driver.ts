import { z } from "zod";

export const createDriverSchema = z.object({
  body: z.object({
    nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  }),
});

export const updateDriverSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID inválido"),
  }),
  body: z.object({
    nome: z.string().min(3).optional(),
  }),
});
