"use client";

import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState, useEffect } from "react";

export function HeaderClient({ children }) {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return simplified version for SSR to prevent hydration mismatch
    return (
      <>
        <div className="h-9 w-9"></div>
        <div className="h-9 w-9"></div>
      </>
    );
  }

  // Extract mobile menu content from children
  const mobileMenuContent = children.find((child) =>
    child.props?.className?.includes("flex-1 space-y-4")
  );

  // Filter out mobile menu content from regular children
  const regularChildren = children.filter(
    (child) => !child.props?.className?.includes("flex-1 space-y-4")
  );

  return (
    <>
      <ThemeToggle />

      {regularChildren}

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full py-6">{mobileMenuContent}</div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
