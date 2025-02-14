'use client'

import { signIn } from "next-auth/react";
import LoginGBtn from "@/components/LoginGoogleBtn";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {

  const searchParams = useSearchParams()

  const erro = searchParams.get('error')

  async function loginForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formdata = new FormData(e.currentTarget)
    console.log(formdata.get('email'))

    const data = {
      email: formdata.get('email'),
      password: formdata.get('password')
    }

    signIn('credentials', {
      ...data,
      callbackUrl: '/test'
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className=" p-8 rounded-2xl shadow-lg w-96 border border-gray-700 bg-slate-50/45">
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-2xl font-bold ">Login</h2> 
          <Image  src={"/Logo Saude Total.svg"} alt="logo" width={75} height={75} />
        </div>
        <form onSubmit={loginForm}>
          <div className="mb-4">
            <label className="block " htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block " htmlFor="password">Senha</label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-200 "
          >
            Login
          </button>

        </form>
        <div className=" pt-6">
          <LoginGBtn />
          { erro === 'CredentialsSignin' && 
            <span className="text-red-600">Erro no login</span>
          }
        </div>
      </div>
    </div>
  );
}
