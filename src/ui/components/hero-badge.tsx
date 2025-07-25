"use client";

import Link from "next/link";

export function HeroBadge() {
  return (
    <Link
      className={`
        inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm
        font-semibold text-primary transition-colors hover:bg-primary/20
      `}
      href="/stores"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">🍱</span>
        <span>Экономь до 80% на свежей еде</span>
      </div>
    </Link>
  );
}