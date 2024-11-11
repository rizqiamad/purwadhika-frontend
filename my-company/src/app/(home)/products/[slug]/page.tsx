import { getDataProductsSlug } from "@/libs/contentfulProducts"
import { IBlogProduct } from "@/types/types"
import Image from "next/image"
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import ReviewProducts from "@/components/products/review";

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const data: IBlogProduct = await getDataProductsSlug(params.slug)

  const options: Options = {
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal m-4">{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc m-4">{children}</ul>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-justify">{children}</p>
    }
  }
  return (
    <main>
      <div className="mx-48 flex flex-col items-center">
        <div className="relative h-[500px] w-[800px]">
          <Image
            src={`https:${data.fields.thumbnail.fields.file.url}`}
            alt={data.fields.title}
            fill
          />
        </div>
        <div className="mt-12">
          {documentToReactComponents(data.fields.content, options)}
        </div>
        <ReviewProducts title={data.fields.title}/>
      </div>
    </main>
  )
}