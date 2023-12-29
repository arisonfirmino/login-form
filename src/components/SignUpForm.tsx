import { FaAsterisk } from "react-icons/fa6";

const SignUpForm = () => {
  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col">
          <label className="mb-1 ml-2.5 flex text-lg font-medium">
            Nome
            <FaAsterisk size={10} className="m-1 text-[#de362a]" />
          </label>
          <input
            type="text"
            placeholder="Seu nome aqui"
            className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 ml-2.5 flex text-lg font-medium">
            Sobrenome
            <FaAsterisk size={10} className="m-1 text-[#de362a]" />
          </label>
          <input
            type="text"
            placeholder="Seu sobrenome aqui"
            className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
          />
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
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 flex text-lg font-medium">
          Senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 flex text-lg font-medium">
          Confirmação de senha
          <FaAsterisk size={10} className="m-1 text-[#de362a]" />
        </label>
        <input
          type="password"
          placeholder="Digite sua senha novamente"
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />
      </div>

      <button className="bg-title-color sm:hover:bg-container-color sm:hover:text-title-color rounded-lg p-2.5 text-xl text-black duration-500">
        Enviar
      </button>
    </form>
  );
};

export default SignUpForm;
