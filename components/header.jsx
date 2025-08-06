"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LayoutDashboard, Menu, PenBox } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simplified version for SSR to prevent hydration mismatch
    return (
      <div className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-border/10 bg-background/80">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="FineFinance"
              width={120}
              height={40}
              priority
            />
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            {/* Placeholder for hydration */}
            <div className="h-9 w-9"></div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-border/10 bg-background/80">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="FineFinance"
            width={120}
            height={40}
            priority
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />

          <SignedIn>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="rounded-md h-9">
                  <LayoutDashboard size={16} className="mr-2" />
                  <span>Dashboard</span>
                </Button>
              </Link>

              <Link href="/transactions/create">
                <Button variant="ghost" size="sm" className="rounded-md h-9">
                  <PenBox size={16} className="mr-2" />
                  <span>New Transaction</span>
                </Button>
              </Link>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="hidden md:flex items-center gap-3">
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="ghost" size="sm" className="rounded-md h-9">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton forceRedirectUrl="/dashboard">
                <Button variant="default" size="sm" className="rounded-md h-9">
                  Get Started
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-9 w-9",
                  userButtonAvatarImage: "rounded-full",
                  userButtonProfile: "hidden",
                },
              }}
            />
          </SignedIn>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full py-6">
                  <div className="flex-1 space-y-4">
                    <SignedIn>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-2 py-3 text-base font-medium hover:bg-muted rounded-md"
                      >
                        <LayoutDashboard size={18} className="mr-3" />
                        Dashboard
                      </Link>
                      <Link
                        href="/transactions/create"
                        className="flex items-center px-2 py-3 text-base font-medium hover:bg-muted rounded-md"
                      >
                        <PenBox size={18} className="mr-3" />
                        New Transaction
                      </Link>
                    </SignedIn>
                  </div>

                  <SignedOut>
                    <div className="pt-6 space-y-3">
                      <SignInButton forceRedirectUrl="/dashboard">
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton forceRedirectUrl="/dashboard">
                        <Button className="w-full">Get Started</Button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
