import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section id="home" className="py-16 sm:py-20">
      <div className="container flex flex-col items-center justify-between md:flex-row ">
        <div className="mb-10 md:w-1/2 md:mb-0">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Welcome to <span className="text-primary">Sweet Delights</span>
          </h1>
          <p className="pr-4 mb-8 text-xl text-muted-foreground">
            Discover a world of delicious candies and <br /> treats that will
            make your taste buds dance with joy!
          </p>
          <Button variant={"default"} size={"lg"}>
            Explore Our Candies 🧁
          </Button>
        </div>
        <div className="max-w-full w-fit ">
          <Image
            src="hero.webp"
            alt="Colorful candies"
            width={600}
            height={400}
            className="rounded-tl-[30%] rounded-br-[30%] shadow-xl border-t-[1rem] border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
