interface Initial{
  initial: string | undefined
}

export default function Avatar({ initial }:Initial) {
  
  return (
    <div className="avatar placeholder cursor-pointer">
      <div className="bg-neutral text-neutral-content w-12 rounded-full">
        <span>{initial}</span>
      </div>
    </div>
  )
}