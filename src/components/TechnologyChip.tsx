const typeStyles = {
  software: "border-red-300 text-red-800",
  data: "border-orange-300 text-orange-800",
  infrastructure: "border-green-300 text-green-800",
}

const TechnologyChip = ({
  name,
  type,
  condensed,
}: {
  name: string
  type: "software" | "data" | "infrastructure"
  condensed?: boolean
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-full border bg-zinc-50 p-1 pr-4 shadow-sm transition-all ${typeStyles[type]} ${condensed ? "text-sm" : "text-md font-semibold"}`}
    >
      <div
        className={`${condensed ? "h-6 w-6" : "h-8 w-8"} rounded-full bg-gray-300`}
      />
      <p>{name}</p>
    </div>
  )
}

export default TechnologyChip
