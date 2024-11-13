import Link from "next/link";
import { dataDetailedPage } from "./data";

export default function ReviewProducts({ title }: { title: string }) {
  const item = dataDetailedPage.find(item => item.title === title);
  return (
    <div className="flex flex-col my-6 gap-4">
      <div className="bg-[#f1f1f1] w-full py-6 px-4">
        <div className="flex items-center gap-4 mb-2">
          <div className="avatar placeholder">
            <div className="text-neutral-content w-12 rounded-full bg-black">
              <span className="text-3xl text-red-500 font-bold">{item?.name.charAt(0)}</span>
            </div>
          </div>
          <div className="font-semibold">{item?.name}</div>
        </div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>"{item?.review}"</div>
      </div>
      {item?.link ? (
        <Link className="self-start text-white btn btn-primary" href={item.link}>Check More</Link>
      ) : (
        <div>
          LINK IS NOT AVAILABLE
        </div>
      )}
    </div>
  )
}