import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa6"
import Image from "next/image"
import personPic from "../../public/sakari.png"

const Home = () => {
  return (
    <>
      <header> {/* Hero */}
        <div className="h-[100svh] bg-gradient-to-r from-gray-900 via-black to-black p-8 gap-2 grid grid-rows-[4fr_2fr_1fr] lg:grid-rows-3 items-center">
          <div className="row-start-2 z-20">
            <p className="text-2xl lg:text-4xl font-semibold bg-gradient-to-br from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Hello there!</p>
            <h1 className="font-bold text-3xl lg:text-6xl bg-gradient-to-br from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
              It&apos;s me, <span className="bg-gradient-to-b from-indigo-200 to-indigo-400 bg-clip-text text-transparent">Sakari Palojoki</span>
            </h1>
          </div>
          <div className="row-start-3 text-xl lg:text-2xl text-indigo-300 flex gap-6 lg:gap-4 z-20">
            <a href="https://github.com/SPalojoki"><FaGithub /></a>
            <a href="https://linkedin.com/in/sakaripalojoki"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="h-[100svh] absolute right-0 bottom-0 z-10 flex">
          <Image src={personPic} alt="Author image" className="object-cover h-full w-auto opacity-85 lg:opacity-95"/>
        </div>
        <a href="#introduction" className="absolute bg-indigo-200 animate-bounce p-2 inline-block rounded-full bottom-8 left-1/2 z-20">
          <FaArrowDown className="text-indigo-700"/>
        </a>
      </header>
      <main>
        <h2 id="introduction">Introduction...</h2>
      </main>
    </>
  )
}

export default Home