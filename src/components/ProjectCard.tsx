import { FaArrowRight } from "react-icons/fa6"

const ProjectCard = () => {
  return (
    <a
      className='group grid min-w-80 snap-center grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] items-center gap-4 rounded-md border border-transparent bg-zinc-50 p-4 shadow-md transition-all hover:border-blue-300 md:min-w-0'
      href='#'
    >
      <div className='flex h-12 w-12 rounded-full bg-gray-300' />
      <h3 className='font-bold'>Project title</h3>
      <div className='rounded-lg bg-blue-300 p-2'>
        <div className='text-blue-900 transition-all group-hover:-rotate-45'>
          <FaArrowRight />
        </div>
      </div>
      <p className='col-span-3 text-sm text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos
        dicta illo distinctio enim rem at ipsa, nam, libero excepturi cum?
      </p>
    </a>
  )
}

export default ProjectCard
