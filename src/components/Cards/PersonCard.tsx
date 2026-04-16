import Image from "next/image";

export type PersonCardProps = {
  name: string;
  role: string;
  company?: string;
  companyUrl?: string;
  image: string;
  /**
   * "officer" — circle photo with coloured top border, role pill badge,
   *             centred layout.  (Board officers row)
   *
   * "member"  — square aspect-ratio photo that fills the top of the card,
   *             with a gradient overlay on hover.  (Board members grid)
   */
  variant?: "officer" | "member";
  /** Tailwind border-color class for the top accent border (officer only).
   *  e.g. "border-yellow", "border-teal".  Defaults to "border-teal". */
  accentClass?: string;
};

export default function PersonCard({
  name,
  role,
  company,
  companyUrl,
  image,
  variant = "member",
  accentClass = "border-teal",
}: PersonCardProps) {
  const companyEl = companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body text-sm text-teal-dark hover:text-teal transition-colors"
    >
      {company}
    </a>
  ) : company ? (
    <p className="font-body text-sm text-slate-500">{company}</p>
  ) : null;

  if (variant === "officer") {
    return (
      <div
        className={`card border-t-4 ${accentClass} p-8 flex flex-col items-center text-center gap-5 hover:shadow-xl transition-shadow duration-300`}
      >
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-teal/20 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            quality={95}
            priority
            className="object-cover object-top"
          />
        </div>
        <div>
          <span className="inline-block bg-teal/10 text-teal-dark text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            {role}
          </span>
          <h3 className="heading-sm text-primary mb-1">{name}</h3>
          {companyEl}
        </div>
      </div>
    );
  }

  /* member variant */
  return (
    <div className="card group overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          quality={90}
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 text-center">
        <p className="font-body text-[0.6rem] font-bold uppercase tracking-wider text-teal-dark mb-1">
          {role}
        </p>
        <h3 className="heading-xs text-primary font-semibold mb-1">{name}</h3>
        {companyEl}
      </div>
    </div>
  );
}
