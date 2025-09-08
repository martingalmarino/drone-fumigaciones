import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
  color?: string;
};

export function CardCalculator({ href, title, color = "bg-red-500" }: Props) {
  return (
    <Link
      href={href}
      className={`
        block w-full ${color} text-white
        rounded-2xl shadow-sm
        px-4 py-3 min-h-[56px]
        overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20
        transition-transform hover:-translate-y-0.5
        will-change-transform
      `}
    >
      <span className="block font-medium leading-snug break-words line-clamp-2">
        {title}
      </span>
    </Link>
  );
}