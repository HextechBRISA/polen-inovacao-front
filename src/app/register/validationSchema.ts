import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().email('Insira um e-mail válido'),
  username: z.string().min(3, 'O nome de usuário deve ter pelo menos 3 caracteres'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  category: z.enum(['Admin', 'Mentor', 'Residente']),
  course: z.enum(['ADS', 'CC', 'ES', 'SI']),
  picture: z.string().refine((value) => {return value.endsWith('.png') || value.endsWith('.jpg');
  }, 'A foto de perfil deve ser um arquivo PNG ou JPG'),
});