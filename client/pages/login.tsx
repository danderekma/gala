import type { NextPage } from "next"

const Login: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="flex h-screen flex-col items-center justify-center">
        <h2 className="py-8 text-5xl text-purple-500">Login</h2>
        <button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
          google auth
        </button>
      </h1>
    </div>
  )
}

export default Login
