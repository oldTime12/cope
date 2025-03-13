"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const linkData = [
    { href: "/performance", text: "Performance" },
    { href: "/reliability", text: "Reliability" },
    { href: "/scale", text: "Scale" },
  ];

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between p-4 container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "text-purple-500" : ""}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
