"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./input-field";

const schema = yup.object({
  name: yup.string().required("Este campo é obrigatório."),
  surname: yup.string().required("Este campo é obrigatório."),
  email: yup
    .string()
    .required("Este campo é obrigatório.")
    .email("Por favor, insira um email válido."),
  password: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(8, "A senha precisa ter no mínimo 8 caracteres."),
  passwordConfirmation: yup
    .string()
    .required("Este campo é obrigatório.")
    .oneOf([yup.ref("password"), null!], "As senhas não conferem"),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    alert("DEU CERTO");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5"
    >
      <section className="flex flex-col gap-5 sm:flex-row">
        <InputField
          label="Nome"
          register={register("name")}
          type="text"
          placeholder="Digite seu nome"
          error={errors.name?.message}
        />
        <InputField
          label="Sobrenome"
          register={register("surname")}
          type="text"
          placeholder="Digite seu sobrenome"
          error={errors.surname?.message}
        />
      </section>

      <InputField
        label="Email"
        register={register("email")}
        type="email"
        placeholder="Digite seu email"
        error={errors.email?.message}
      />

      <InputField
        label="Senha"
        register={register("password")}
        type="password"
        placeholder="Digite sua senha"
        error={errors.password?.message}
      />

      <InputField
        label="Confirmação de senha"
        register={register("passwordConfirmation")}
        type="password"
        placeholder="Digite sua senha novamente"
        error={errors.passwordConfirmation?.message}
      />

      <button className="rounded-xl bg-cyan p-2.5 text-lg uppercase text-black duration-500 hover:bg-dark-blue hover:text-cyan">
        Enviar
      </button>
    </form>
  );
}
