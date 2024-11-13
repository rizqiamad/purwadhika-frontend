import { getDataProductsSlugException } from "@/libs/contentfulProducts"
import { IBlogProduct } from "@/types/types"
import Image from "next/image"
import Link from "next/link"

export default async function SlugException({ slug }: { slug: string }) {
  const data: IBlogProduct[] = await getDataProductsSlugException(slug)
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold py-6">RELATED PRODUCTS</h1>
      <div className="grid sm:grid-cols-2 mx-12 sm:mx-28 md:mx-48">
        {data.map((item, idx) => {
          return (
            <Link href={`/products/${item.fields.slug}`} key={idx} className="group my-6 flex flex-col items-center bg-black text-white mx-12 py-6">
              <div>
                <Image src={`https:${item.fields.thumbnail.fields.file.url}`} alt={item.fields.title} width={150} height={150} />
              </div>
              <div className="font-semibold group-hover:text-red-500 group-hover:border-b-2 border-red-500 transition ease-linear">{item.fields.title}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}