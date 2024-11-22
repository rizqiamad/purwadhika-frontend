import { getBlogs } from "@/libs/blog"
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Card() {
  const data: IBlog[] = await getBlogs();

  function titleAdjust(title: string) {
    const max: number = 60
    if (title.length <= max) return title

    let newTitle: string = ''
    for (let i = 0; i < max; i++) newTitle += title[i]
    return newTitle + '...'
  }

  return (
    <div className="px-6 flex flex-wrap gap-4 justify-center md:justify-center">
      {data.map((item, idx) => {
        return (
          <Link key={idx} href={`/${item.fields.slug}`} className="flex flex-col overflow-hidden group shadow-2xl rounded-md h-96 w-72" data-cy='blog-item'>
            <div className="h-[50%] rounded-lg relative overflow-hidden">
              <Image src={`https:${item.fields.thumbnail.fields.file.url}`} alt={item.fields.title} fill className="group-hover:scale-[1.2] transition ease-linear" />
            </div>
            <div className="h-[50%] p-2 flex flex-col gap-4">
              <h1 className="font-semibold">{titleAdjust(item.fields.title)}</h1>
              <div className="flex flex-col">
                <span className="text-xs">{item.fields.author.fields.name} | {item.fields.date}</span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}