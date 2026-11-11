"use client";
import { usePathname } from "next/navigation";

// Pure-CSS fade so the page starts appearing on first paint,
// without waiting for JavaScript to load. Replays on each route change.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
