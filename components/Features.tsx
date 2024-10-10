import { Candy, Gift, Truck, Star, Heart, CreditCard } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Candy className="w-12 h-12 text-primary" />,
      title: "Wide Variety",
      description:
        "Explore our extensive collection of candies from around the world.",
    },
    {
      icon: <Gift className="w-12 h-12 text-primary" />,
      title: "Custom Packages",
      description: "Create personalized candy gift boxes for any occasion.",
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Fast Delivery",
      description:
        "Enjoy quick and reliable shipping to satisfy your sweet cravings.",
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Premium Quality",
      description:
        "Indulge in top-quality candies made with the finest ingredients.",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Customer Favorites",
      description: "Discover our most loved and highly rated candy selections.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "Secure Payments",
      description:
        "Shop with confidence using our safe and secure payment options.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <h2 className="flex flex-col items-center mx-auto mb-12 text-3xl font-bold text-center text-primary md:text-4xl w-max">
        Our Features
        <div className="flex w-1/2 mt-1 mb-10 overflow-hidden rounded">
          <div className="flex-1 h-2 bg-pink-200"></div>
          <div className="flex-1 h-2 bg-pink-400"></div>
          <div className="flex-1 h-2 bg-pink-600"></div>
        </div>
      </h2>

      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="p-6 text-center rounded-lg shadow-md bg-muted "
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-primary">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
