
interface LabelProps {
  title: string
  value?: string
  className?: string
}

export function Label({ title, value = '0', className }: LabelProps) {
  return (
    <span className={`w-full flex flex-row items-center justify-between text-zinc-300 ${ className }`}>
      {title}: <span>{value}</span>
    </span>
  )
}