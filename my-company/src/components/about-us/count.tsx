'use client'

import CountUp from "react-countup";

export default function Count({ end, span, title }: { end: number, span: string, title: string }) {
  return (
    <CountUp
      end={end}
      duration={5}
      enableScrollSpy={true}
    >
      {({ countUpRef }) => (
        <div className="flex flex-col items-center gap-2 w-[5rem] md:w-[10rem]">
          <div className="text-xl font-semibold flex gap-2">
            <span ref={countUpRef} />
            <span>{span}</span>
          </div>
          <span className="font-semibold text-center">{title}</span>
        </div>
      )}
    </CountUp>
  )
}