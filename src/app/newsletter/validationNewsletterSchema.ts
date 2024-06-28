import { z } from 'zod';

export const validationNewsletterSchema = z.object({
  email: z
  .string()
  .email('Insira um e-mail válido')
  .refine((value) => value.trim() !== '', "Você precisa inserir seu e-mail!"),
  radioOption: z.union([z.literal(''),z.literal("option1"),z.literal("option2"),z.literal("option3"),z.literal("option4")])
  .refine((val) => val.trim() !=='' , "Selecione uma opção!")
});
export default validationNewsletterSchema;
type FormData = z.infer<typeof validationNewsletterSchema>;