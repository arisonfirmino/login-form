import { CopyrightIcon } from "lucide-react";
import SignInForm from "./_components/signin-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-dark-blue text-purple">
      <section className="sm:shadow-cyan-shadow relative flex min-h-screen w-full flex-col items-center justify-center bg-dark-bg p-5 sm:min-h-min sm:w-[500px] sm:rounded-3xl">
        <h1 className="text-4xl font-medium text-cyan">Fazer Login</h1>

        <div className="w-full py-10">
          <SignInForm />
        </div>

        <div className="text-center">
          <p>Ainda não tem uma conta ?</p>
          <Link href="signup" className="text-cyan hover:underline">
            Criar Conta
          </Link>
        </div>

        <p className="absolute bottom-0 mb-2.5 mt-10 flex items-center gap-1 text-xs font-light opacity-60 sm:relative sm:mb-0">
          <CopyrightIcon size={8} />
          2024 Arison. All Rights Reserved
        </p>
      </section>
    </main>
  );
}
