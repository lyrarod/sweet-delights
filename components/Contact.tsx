"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "123 Candy Lane, Sweet City, SC 12345",
    },
    { icon: <Mail className="w-5 h-5" />, text: "info@sweetdelights.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 123-4567" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "+1 (555) 987-6543" },
  ];

  return (
    <section id="contact" className="py-20">
      <h2 className="flex flex-col items-center mx-auto mb-12 text-3xl font-bold text-center text-primary md:text-4xl w-max">
        Contact Us
        <div className="flex w-1/2 mt-1 mb-10 overflow-hidden rounded">
          <div className="flex-1 h-2 bg-pink-200"></div>
          <div className="flex-1 h-2 bg-pink-400"></div>
          <div className="flex-1 h-2 bg-pink-600"></div>
        </div>
      </h2>

      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary">Get in Touch</h3>
          <p className="">
            {`We'd love to hear from you! Whether you have a question about our
            products, need help with an order, or just want to share your sweet
            experiences, we're here for you.`}
          </p>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-muted-foreground"
              >
                <div className="text-primary">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6 rounded-lg shadow-md bg-muted"
          >
            <div>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 placeholder:italic"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 placeholder:italic"
                placeholder="Enter your E-mail"
              />
            </div>
            <div>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 resize-none placeholder:italic"
                rows={4}
                placeholder="Type your Message"
              />
            </div>
            <div>
              <Button size={"default"} className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
