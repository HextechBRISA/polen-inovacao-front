'use client';
import React from 'react';
import BackgroundForms from '../components/BackgroundForms';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { schema } from './validationLoginSchema'; // Import the schema
import { z } from 'zod';

export default function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Validate data with the schema
      const validatedData = schema.parse(data);

      // If validation is successful, proceed with submission logic
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      // Handle API response here
      console.log('Login successful!', response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Access specific validation errors
        console.error('Validation errors:', error.errors);
      } else {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <BackgroundForms>
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full">
        <label htmlFor="username" className="w-full items-start font-medium mb-2">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          placeholder="Insira seu nome de usuário"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
          {...register('username', { required: 'Este campo é obrigatório' })}
        />
        {errors.username && (
                              <p className="text-red-500">
                              {typeof errors.username === 'string'
                             ? errors.username 
                             : 'Erro ao validar o nome de usuário'} 
                                </p>
)}

        <label htmlFor="password" className="w-full items-start font-medium mb-2">
          Senha
        </label>
        <input
          type="password"
          id="password"
          placeholder="Insira sua senha"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
          {...register('password', { required: 'Este campo é obrigatório' })}
        />
        {errors.password && (
                <p className="text-red-500">
                  {typeof errors.password === 'string'
                    ? errors.password 
                    : 'Senha inválida'}
                </p>
)}

        <button
          type="submit"
          className="w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[20px] my-2"
        >
          Login
        </button>

        <p className="text-center text-gray-500 mt-4">
          <Link href="/register">
            Cadastre-se aqui
          </Link>
        </p>
      </form>
    </BackgroundForms>
  );
}
