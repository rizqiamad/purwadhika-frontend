import { getDataProducts } from "@/libs/contentfulProducts"
import Link from "next/link"
import Image from "next/image"
import { IBlogProduct } from "@/types/types"

export default async function ProductsCard() {
  const data: IBlogProduct[] = await getDataProducts()
  return (
    <div className="grid grid-cols-4 gap-6 m-6">
      {
        data.map((item, idx) => {
          return (
            <Link href={`/products/${item.fields.slug}`} key={idx} className="group flex gap-4 flex-col justify-between items-center bg-slate-300 py-4">
              <div>
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  height={300}
                  width={200}
                />
              </div>
              <div className="text-xl font-semibold group-hover:border-b-2 text-center group-hover:border-red-500 transition ease-linear duration-300">{item.fields.title}</div>
            </Link>
          )
        })
      }
    </div>
  )
}