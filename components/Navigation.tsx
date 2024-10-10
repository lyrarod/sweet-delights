"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import { Link } from "react-scroll";

import { Menu, X, Sun, Moon, CandyIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const menuItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "features", label: "Features" },
    { href: "services", label: "Services" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow bg-background/60 backdrop-blur dark:border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="home"
              href="#"
              offset={-65}
              className="flex items-center font-bold gap-x-2 text-primary lg:text-xl"
            >
              <CandyIcon className="sm:size-8 md:size-6" />{" "}
              <span>Sweet Delights</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => {
                return item.href !== "contact" ? (
                  <Link
                    key={index}
                    to={item.href}
                    href={"#"}
                    spy={true}
                    hashSpy={true}
                    offset={item.href === "home" ? -65 : -63}
                    activeClass="active_class"
                    className="px-3 py-2 text-sm font-medium hover:active_class"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Button key={index} asChild size={"sm"}>
                    <Link
                      to={item.href}
                      href="#"
                      spy={true}
                      hashSpy={true}
                      offset={-63}
                    >
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
              {mounted && (
                <Button onClick={toggleTheme} variant="ghost" size="icon">
                  {resolvedTheme === "dark" ? <Sun /> : <Moon />}
                </Button>
              )}
            </div>
          </div>
          <div className="flex items-center md:hidden">
            {mounted && (
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="mr-2"
              >
                {resolvedTheme === "dark" ? <Sun /> : <Moon />}
              </Button>
            )}
            <Button onClick={toggleMenu} size={"icon"} variant={"ghost"}>
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                href={"#"}
                spy={true}
                hashSpy={true}
                offset={-265}
                activeClass="active_class"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
