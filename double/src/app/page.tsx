import { Button } from "@/components/ui/button";
import Image from "next/image";
const data = [
  { id: "1", title: "Mission" },
  { id: "2", title: "Pricing" },
  { id: "3", title: "Blog" },
  { id: "4", title: "Help" },
  { id: "5", title: "Contact" },
];
export default function Home() {
  return (
    <main>
      <div className="bg-primary w-screen px-20 pb-20 rounded-bl-[300px]">
        <header className="flex justify-between py-3">
          <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
          <ul className="flex space-x-8 items-center">
            {data.map((item) => (
              <li key={item.id}>
                <Button variant="link">{item.title}</Button>
              </li>
            ))}
          </ul>
          <div className="space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </header>
        <div className="items-center justify-center flex flex-col mt-50 space-y-6">
          <div className="bg-white rounded-full flex space-x-2 py-1 px-2 items-center mt-14">
            <div className="w-[30px] h-[30px] bg-[#F26625] rounded-full flex items-center justify-center text-white text-sm">
              Y
            </div>
            <p className="text-sm text-gray-600">Backed by</p>
            <p className="text-sm text-[#F26625]">Y Combinator</p>
          </div>
          <h1 className="text-7xl font-normal text-center text-[#101516]">
            A <span className="font-bold text-[#101516]">smarter</span> <br />
            investment account.
          </h1>
          <h4 className="text-xl font-normal text-center">
            Double makes it dead simple to replace your <br /> Financial Advisor
          </h4>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Explore
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <Image
            src={"/portfolio.svg"}
            alt="portfolio"
            width={1000}
            height={650}
          />
        </div>
      </div>
    </main>
  );
}
