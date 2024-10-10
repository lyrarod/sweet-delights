import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CandyIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted">
      <div className="container">
        <div className="flex flex-col justify-between sm:items-center md:flex-row">
          <div className="mb-4 md:mb-0">
            <span className="flex items-center text-primary gap-x-1">
              <CandyIcon className="" />{" "}
              <h3 className="font-bold ">Sweet Delights</h3>
            </span>
            <p className="mt-2 text-sm">
              Bringing joy through delicious candies since 2000
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-primary hover:scale-110" />
            </Link>
            <Link href="#" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-primary hover:scale-110" />
            </Link>
            <Link href="#" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-primary hover:scale-110" />
            </Link>
            <Link href="#" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-primary hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-sm sm:text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Sweet Delights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
