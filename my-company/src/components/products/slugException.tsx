import { getDataProductsSlugException } from "@/libs/contentfulProducts"
import { IBlogProduct } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import BackButton from "../about-us/backButton"

export default async function SlugException({ slug }: { slug: string }) {
  const data: IBlogProduct[] = await getDataProductsSlugException(slug)
  return (
    <div>
      <div className="hidden lg:block">
        <BackButton />
      </div>
      <h1 className="text-4xl text-center font-semibold py-6 lg:text-[1.1rem]">RELATED PRODUCTS</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {data.map((item, idx) => {
          return (
            <Link href={`/products/${item.fields.slug}`} key={idx} className="group flex flex-col items-center bg-black text-white py-6">
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