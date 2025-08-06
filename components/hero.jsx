"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const HeroSection = () => {
  const imageRef = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (!imageRef.current) return;

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageRef.current.classList.add("scrolled");
      } else {
        imageRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-[#3AB0A2]/10 via-[#C9F270]/10 to-[#1A2E3B]/10 blur-3xl -z-10 opacity-60"></div>
      <div className="absolute top-40 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-l from-[#C9F270]/10 via-[#3AB0A2]/10 to-[#1A2E3B]/10 blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[#3AB0A2]/5 to-transparent blur-3xl -z-10"></div>

      <div className="py-16 md:py-28 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-7xl">
          <div className="lg:w-1/2 text-left lg:pr-16 mb-10 lg:mb-0 relative">
            {/* Badge */}
            <div className="inline-flex items-center mb-5 text-sm font-medium text-primary/90 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-2 animate-pulse"></span>
              AI-Powered Financial Management
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl pb-4 font-bold tracking-tight leading-tight">
              Your finances{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold tracking-tight">
                  manage themselves
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-secondary/30 -z-0 transform -rotate-1"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              A modern financial dashboard that helps you track and optimize
              your spending with intuitive tools and powerful AI-driven
              insights.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-8 h-12 rounded-md w-full sm:w-auto group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Get Started
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 h-12 rounded-md w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  >
                    <PlayCircle size={18} className="mr-2" /> Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none">
                  {isMounted && (
                    <div className="aspect-video relative w-full overflow-hidden rounded-lg shadow-xl">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="FineFinance Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:w-1/2 ">
            <div className="relative">
              <div className="absolute -z-10 w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-r from-primary/20 to-secondary/20 -right-20 -top-20"></div>
              <div className="absolute -z-10 w-[200px] h-[200px] rounded-full blur-3xl bg-gradient-to-r from-accent/15 to-secondary/15 left-0 top-1/2"></div>

              <div
                ref={imageRef}
                className="hero-image relative z-10 transform transition-all duration-700 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/10 opacity-0 hover:opacity-40 transition-opacity z-20"></div>
                <Image
                  src="/banner.png"
                  alt="Financial Dashboard Preview"
                  width={1280}
                  height={720}
                  className="rounded-xl mx-auto shadow-xl"
                  priority
                />

                {/* Floating badges */}
                <div className="absolute -top-5 -right-5 bg-white dark:bg-card shadow-lg rounded-lg p-3 flex items-center z-30 animate-bounce-slow border border-accent/20 dark:border-accent/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Smart Analytics</div>
                    <div className="text-xs text-muted-foreground"></div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white dark:bg-card shadow-lg rounded-lg p-3 flex items-center z-30 animate-pulse-slow border border-secondary/20 dark:border-secondary/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">AI Powered</div>
                    <div className="text-xs text-muted-foreground"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
