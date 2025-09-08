// Layout vertical simple - Una píldora debajo de otra
import React from "react";

export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {children}
    </div>
  );
}