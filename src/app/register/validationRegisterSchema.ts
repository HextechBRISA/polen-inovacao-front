import { z } from 'zod';

export const validationRegisterSchema = z.object({
  email: z
    .string()
    .email('Insira um e-mail válido')
    .refine((value) => value.trim() !== '', "O e-mail é obrigatório"),
  name: z
    .string()
    .min(3, 'Você precisa inserir seu nome e sobrenome')
    .refine((value) => value.trim() !== '', "O nome é obrigatório"),
  password: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .refine((value) => value.trim() !== '', "A senha é obrigatória"),
  confirmPassword: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .refine((value) => value.trim() !== '', "Você precisa confirmar a senha"),
  category: z
    .enum(['Mentor', 'Residente'], 
    { errorMap: () => ({ message: 'É obrigatório selecionar uma categoria' }) }),
  area: z
    .enum(['Modelo de negócios', 'Redes sociais', 'Contabilidade', 'Identidade visual', 'Assessoria de imprensa'], 
    { errorMap: () => ({ message: 'É obrigatório selecionar uma área' }) }),
  picture: z
    .string()
    .refine((value) => value.endsWith('.png') || value.endsWith('.jpg'), 'A foto de perfil deve ser um arquivo PNG ou JPG')
    .refine((value) => value.trim() !== '', 'Você precisa inserir uma foto de perfil'),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });
