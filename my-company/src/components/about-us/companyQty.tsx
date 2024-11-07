'use client'

import { useEffect, useState } from "react"

export default function CompanyQty() {
  const [employee, setEmployee] = useState(0);
  const [awards, setAwards] = useState(0);
  const [experience, setExperience] = useState(0);
  const [market, setMarket] = useState(0);

  useEffect(()=>{
    if (employee === 17000) return

    setTimeout(()=>{
      setEmployee(employee + 1)
    },0.1)
    
  },[employee])

  useEffect(()=>{
    if (awards === 6726) return

    setTimeout(()=>{
      setAwards(awards + 1)
    },0.9)
    
  },[awards])

  useEffect(()=>{
    if (experience === 18) return

    setTimeout(()=>{
      setExperience(experience + 1)
    },50)
    
  },[experience])
  
  useEffect(()=>{
    if (market === 58) return

    setTimeout(()=>{
      setMarket(market + 1)
    },10)
    
  },[market])

  return (
    <div className="flex p-6 justify-between">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold">{employee}</span>
        <span className="font-semibold">Jumlah Pegawai</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold">{awards}</span>
        <span className="font-semibold">Jumlah Penghargaan</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold">{experience} tahun</span>
        <span className="font-semibold">Pengalaman di Dunia Gaming</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold">{market}%</span>
        <span className="font-semibold">Market Share</span>
      </div>
    </div>
  )
}