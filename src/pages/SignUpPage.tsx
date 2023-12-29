import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa6";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-container-color text-text-color">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-bg-color p-5 sm:h-auto sm:w-[500px] sm:rounded-3xl sm:shadow-box-shadow">
        <h1 className="mb-10 text-4xl font-medium text-title-color">
          Cadastrar
        </h1>

        <Link
          to="/"
          className="absolute left-0 top-0 m-5 duration-500 sm:hover:opacity-50"
        >
          <FaAngleLeft size={25} />
        </Link>

        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUpPage;
