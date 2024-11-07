import { IRandomUser } from "@/types/types"
import TeamsCarousel from "./carousel"
import { getDataRandomUser } from "@/libs/randomUser"
import Image from "next/image"

export default async function Teams() {
  const dataRandomUser: IRandomUser[] | undefined = await getDataRandomUser()
  return (
    <div className="max-w-[80vw] mx-auto">
      <div className="flex justify-between items-center py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-semibold">Meat the team</h1>
          <span className="text-xl">BEHIND THE SCENE</span>
        </div>
        <div>
          <Image src={'/navbar/rog-logo.svg'} alt="" width={160} height={160} />
        </div>
      </div>
      <TeamsCarousel dataRandomUser={dataRandomUser} />
    </div>
  )
}