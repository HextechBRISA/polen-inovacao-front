import { z } from 'zod';

export const cardSchema = z.object({
  number: z.string()
    .min(19, "O número do cartão deve ter 16 dígitos")
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "O número do cartão deve ter 16 dígitos")
    .refine((val) => val.trim() !== '', "O número do cartão é obrigatório"),
  expiry: z.string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "A data de validade deve estar no formato MM/AA")
    .refine((val) => val.trim() !== '', "A data de validade é obrigatória"),
  cvc: z.string()
    .length(3, "O CVC deve ter 3 dígitos")
    .regex(/^\d{3}$/, "O CVC deve ter 3 dígitos")
    .refine((val) => val.trim() !== '', "O CVC é obrigatório"),
  name: z.string()
    .min(1, "O nome do titular é obrigatório")
    .regex(/^[a-zA-ZÀ-ú\s]*$/, "O nome do titular deve conter apenas letras")
    .refine((val) => val.trim() !== '', "O nome do titular é obrigatório"),
});
