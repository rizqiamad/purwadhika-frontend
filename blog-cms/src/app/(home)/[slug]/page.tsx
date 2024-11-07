import { goBack } from "@/helpers/back";
import { getBlogSlug } from "@/libs/blog"
import { IBlog } from "@/types/blog";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog: IBlog = await getBlogSlug(params.slug)

  return{
    title: blog.fields.title,
    description: blog.fields.title,
    author: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`]
    }
  }
}

export default async function DetailBlog({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data: IBlog = await getBlogSlug(slug)

  const options: Options = {
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal m-4">{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc m-4">{children}</ul>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-justify">{children}</p>
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold mb-4">{text}</span>
    }
  }

  return (
    <div className="container mx-auto">
      <div className="lg:mx-36 bg-slate-200 px-12 pb-12 mt-6 rounded-xl">
        <div className="h-20 flex items-center">
          <button className="bg-slate-300 py-2 px-8 rounded-md font-bold" onClick={goBack}>&lt; Back</button>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="text-green-500 font-bold">
            {data.fields.category.toUpperCase()}
          </div>
          <h1 className="text-2xl font-semibold md:text-4xl">{data.fields.title}</h1>
          <div className="mt-2">
            <strong>{data.fields.author.fields.name}</strong>
            <span> | </span>
            <span>{data.fields.date}</span>
          </div>
        </div>
        <div className="relative h-auto rounded-xl overflow-hidden mb-4">
          <Image src={`https:${data.fields.thumbnail.fields.file.url}`} alt={data.fields.title} width={800} height={100} className="w-full" />
        </div>
        {documentToReactComponents(data.fields.content, options)}
      </div>
    </div>
  )
}