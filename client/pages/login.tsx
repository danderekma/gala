import type { NextPage } from "next"
import Link from "next/link"

const Login: NextPage = () => {
  return (
    <div className="flex w-screen bg-[url('/images/background.svg')]">
      <div className="flex h-screen w-1/2 flex-col items-center justify-center p-5">
        <img
          className="w-3/4"
          src={"/images/welcome-header.svg"}
          alt="Welcome Header"
        />
        <div className="p-5">
          <p>
            GALA is a social GALA is a social media app that aims to bridge
            communities through music. Prior to your upcoming concert or
            festival, you can:
          </p>
          <ul className="list-disc p-6">
            <li>
              <p className="inline text-magenta">Develop</p> a personal profile
              in order to identify individuals of like-minded interests
            </li>
            <li>
              <p className="inline text-magenta">Connect</p> with potential
              friends to meet up with at the venue and perform challenges
            </li>
            <li>
              <p className="inline text-magenta">Showcase</p> your favorite
              photos and videos of past memories
            </li>
          </ul>
        </div>
        <Link href="http://localhost:5000/auth/google">
          <button className="rounded-xl bg-light-purple py-3 px-12 font-sans text-sky-blue hover:border-[1px] hover:border-light-purple hover:bg-transparent hover:text-light-purple">
            Sign-In
          </button>
        </Link>
      </div>
      <img
        className="h-auto w-1/2 object-cover"
        src={"/images/concert.jpg"}
        alt={"Concert Picture"}
      />
    </div>
  )
}

export default Login
