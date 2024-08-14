import { FaMapPin, FaGraduationCap, FaAward, FaRocket } from "react-icons/fa6"

const colorStylesMap = {
  blue: "bg-blue-300 text-blue-950",
  orange: "bg-orange-300 text-orange-950",
  red: "bg-red-300 text-red-950",
  emerald: "bg-emerald-300 text-emerald-950",
}

const iconMap = {
  pin: FaMapPin,
  school: FaGraduationCap,
  award: FaAward,
  rocket: FaRocket,
}

const FeatureChip = ({
  content,
  description,
  color,
  icon,
}: {
  content: string
  description: string
  color: "blue" | "orange" | "red" | "emerald"
  icon: "pin" | "school" | "award" | "rocket"
}) => {
  const colorStyles = colorStylesMap[color]
  const Icon = iconMap[icon]

  return (
    <div className='flex min-w-48 flex-grow gap-4 rounded-md bg-zinc-50 p-4 shadow-md'>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${colorStyles}`}
      >
        <Icon />
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='text-sm font-thin'>{description}</h3>
        <p className='font-bold'>{content}</p>
      </div>
    </div>
  )
}

export default FeatureChip
