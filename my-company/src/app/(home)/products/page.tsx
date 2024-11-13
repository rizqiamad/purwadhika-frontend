import ProductsCard from "@/components/products/card";

export default async function Products() {
  return (
    <main>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold my-12">OUR PRODUCTS</h1>
      <ProductsCard />
    </main>
  );
}
