interface ContainerProps {
  title?: string
  className?: string
  children?: JSX.Element | JSX.Element[]
  onClick?: () => void
}

export function Container({ title, className, children, onClick }: ContainerProps) {
  return (
    <div className={`flex flex-col justify-center ${className}`} onClick={onClick}>
      { title && <span className='font-bold text-3xl pb-3'>{ title }</span> }
      <div className='w-60 flex-1 flex flex-col items-start justify-between gap-1'>
        { children }
      </div>
    </div>
  )
}