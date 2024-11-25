import Card from "@/components/card";
import LoginCheck from "@/components/loginCheck";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] pt-4">
      <div className="container">
        <Card />
      </div>
      <LoginCheck />
    </div>
  );
}
