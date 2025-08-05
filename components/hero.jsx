"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[100px] pb-6 gradient-title">
          Manage Your Personal Finances <br /> With Ease
        </h1>
        <p className="text=xl text-gray-600 mb-8 max-w-2xl mx-auto">
          FineFinance is a modern financial dashboard application that helps you
          manage your finances effortlessly.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com">
            <Button size="lg" variant="outline" className="px-8">
              Watch Video
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="/banner.png"
            alt="Hero Image"
            width={1280}
            height={720}
            className="rounded-lg shadow-2xl boder mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
