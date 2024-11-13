import { getDataProductsSlug } from "@/libs/contentfulProducts"
import { IBlogProduct } from "@/types/types"
import Image from "next/image"
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import ReviewProducts from "@/components/products/review";
import SlugException from "@/components/products/slugException";
import BackButton from "@/components/about-us/backButton";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog: IBlogProduct = await getDataProductsSlug(params.slug)

  return {
    title: blog.fields.title,
    description: "ROG Gaming",
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`]
    }
  }
}

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
    <main className="flex flex-col lg:flex-row-reverse mx-6 lg:mx-0">
      <div className="mx-6 sm:mx-28 md:mx-48 lg:mx-28 flex flex-col items-center">
        <div className="self-start mt-6 lg:hidden">
          <BackButton />
        </div>
        <div>
          <Image
            src={`https:${data.fields.thumbnail.fields.file.url}`}
            alt={data.fields.title}
            width={1500}
            height={500}
          />
        </div>
        <div className="mt-12">
          {documentToReactComponents(data.fields.content, options)}
        </div>
        <ReviewProducts title={data.fields.title} />
      </div>
      <div className="mx-6 my-6 sm:mx-28 md:mx-48 lg:mx-12 lg:w-[100%]">
        <SlugException slug={params.slug} />
      </div>
    </main>
  )
}