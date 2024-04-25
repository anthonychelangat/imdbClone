"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavItem = ({ items }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="flex justify-center gap-8">
      {items.map(item => (
        <Link
          className={`hover:text-amber-600 font-semi-bold ${
            genre === item.param
              ? "underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg"
              : ""
          }`}
          href={`/?genre=${item.param}`}
          key={item.title}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
