import BlogRecom from "@/components/blogRecom";
import Share from "@/components/share";
import { goBack } from "@/helpers/back";
import { getBlogRecom, getBlogSlug, getDate } from "@/libs/blog"
import { IBlog } from "@/types/blog";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog: IBlog = await getBlogSlug(params.slug)

  return {
    title: blog.title,
    description: blog.title,
    author: blog.user.username,
    openGraph: {
      images: [`${blog.thubmnail}`]
    }
  }
}

export default async function DetailBlog({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data: IBlog = await getBlogSlug(slug)
  const blogRecom: IBlog[] = await getBlogRecom(params.slug)
  const date = getDate(data.createdAt)

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
    <div className="container mx-auto md:max-w-[700px]">
      <div className="lg:mx-18 px-12 pb-12 ">
        <div className="h-20 flex items-center">
          <button className="py-2 px-2 flex items-center gap-2 font-bold" onClick={goBack}><IoArrowBack /> Back</button>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="text-green-500 font-bold">
            {data.category.toUpperCase()}
          </div>
          <h1 className="text-2xl font-semibold md:text-4xl">{data.title}</h1>
          <div className="mt-2">
            <strong>{data.user.username}</strong>
            <span> | </span>
            <span>{date}</span>
          </div>
        </div>
        <div className="mb-6">
          <Share slug={params.slug} />
        </div>
        <div className="relative h-auto rounded-xl overflow-hidden mb-4">
          <Image src={`${data.thubmnail}`} alt={data.title} width={800} height={100} className="w-full" />
        </div>
        {documentToReactComponents(data.content, options)}
        <div className="flex flex-col gap-6 container">
          <h1 className="text-2xl sm:text-3xl mb-6 font-semibold border-b-2 border-slate-500 md:text-5xl lg:text-6xl">RECOMMENDATION</h1>
          <BlogRecom blog={blogRecom} />
        </div>
      </div>
    </div>
  )
}