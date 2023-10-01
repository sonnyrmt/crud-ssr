import Image from "next/image";
import { LoginFormulary } from "./form";

const Login = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="bg-zinc-900/50 relative backdrop-blur-sm border-[1px] px-16 border-zinc-800 h-[350px] w-[350px] rounded-lg flex flex-col justify-center  p-2">
        <div className="absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <div className="flex gap-2 mb-3">
          <Image alt="logo" className="opacity-80" src="/logo.svg" width={29} height={28} />
          <span className="text-3xl">Login</span>
        </div>
        <LoginFormulary />
      </div>
    </section>
  );
};

export default Login;
