interface SocialIconsProps {
  className?: string;
  links?: { href: string; label: string; icon: React.ReactNode }[];
}

export default function SocialIcons({
  className = "",
  links,
}: SocialIconsProps) {
  const defaultLinks = [
    { href: "mailto:hello@emilypaigedesigns.com", label: "Email", icon: "✉️" },
    { href: "https://instagram.com", label: "Instagram", icon: "📸" },
    { href: "https://pinterest.com", label: "Pinterest", icon: "📌" },
  ];

  const items = links ?? defaultLinks;

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(212,201,176,0.35)] bg-[rgba(20,18,16,0.18)] text-[#d4c9b0] transition-all duration-300 hover:border-[#d4c9b0] hover:bg-[rgba(212,201,176,0.08)]">
          <span className="text-base">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}
