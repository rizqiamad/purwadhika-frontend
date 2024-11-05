'use client'

import { getBlogSlug } from "@/libs/blog"
import { useParams } from "next/navigation"

export default async function DetailBlog(){
  const { slug } = useParams<{slug: string}>()
  const data = await getBlogSlug(slug)
  console.log(data)

  return (
    <div>

    </div>
  )
}