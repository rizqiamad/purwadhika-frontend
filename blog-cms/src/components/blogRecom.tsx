import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogRecom({ blog }: { blog: IBlog[] }) {
  return (
    <div>
      {blog.map((item, idx) => {
        return (
          <div className="flex flex-col min-h-48 max-w-[60rem] mb-12 items-center md:flex-row" key={idx}>
            <div className="relative h-48 w-[18rem] md:w-[40%]">
              <Image src={`https:${item.fields.thumbnail.fields.file.url}`} alt={item.fields.slug} fill />
            </div>
            <div className="h-auto px-4 py-2 w-[18rem] md:w-[60%]">
              <div className="mb-2 font-semibold text-green-500">{item.fields.category.toUpperCase()}</div>
              <div className="mb-2 text-xl font-semibold">{item.fields.title}</div>
              <div className="flex gap-2 mb-4">
                <h1>{item.fields.author.fields.name}</h1>
                <div>|</div>
                <div>{item.fields.date}</div>
              </div>
              <Link href={`/${item.fields.slug}`} className="hover:text-white px-4 py-2 bg-green-500 rounded-md font-semibold">READ MORE</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}