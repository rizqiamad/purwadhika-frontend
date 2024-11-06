import { ReactNode } from "react";

export default function LeadersInfo({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 py-3">
      <p className="leading-8">
        {children}
      </p>
    </div>
  )
}