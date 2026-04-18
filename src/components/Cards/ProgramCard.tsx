import Image from "next/image";
import Link from "next/link";

export type ProgramCardProps = {
  imageSrc: string;
  /** Yellow pill badge overlaid on the top-left of the image */
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  /** Override the link text. Defaults to "Learn More →" */
  linkLabel?: string;
  /**
   * Optional date string shown as a small eyebrow above the title
   * (used on the Join Us / blog resource cards).
   */
  date?: string;
};

export default function ProgramCard({
  imageSrc,
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Learn More →",
  date,
}: ProgramCardProps) {
  return (
    <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/70 to-transparent" />
        {eyebrow && (
          <span className="absolute top-4 left-4 eyebrow bg-yellow text-primary px-3 py-1 rounded-full text-xs">
            {eyebrow}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {date && <p className="eyebrow text-slate-blue/40">{date}</p>}
        <h3 className="heading-sm text-primary leading-snug">{title}</h3>
        <p className="font-body text-sm text-slate-blue/60 leading-relaxed flex-1">
          {description}
        </p>
        <Link
          href={href}
          className="btn btn-ghost btn-sm self-start mt-2 pl-0 text-teal font-700"
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}
