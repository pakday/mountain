import Image from "next/image";

interface ContactPersonProps {
  /** Optional eyebrow label above heading */
  eyebrow?: string;
  /** Section heading */
  heading?: string;
  /** Short message shown under heading */
  message?: string;
  /** Person's full name */
  name?: string;
  /** Job title */
  title?: string;
  /** Organisation name */
  organization?: string;
  /** Phone number (display text, must be dialable) */
  phone?: string;
  /** Email address */
  email?: string;
  /** Square headshot – defaults to Susan Schilling */
  imageSrc?: string;
  /** Alt text for headshot */
  imageAlt?: string;
  /** Section background class – defaults to bg-light-gray */
  bgClass?: string;
}

export default function ContactPerson({
  eyebrow = "Questions?",
  heading = "Let Us Know How We Can Help",
  message = "Let us know if you have questions.",
  name = "Susan Schilling",
  title = "President",
  organization = "Mountain West Chamber of Commerce",
  phone = "801-280-0595",
  email = "susan@mountainwestchamber.org",
  imageSrc = "/Structure/Programs/knight-of-heroes-event/Susan+Schilling+Sq.jpg",
  imageAlt = "Susan Schilling – President, Mountain West Chamber of Commerce",
  bgClass = "bg-light-gray",
}: ContactPersonProps) {
  return (
    <section className={`py-(--section-l) ${bgClass}`}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-xl">
            <div className="grid sm:grid-cols-[auto_1fr] items-stretch">
              {/* Photo column */}
              <div className="relative w-full sm:w-48 h-52 sm:h-auto shrink-0">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>

              {/* Info column */}
              <div className="p-8 flex flex-col justify-center gap-5">
                {/* Eyebrow + heading */}
                <div>
                  {eyebrow && (
                    <p className="eyebrow text-teal mb-2">{eyebrow}</p>
                  )}
                  <h2 className="heading-m text-white mb-1">{heading}</h2>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
                    {message}
                  </p>
                </div>

                {/* Person identity */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-heading text-white font-semibold text-base leading-snug">
                    {name}
                  </p>
                  <p className="font-body text-teal text-xs uppercase tracking-widest mt-0.5">
                    {title}
                  </p>
                  <p className="font-body text-white/50 text-xs mt-0.5">
                    {organization}
                  </p>
                </div>

                {/* Contact links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                    className="inline-flex items-center gap-2 font-body text-white text-sm hover:text-yellow transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 hover:bg-teal transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    {phone}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 font-body text-white text-sm hover:text-yellow transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 hover:bg-teal transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
