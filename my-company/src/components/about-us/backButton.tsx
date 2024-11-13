'use client'

export default function BackButton() {

  const onBack = () => {
    history.back()
  }

  return (
    <button onClick={onBack} className="font-semibold border-b border-dashed border-slate-400">
      BACK
    </button>
  )
}