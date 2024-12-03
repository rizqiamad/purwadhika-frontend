import { getDate } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogRecom({ blog }: { blog: IBlog[] }) {
  // console.log(blog)
  return (
    <div>
      {blog.map((item) => {
        return (
          <div className="flex flex-col mb-12 items-center md:flex-row" key={item.id}>
            <div className="relative h-48 w-full max-w-[18rem] md:w-[40%]">
              <Image src={`${item.thubmnail}`} alt={item.slug} fill />
            </div>
            <div className="h-auto md:px-4 py-2 w-full max-w-[18rem] md:max-w-none md:w-[60%]">
              <div className="mb-2 font-semibold text-green-500">{item.category.toUpperCase()}</div>
              <div className="mb-2 text-xl font-semibold">{item.title}</div>
              <div className="flex gap-2 mb-4">
                <h1>{item.user.username}</h1>
                <div>|</div>
                <div>{getDate(item.createdAt)}</div>
              </div>
              <Link href={`/blogs/${item.slug}`} className="hover:text-white px-4 py-2 bg-green-500 rounded-md font-semibold">READ MORE</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}