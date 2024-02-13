export default function SignUpForm() {
  return (
    <form className="flex w-full flex-col gap-5">
      <section className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col gap-1">
          <label className="ml-2.5 text-lg font-medium">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="shadow-cyan-shadow rounded-xl p-2.5 text-black outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="ml-2.5 text-lg font-medium">Sobrenome</label>
          <input
            type="text"
            placeholder="Digite seu sobrenome"
            className="shadow-cyan-shadow rounded-xl p-2.5 text-black outline-none"
          />
        </div>
      </section>

      <div className="flex flex-col gap-1">
        <label className="ml-2.5 text-lg font-medium">Email</label>
        <input
          type="email"
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

      <div className="flex flex-col gap-1">
        <label className="ml-2.5 text-lg font-medium">
          Confirmação de senha
        </label>
        <input
          type="password"
          placeholder="Digite sua senha novamente"
          className="shadow-cyan-shadow rounded-xl p-2.5 text-black outline-none"
        />
      </div>

      <button className="rounded-xl bg-cyan p-2.5 text-lg uppercase text-black duration-500 hover:bg-dark-blue hover:text-cyan">
        Enviar
      </button>
    </form>
  );
}
