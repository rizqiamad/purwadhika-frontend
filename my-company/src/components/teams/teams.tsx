import { IRandomUser } from "@/types/types"
import TeamsCarousel from "./carousel"
import { getDataRandomUser } from "@/libs/randomUser"
import Image from "next/image"
// import { useEffect, useState } from "react"
// import { useMediaQuery } from "react-responsive"

export default async function Teams() {
  const dataRandomUser: IRandomUser[] | undefined = await getDataRandomUser()
  // const [isTabletMatch, setIsTabletMatch] = useState<boolean>(false);
  // const [isMidMatch, setIsMidMatch] = useState<boolean>(false);
  // const [isSmallMatch, setIsSmallMatch] = useState<boolean>(false);
  // const [isSmallestMatch, setIsSmallestMatch] = useState<boolean>(false);

  // const isTablet = useMediaQuery({ query: '(min-width: 960px)' });
  // const isMid = useMediaQuery({ query: '(min-width: 768px)' });
  // const isSmall = useMediaQuery({ query: '(min-width: 640px)' });
  // const isSmallest = useMediaQuery({ query: '(min-width: 420px)' });

  // useEffect(() => {
  //   setIsTabletMatch(isTablet);
  // }, [isTablet]);

  // useEffect(() => {
  //   setIsMidMatch(isMid);
  // }, [isMid]);

  // useEffect(() => {
  //   setIsSmallMatch(isSmall);
  // }, [isSmall]);

  // useEffect(() => {
  //   setIsSmallestMatch(isSmallest);
  // }, [isSmallest]);
  return (
    <div className="max-w-[80vw] mx-auto">
      <div className="flex justify-between items-center py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold">Meat the team</h1>
          <span className="text-xs md:text-xl">BEHIND THE SCENE</span>
        </div>
        <div>
          <Image src={'/navbar/rog-logo.svg'} alt="" width={160} height={160} />
        </div>
      </div>
      <TeamsCarousel dataRandomUser={dataRandomUser} />
    </div>
  )
}