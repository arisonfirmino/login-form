import { Link } from "react-router-dom";

import { FaRegCopyright } from "react-icons/fa6";

import SignInForm from "../components/SignInForm";

const SignInPage = () => {
  return (
    <main className="bg-container-color text-text-color flex h-screen w-full items-center justify-center">
      <div className="bg-bg-color sm:shadow-box-shadow relative flex h-screen w-full flex-col items-center justify-center p-5 sm:h-auto sm:w-[500px] sm:rounded-3xl">
        <h1 className="text-title-color mb-10 text-4xl font-medium">
          Fazer Login
        </h1>

        <SignInForm />

        <span className="my-10 text-center">
          <p>Ainda não tem uma conta ?</p>

          <Link
            to="CreateLogin"
            className="text-title-color cursor-pointer sm:hover:underline"
          >
            Criar conta
          </Link>
        </span>

        <p className="absolute bottom-0 mb-2.5 flex items-center gap-1 text-xs font-light opacity-75">
          <FaRegCopyright size={10} />
          2024 Arison. All Rights Reserved
        </p>
      </div>
    </main>
  );
};

export default SignInPage;
