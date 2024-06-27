import { z } from 'zod';

export const  formSchema = z.object({
  email: z.string().email("e-mail invalido!"),
 
  radioOption: z.union([z.literal(''),z.literal("option1"),z.literal("option2"),z.literal("option3"),z.literal("option4")]).refine((val) => val.trim() !=='' , "  A Escolha de uma opção é obrigatória !")
});
export default formSchema;
type FormData = z.infer<typeof formSchema>;