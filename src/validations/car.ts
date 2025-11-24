import { z } from "zod";

export const createCarSchema = z.object({
  body: z.object({
    placa: z.string().min(1, "Placa é obrigatória"),
    cor: z.string().min(1, "Cor é obrigatória"),
    marca: z.string().min(1, "Marca é obrigatória"),
  }),
});

export const updateCarSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID inválido"),
  }),
  body: z.object({
    placa: z.string().optional(),
    cor: z.string().optional(),
    marca: z.string().optional(),
  }),
});
