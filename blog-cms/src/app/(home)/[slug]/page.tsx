import { goBack } from "@/helpers/back";
import { getBlogSlug } from "@/libs/blog"
import { IBlog } from "@/types/blog";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";

export default async function DetailBlog({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data: IBlog = await getBlogSlug(slug)

  return (
    <div className="w-[70vw] mx-auto bg-slate-200 px-12 pb-12 mt-6 rounded-xl">
      <div className="h-20 flex items-center">
        <button className="bg-slate-300 py-2 px-8 rounded-md font-bold" onClick={goBack}>&lt; Back</button>
      </div>
      <div className="relative h-[80vh] rounded-xl overflow-hidden">
        <Image src={`https:${data.fields.thumbnail.fields.file.url}`} alt={data.fields.title} fill />
      </div>
      <h1 className="text-4xl text-center my-6 font-semibold">{data.fields.title}</h1>
      {documentToReactComponents(data.fields.content)}
    </div>
  )
}