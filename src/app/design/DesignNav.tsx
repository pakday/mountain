import Link from "next/link";

interface DesignNavProps {
  currentPage?: "overview" | "buttons" | "cards";
}

export function DesignNav({ currentPage = "overview" }: DesignNavProps) {
  const pages = [
    { id: "overview", label: "Overview", href: "/design" },
    { id: "buttons", label: "Buttons & Badges", href: "/design/buttons" },
    { id: "cards", label: "Cards", href: "/design/cards" },
  ];

  return (
    <div className="bg-[#0D3B66] px-8 py-6 sticky top-0 z-10 shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="text-xs tracking-widest uppercase text-[#5DCAD1] mb-1">
            Design System
          </div>
          <div className="font-serif text-2xl text-[#FFFAF9]">
            Mountain West Chamber — Design Elements
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-1 flex-wrap">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className={`px-4 py-2 rounded-t-lg text-sm font-semibold transition-all ${
                currentPage === page.id
                  ? "bg-[#FFFAF9] text-[#0D3B66]"
                  : "bg-[#3F6183] text-[#FFFAF9] hover:bg-[#5DCAD1] hover:text-[#0D3B66]"
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
