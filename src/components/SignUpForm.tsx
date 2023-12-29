import { FaAsterisk } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Este campo é obrigatório."),
  surname: yup.string().required("Este campo é obrigatório."),
  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("Insira um email válido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "A senha precisa ter pelo menos 8 caracteres."),
  passwordConfirmation: yup
    .string()
    .required("A confirmação de senha é obrigatória.")
    .oneOf([yup.ref("password"), null!], "As senha não conferem."),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);

    alert("Tudo certo!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col">
          <label className="mb-1 ml-2.5 flex text-lg font-medium">
            Nome
            <FaAsterisk size={10} className="m-1 text-[#de362a]" />
          </label>
          <input
            type="text"
            placeholder="Seu nome aqui"
            {...register("name")}
            className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
          />

          <p className="ml-3 mt-2 text-sm text-[#de362a]">
            {errors.name?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 ml-2.5 flex text-lg font-medium">
            Sobrenome
            <FaAsterisk size={10} className="m-1 text-[#de362a]" />
          </label>
          <input
            type="text"
            placeholder="Seu sobrenome aqui"
            {...register("surname")}
            className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
          />

          <p className="ml-3 mt-2 text-sm text-[#de362a]">
            {errors.surname?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 flex text-lg font-medium">
          Email
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />

        <p className="ml-3 mt-2 text-sm text-[#de362a]">
          {errors.email?.message}
        </p>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 flex text-lg font-medium">
          Senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />

        <p className="ml-3 mt-2 text-sm text-[#de362a]">
          {errors.password?.message}
        </p>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 flex text-lg font-medium">
          Confirmação de senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha novamente"
          {...register("passwordConfirmation")}
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />

        <p className="ml-3 mt-2 text-sm text-[#de362a]">
          {errors.passwordConfirmation?.message}
        </p>
      </div>

      <button className="bg-title-color sm:hover:bg-container-color sm:hover:text-title-color rounded-lg p-2.5 text-xl text-black duration-500">
        Enviar
      </button>
    </form>
  );
};

export default SignUpForm;
