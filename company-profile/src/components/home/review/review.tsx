import { dataReview } from "./data";

export default function Review() {
  return (
    <div className="bg-[#151515] text-white py-16">
      <h1 className="text-red-500 text-6xl text-center font-semibold">NO.1 GAMING BRAND, DI DUNIA</h1>
      <p className="text-white text-center text-4xl font-semibold mt-4">Apa kata media mengenai ROG</p>
      <div className="flex flex-col items-center">
        {
          dataReview.map((review, idx) => {
            return (
              <div key={idx} className="bg-black mt-12 w-[40rem] px-6 py-4">
                <div className="text-[#c15f2e] text-2xl">{review.reviewer}</div>
                <div className="text-xl">{review.review}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}