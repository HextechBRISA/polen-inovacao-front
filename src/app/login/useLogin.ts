import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validationLoginSchema from "./validationLoginSchema";
import { axiosInstance } from "../api/utils/env";
import { toast } from "react-toastify";

interface LoginData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const useLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>();
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const router = useRouter();

  const onSubmit = async (data: LoginData) => {
    try {
      const validatedData = validationLoginSchema.parse(data);
      setFormErrors({});

      const result = await axiosInstance.post("/api/login", validatedData);
      const categoryUser = result.data.user.category;

      localStorage.setItem("token", JSON.stringify(result.data.token));
      localStorage.setItem("category", categoryUser);

      window.dispatchEvent(new Event("storage"));

      handleLoginSuccess(categoryUser);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setFormErrors(fieldErrors);
        console.error("Erros de validação:", fieldErrors);
      } else {
        console.error("Erro ao enviar o formulário:", error.message);
        toast.error(error.message);
      }
    }
  };

  const handleLoginSuccess = (categoryUser: string) => {
    toast.success("Login feito com sucesso!", {
      onClose: () => {
        router.push(categoryUser === "Mentor" ? "/mentor" : "/resident");
      },
      autoClose: 1000,
    });
  };

  return {
    handleSubmit,
    register,
    errors,
    formErrors,
    onSubmit,
  };
};

export default useLogin;
