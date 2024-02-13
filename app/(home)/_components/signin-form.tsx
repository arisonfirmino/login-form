export default function SignInForm() {
  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label className="ml-2.5 text-lg font-medium">Email</label>
        <input
          type="text"
          placeholder="Digite seu email"
          className="shadow-cyan-shadow rounded-xl p-2.5 text-black outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="ml-2.5 text-lg font-medium">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="shadow-cyan-shadow rounded-xl p-2.5 text-black outline-none"
        />
      </div>

      <button className="rounded-xl bg-cyan p-2.5 text-lg uppercase text-black duration-500 hover:bg-dark-blue hover:text-cyan">
        Entrar
      </button>
    </form>
  );
}
