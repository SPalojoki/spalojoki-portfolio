import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa6"
import Image from "next/image"
import personPic from "../../public/sakari.png"
import FeatureChip from "@/components/FeatureChip"
import ProjectCard from "@/components/ProjectCard"
import TechnologyChip from "@/components/TechnologyChip"

const Hero = () => {
  return (
    <header className='border-b-8 border-blue-900 dark:border-indigo-300'>
      {" "}
      <div className='grid h-[100svh] grid-rows-[4fr_2fr_1fr] items-center gap-2 bg-gradient-to-r from-blue-950 via-black to-black p-8 lg:grid-rows-3 dark:from-gray-900 dark:via-black dark:to-black'>
        <div className='z-20 row-start-2'>
          <p className='bg-gradient-to-br from-blue-100 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl dark:from-indigo-400 dark:to-indigo-600'>
            Hello there!
          </p>
          <h1 className='bg-gradient-to-br from-blue-100 to-blue-200 bg-clip-text text-3xl font-bold text-transparent lg:text-6xl dark:from-indigo-400 dark:to-indigo-500'>
            It&apos;s me,{" "}
            <span className='bg-gradient-to-b from-zinc-50 to-blue-400 bg-clip-text text-transparent dark:from-indigo-200 dark:to-indigo-400'>
              Sakari Palojoki
            </span>
          </h1>
        </div>
        <div className='z-20 row-start-3 flex gap-6 text-xl text-blue-100 lg:gap-4 lg:text-2xl dark:text-indigo-300'>
          <a href='https://github.com/SPalojoki'>
            <FaGithub />
          </a>
          <a href='https://linkedin.com/in/sakaripalojoki'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 z-10 flex h-[100svh]'>
        <Image
          src={personPic}
          alt='Author image'
          className='h-full w-auto object-cover opacity-85 lg:opacity-95'
        />
      </div>
      <a
        href='#start'
        className='absolute bottom-8 left-1/2 z-20 inline-block animate-bounce rounded-full bg-zinc-200 p-2 dark:bg-indigo-200'
      >
        <FaArrowDown className='text-blue-800 dark:text-indigo-700' />
      </a>
    </header>
  )
}

const Introduction = () => {
  return (
    <section className='grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto_3fr] lg:items-center lg:gap-x-12 lg:gap-y-2 xl:grid-rows-[1fr_auto_2fr]'>
      <p className='text-2xl font-semibold text-blue-900 lg:col-span-2 lg:self-end lg:text-3xl'>
        Introduction
      </p>
      <h2 className='bg-gradient-to-br from-blue-800 to-blue-950 bg-clip-text text-5xl font-bold text-transparent lg:row-start-2 lg:self-start lg:pt-4 lg:text-6xl xl:text-7xl'>
        I&apos;m a technology enthusiast doing business.
      </h2>
      <div className='flex flex-col items-end gap-8 self-start text-blue-900'>
        <p className='self-start pt-8 lg:row-start-2 lg:pt-4 lg:text-lg lg:font-light'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          accusamus distinctio eos sed ipsam cupiditate ex porro tenetur,
          necessitatibus nisi numquam hic reprehenderit, nam harum aspernatur
          officiis quos quae ullam!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Adipisci, accusamus distinctio eos sed ipsam
          cupiditate ex porro tenetur, necessitatibus nisi numquam!
        </p>
        <p className='pr-12 font-signature text-4xl italic'>
          — Sakari Palojoki
        </p>
      </div>
      <div className='col-span-2 mb-16 mt-24 flex flex-wrap justify-between gap-4'>
        <FeatureChip
          content='Strategy & Venturing'
          description="Master's Degree in"
          color='orange'
          icon='school'
        />
        <FeatureChip
          content='Software Developer & Data Engineer'
          description='Professional tech experience as'
          color='emerald'
          icon='award'
        />
        <FeatureChip
          content='Startups & Enterprise'
          description='Work experience in both'
          color='red'
          icon='rocket'
        />
        <FeatureChip
          content='Helsinki 🇫🇮'
          description='Based in'
          color='blue'
          icon='pin'
        />
      </div>
    </section>
  )
}

const Technologies = () => {
  return (
    <section className='mb-24'>
      <p className='text-md font-semibold text-blue-800 lg:col-span-2 lg:self-end lg:text-lg'>
        Technologies
      </p>
      <h2 className='mb-4 bg-gradient-to-br from-blue-800 to-blue-900 bg-clip-text pb-1 text-2xl font-bold text-transparent lg:text-3xl'>
        Tools under my belt
      </h2>
      <div className='col-span-4 flex w-full flex-wrap justify-center gap-2'>
        <TechnologyChip name='React' type='software' />
        <TechnologyChip name='Next.JS' type='software' />
        <TechnologyChip name='Express' type='software' />
        <TechnologyChip name='Docker' type='infrastructure' />
        <TechnologyChip name='Directus' type='software' />
        <TechnologyChip name='dbt' type='data' />
        <TechnologyChip name='Airflow' type='data' />
        <TechnologyChip name='Databricks' type='data' />
        <TechnologyChip name='BigQuery' type='data' />
        <TechnologyChip name='Google Cloud' type='infrastructure' />
        <TechnologyChip name='AWS' type='infrastructure' />
        <TechnologyChip name='Google Cloud Functions' type='infrastructure' />
      </div>
    </section>
  )
}

const Projects = () => {
  return (
    <section className=''>
      <div className='flex items-end justify-between'>
        <div>
          <p className='text-xl font-semibold text-blue-900 lg:col-span-2 lg:self-end lg:text-2xl'>
            Portfolio highlights
          </p>
          <h2 className='bg-gradient-to-br from-blue-800 to-blue-950 bg-clip-text pb-1 text-4xl font-bold text-transparent lg:text-5xl'>
            Projects in my freetime
          </h2>
        </div>
        <a
          href='/projects'
          className='group mr-1 hidden pb-1 font-normal text-blue-900 md:inline-block'
        >
          See all projects
        </a>
      </div>
      <div className='flex snap-x snap-mandatory scroll-m-4 gap-4 overflow-x-auto p-1 pb-2 pt-8 md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <a
        href='/projects'
        className='mt-4 block w-full text-center font-normal text-blue-900 md:hidden'
      >
        See all projects
      </a>
    </section>
  )
}

const Outro = () => {
  return (
    <section className='flex h-80 flex-col items-center justify-center gap-8'>
      <p className='text-2xl font-extralight text-blue-900'>
        Get in touch or check out more!
      </p>
      <div className='flex gap-8 text-4xl text-blue-900 hover:text-blue-950'>
        <a href='https://linkedin.com/in/sakaripalojoki'>
          <FaLinkedinIn />
        </a>
        <a href='https://github.com/SPalojoki'>
          <FaGithub />
        </a>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <main
        id='start'
        className='bg-gradient-to-r from-sky-50 to-blue-100 px-4 pt-8'
      >
        <div className='container mx-auto'>
          <Introduction />
          <Technologies />
          <Projects />
          <Outro />
        </div>
      </main>
    </>
  )
}

export default Home
