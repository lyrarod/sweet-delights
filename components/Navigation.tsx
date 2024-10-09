"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, CandyIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Features" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow bg-background/60 backdrop-blur dark:border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-bold sm:text-2xl gap-x-2 text-primary"
            >
              <CandyIcon className="sm:size-8" /> <span>Sweet Delights</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => {
                return item.label !== "Contact" ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium rounded-md hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Button key={index} asChild size={"sm"}>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                );
              })}
              {mounted && (
                <Button onClick={toggleTheme} variant="ghost" size="icon">
                  {theme === "dark" ? <Sun /> : <Moon />}
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
                {theme === "dark" ? <Sun /> : <Moon />}
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
                href={item.href}
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
