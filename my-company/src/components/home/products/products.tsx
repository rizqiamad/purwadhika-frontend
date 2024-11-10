import Link from "next/link";
import CarouselProducts from "./carousel";

export default function Products() {
  return (
    <div className="py-16">
      <h1 className="font-semibold text-4xl text-center mb-20">JELAJAHI PRODUK KAMI</h1>
      <CarouselProducts />
      <div className="flex justify-center mt-12">
        <Link href={'/products'} className="transition ease-linear duration-200 py-3 px-6 bg-black text-white font-semibold hover:text-red-500 rounded-md">Go to Products for more</Link>
      </div>
    </div>
  )
}