import { z } from 'zod';

export const validationLoginSchema = z.object({
  email: z
    .string()
    .email('Insira um e-mail válido')
    .min(1, "Digite seu e-mail"),
  password: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .min(1, "Digite sua senha"),
});

export default validationLoginSchema;