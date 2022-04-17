import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[url('/images/background.svg')]">
      <div className="flex flex-col items-center">
        <img className="w-64" src={"/images/text-logo.svg"} alt="Text Logo" />
        <p className="m-5 font-sans text-lg text-gray">
          Bridging communities through music.
        </p>
        <button className="hover: m-5 rounded-xl bg-light-purple py-4 px-8 font-sans text-sky-blue hover:border-[1px] hover:border-light-purple hover:bg-transparent hover:text-light-purple">
          Start Your Journey!
        </button>
      </div>
    </div>
  )
}

export default Home
