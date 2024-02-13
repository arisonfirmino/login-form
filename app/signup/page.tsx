import { ChevronLeftIcon } from "lucide-react";
import SignUpForm from "./_components/signup-form";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-dark-blue text-purple">
      <section className="sm:shadow-cyan-shadow relative flex min-h-screen w-full flex-col items-center justify-center bg-dark-bg p-5 sm:min-h-min sm:w-[500px] sm:rounded-3xl">
        <h1 className="text-4xl font-medium text-cyan">Cadastrar</h1>

        <Link href="/" className="absolute left-5 top-5">
          <ChevronLeftIcon size={32} />
        </Link>

        <div className="w-full pt-10">
          <SignUpForm />
        </div>
      </section>
    </main>
  );
}
