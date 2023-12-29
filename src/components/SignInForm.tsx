const SignInForm = () => {
  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 text-lg font-medium">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 ml-2.5 text-lg font-medium">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="shadow-box-shadow rounded-lg p-2.5 text-black outline-none"
        />
      </div>

      <button className="bg-title-color sm:hover:bg-container-color sm:hover:text-title-color rounded-lg p-2.5 text-xl text-black duration-500">
        Entrar
      </button>
    </form>
  );
};

export default SignInForm;
