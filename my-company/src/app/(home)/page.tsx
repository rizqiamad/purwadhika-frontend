import Hero from "@/components/home/hero/hero";
import Leaders from "@/components/home/high-tech-leaders/leaders";
import Products from "@/components/home/products/products";
import Review from "@/components/home/review/review";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Review />
      <Leaders />
    </main>
  );
}
