import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet The Staff | Mountain West Chamber of Commerce",
  description:
    "Meet the dedicated team behind the Mountain West Chamber of Commerce — working every day to connect and grow the businesses of Riverton, Herriman, and Bluffdale.",
};

// ─── Staff Data ──────────────────────────────────────────────────────────────
const staff = [
  {
    name: "Nancy Jenkins",
    title: "Executive Director",
    email: "Info@mountainwestchamber.org",
    phone: "801-280-0595",
    bio: "Nancy has led the Mountain West Chamber of Commerce for over a decade, championing business growth, community partnerships, and economic development across Riverton, Herriman, and Bluffdale. Her passion for connecting businesses with the resources they need drives everything we do.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    featured: true,
  },
  {
    name: "Sarah Mitchell",
    title: "Events & Programs Coordinator",
    email: "Info@mountainwestchamber.org",
    bio: "Sarah brings creativity and precision to every Chamber event — from the annual Golf Tournament to the Teacher Appreciation Event. She coordinates logistics, sponsorships, and operations to ensure each program delivers maximum value for members and the community.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    featured: false,
  },
  {
    name: "David Torres",
    title: "Membership Development Manager",
    email: "Info@mountainwestchamber.org",
    bio: "David is passionate about helping businesses thrive. He works closely with prospective and current members to ensure they're taking full advantage of Chamber benefits — from networking opportunities to the Local Link Discount program and beyond.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    featured: false,
  },
  {
    name: "Lisa Chen",
    title: "Communications & Marketing Coordinator",
    email: "Info@mountainwestchamber.org",
    bio: "Lisa manages the Chamber's voice across all digital channels — from the website and social media to the Chamber News newsletter. She ensures members and the community stay informed about events, opportunities, and resources.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    featured: false,
  },
];

// ─── Values ─────────────────────────────────────────────────────────────────
const values = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Community First",
    desc: "Every decision we make puts the businesses and residents of our communities at the center.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Proven Results",
    desc: "Since 1997, we've helped hundreds of businesses grow through networking, advocacy, and education.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Genuine Care",
    desc: "We treat every member relationship personally — your success is our success.",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Mountain West Chamber team at work"
          fill
          quality={90}
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/40" />

        {/* Decorative rings */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-teal/20 pointer-events-none" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-yellow/15 pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">Our Team</p>
            <h1 className="heading-xl text-white mb-4">Meet The Staff</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="text-l text-white/80 leading-relaxed">
              The people behind the mission — dedicated professionals working
              every day to help your business grow and your community thrive.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRO
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="heading-l text-primary mb-5">
              Passionate About People &amp; Business
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-m text-ink leading-relaxed mb-4">
              The Mountain West Chamber of Commerce team is a small but mighty
              group of professionals committed to supporting the businesses and
              communities of Riverton, Herriman, and Bluffdale. From events and
              membership to communications and advocacy, each team member brings
              deep expertise and genuine care to their work.
            </p>
            <p className="text-m text-ink leading-relaxed">
              Together, we live our tagline every day:{" "}
              <span className="font-semibold text-primary">
                &ldquo;Together We Are Stronger.&rdquo;
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED STAFF — EXECUTIVE DIRECTOR
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
                <Image
                  src={staff[0].image}
                  alt={staff[0].name}
                  fill
                  quality={85}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-5 -right-5 lg:right-5 w-28 h-28 bg-yellow rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal/20 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                {staff[0].title}
              </span>
              <h2 className="heading-l text-primary mb-4">{staff[0].name}</h2>
              <div className="section-divider mb-6" />
              <p className="text-m text-ink leading-relaxed mb-8">
                {staff[0].bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${staff[0].email}`}
                  className="btn btn-primary"
                >
                  <svg
                    className="w-4 h-4 mr-2 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send a Message
                </a>
                <a
                  href={`tel:${staff[0].phone?.replace(/-/g, "")}`}
                  className="btn btn-outline"
                >
                  <svg
                    className="w-4 h-4 mr-2 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  801-280-0595
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM GRID
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Our Department Leads</p>
            <h2 className="heading-m text-primary mb-4">The Full Team</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.slice(1).map((member) => (
              <div
                key={member.name}
                className="card group overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={80}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block bg-teal/10 text-slate-blue text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    {member.title}
                  </span>
                  <h3 className="heading-s text-primary mb-3">{member.name}</h3>
                  <p className="text-s text-ink leading-relaxed mb-5">
                    {member.bio}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-s font-semibold text-slate-blue hover:text-teal transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Get in Touch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM VALUES
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow text-teal mb-4">What Drives Us</p>
            <h2 className="heading-m text-white mb-4">
              Our Guiding Principles
            </h2>
            <div className="section-divider bg-teal mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 bg-teal/20 text-teal rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="heading-xs text-white mb-3">{v.title}</h3>
                <p className="text-s text-white/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-light-gray rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="heading-m text-primary mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-m text-ink leading-relaxed mb-8">
              Have a question, want to get involved, or interested in becoming a
              member? Our team is here and ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/becomeamember" className="btn btn-outline">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
