import { getDataProductsSlug } from "@/libs/contentfulProducts"
import { IBlogProduct } from "@/types/types"
import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const data: IBlogProduct = await getDataProductsSlug(params.slug)
  console.log(data)
  return (
    <main>
      <div className="mx-48 flex flex-col items-center">
        <div className="relative h-[100vh] w-full">
          <Image
            src={`https:${data.fields.thumbnail.fields.file.url}`}
            alt={data.fields.title}
            fill
          />
        </div>
        <div>
          {documentToReactComponents(data.fields.content)}
        </div>
      </div>
    </main>
  )
}