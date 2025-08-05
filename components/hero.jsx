"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div>
          <h1>
            Manage Your Personal Finances <br /> With Ease
          </h1>
          <p>
            FineFinance is a modern financial dashboard application that helps
            you manage your finances effortlessly.
          </p>
          <div>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="px-8">
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
      </div>
    </div>
  );
};

export default HeroSection;
