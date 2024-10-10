import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <h2 className="flex flex-col items-center mx-auto mb-12 text-3xl font-bold text-center text-primary md:text-4xl w-max">
        About Us
        <div className="flex w-1/2 mt-1 mb-10 overflow-hidden rounded">
          <div className="flex-1 h-2 bg-pink-200"></div>
          <div className="flex-1 h-2 bg-pink-400"></div>
          <div className="flex-1 h-2 bg-pink-600"></div>
        </div>
      </h2>

      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="mb-10 md:w-1/2 md:mb-0">
          <Image
            src="/about.jpg"
            alt="About Image"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-10 text-muted-foreground">
          <h3 className="mb-4 text-2xl font-semibold text-primary">
            Our Sweet Story
          </h3>
          <p className="mb-6">
            {`Sweet Delights was born out of a passion for creating joy through
            delicious candies. For over two decades, we've been crafting the
            finest sweets using traditional recipes and high-quality
            ingredients.`}
          </p>
          <p className="mb-6">
            Our mission is to bring smiles to faces of all ages with our wide
            variety of candies, from classic favorites to innovative new
            flavors. We take pride in our commitment to quality and customer
            satisfaction.
          </p>
          <p className="">
            Visit our store to experience the magic of Sweet Delights and
            indulge in a world of sugary wonders!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
