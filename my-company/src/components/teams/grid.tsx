import Image from "next/image";

export default function GridTeams() {
  return (
    <div className="max-w-[80vw] mx-auto">
      <h1 className="text-6xl font-semibold my-12">MEET OUR HIGH TECH LEADERS</h1>
      <div className="grid grid-cols-3 grid-rows-2 h-[80vh] max-w-[80vw] gap-12">
        <div className="relative overflow-hidden rounded-md">
          <Image src='https://press.asus.com/assets/w_600,h_732/e2a42855-272e-4c46-bb29-54317560dc64/JonneyShih.4f3a6c1-p-800.jpg' alt='' fill className="hover:scale-[1.1] transition ease-linear duration-700" />
        </div>
        <div className="relative overflow-hidden rounded-md">
          <Image src='https://press.asus.com/assets/w_600,h_732/fd9ac1ca-f6cd-44d6-a55a-0facd3ced03f/6538f11c65d88cb2518bc11b_TedHsu.ae73875-p-500.jpg' alt='' fill className="hover:scale-[1.1] transition ease-linear duration-700" />
        </div>
        <div className="relative overflow-hidden rounded-md">
          <Image src='https://press.asus.com/assets/w_600,h_732/88196188-31ca-4c67-9470-5df7ca588630/6538f11cd0812e0abd2c0fdb_JonathanTsang.92ecdee-p-500.jpg' alt='' fill className="hover:scale-[1.1] transition ease-linear duration-700" />
        </div>
        <div className="relative overflow-hidden rounded-md">
          <Image src='https://press.asus.com/assets/w_600,h_732/d1dee204-d8ad-4b5c-9d6c-1dc13b5ef488/6538f11c03c85b16bf23eab3_SY.f3f121c-p-500.jpg' alt='' fill className="hover:scale-[1.1] transition ease-linear duration-700" />
        </div>
        <div className="relative overflow-hidden rounded-md">
          <Image src='https://press.asus.com/assets/w_600,h_732/f8f0161a-4050-4367-8532-9ea554ddea0a/6538f11cac3b56ea156650f5_SamsonHu.ab1dff7-p-500.jpg' alt='' fill className="hover:scale-[1.1] transition ease-linear duration-700" />
        </div>
      </div>
    </div>
  )
}