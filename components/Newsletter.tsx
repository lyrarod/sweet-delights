import { MailsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="flex py-20 bg-secondary bg-[url('/inspiration-geometry.png')] bg-fixed">
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full max-w-md gap-6 p-8 mx-auto rounded-lg shadow-md bg-muted">
          <MailsIcon className="size-12 text-primary" />
          <h3 className="text-lg sm:text-xl text-muted-foreground">
            Subscribe to Newsletter
          </h3>
          <Input
            placeholder="Enter your E-mail"
            required
            className="placeholder:italic"
          />
          <Button size={"default"} className="w-full">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
