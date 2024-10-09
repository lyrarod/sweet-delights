import Image from "next/image";
import { Button } from "@/components/ui/button";

const Services = () => {
  const servicesList = [
    {
      title: "Candy Subscriptions",
      description: "Receive a curated box of candies every month.",
      image: "candy_subscription.avif",
    },
    {
      title: "Corporate Gifts",
      description: "Impress clients and employees with custom candy packages.",
      image: "corporate_gifts.avif",
    },
    {
      title: "Candy Parties",
      description: "Host unforgettable events with our candy catering service.",
      image: "candy_parties.avif",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <h2 className="pl-4 mx-auto mb-12 text-3xl font-bold text-center border-l-8 text-primary md:text-4xl w-max border-primary">
        Our Services
      </h2>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md bg-background"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mb-4 text-muted-foreground">
                {service.description}
              </p>
              <Button variant={"default"} size={"sm"}>
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
