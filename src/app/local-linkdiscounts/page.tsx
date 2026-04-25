import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Local Link Discounts — Mountain West Chamber",
  description:
    "Download the Goosechase app and take advantage of discounts at awesome local businesses. Free for consumers, $50/quarter for participating businesses.",
};

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
        imageAlt="Local businesses and community shopping"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-slate-blue/70"
        eyebrow="Mountain West Chamber Programs"
        title={
          <>
            Local Link <span className="text-yellow">Discount</span>
          </>
        }
        description="Local Link Discount App for Everyone"
      />

      {/* ─── FOR CONSUMERS ─── */}
      <section className="py-(--section-xl) bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ── Text column ── */}
            <div>
              <p className="eyebrow mb-3">Free for All</p>
              <h2 className="heading-l text-primary mb-5">
                Free for all Consumers
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-8">
                Download the Goosechase app and take advantage of discounts at
                awesome local businesses! Download the app, create a team, and
                find the &ldquo;Local Link&rdquo; discounts by searching for{" "}
                <strong className="text-primary">Local Link</strong> in the top
                search bar or entering your join code in the code search bar.
                Then have fun exploring local participating businesses! Prizes
                are awarded to those with the most points.
              </p>

              {/* Join code highlight */}
              <div className="bg-primary rounded-2xl px-6 py-5 mb-8 flex items-center gap-5">
                <div className="shrink-0">
                  <p className="font-accent text-teal text-xs font-700 tracking-widest uppercase mb-1">
                    GooseChase Join Code
                  </p>
                  <p className="font-heading text-yellow text-4xl font-700 tracking-widest leading-none">
                    HBZ14G
                  </p>
                </div>
                <div className="w-px self-stretch bg-white/20" />
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  Enter this code in GooseChase or search{" "}
                  <span className="text-white font-600">Local Link</span> in the
                  top search bar.
                </p>
              </div>

              <a
                href="https://www.goosechase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Download the GooseChase App
              </a>
            </div>

            {/* ── Image column ── */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/Structure/Programs/local-linkdiscounts/image-asset.png"
                  alt="Local Link Discount Program guide"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
                {/* FREE badge overlay */}
                <div className="absolute top-4 right-4 bg-yellow text-primary font-heading font-700 text-sm px-4 py-1.5 rounded-full shadow-md">
                  FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOR BUSINESSES ─── */}
      <section className="py-(--section-xl) bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* ── Image column (left on desktop) ── */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/Structure/Programs/local-linkdiscounts/2025+Passport+Program+Intro.png"
                  alt="2025 Local Link Passport Program — scan QR to apply"
                  width={500}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* ── Text column (right on desktop) ── */}
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-3">For Businesses</p>
              <h2 className="heading-l text-primary mb-5">
                Calling all Businesses!
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-8">
                Join the Local Link Discount Program to increase awareness of
                your business as well as foot traffic. Scan the QR code to
                complete a Google Doc with your offer.
              </p>

              {/* FAQ card */}
              <div className="border-l-4 border-teal bg-off-white rounded-r-2xl px-6 py-5 mb-8">
                <p className="font-accent font-700 text-primary text-sm mb-3 uppercase tracking-wide">
                  How does the program work?
                </p>
                <p className="font-body text-ink leading-relaxed">
                  Participants pay a{" "}
                  <strong className="text-primary">$50 per quarter</strong>{" "}
                  subscription and post a community experience in the
                  Chamber&apos;s Community Experience App. The community will
                  download the app, visit our participants&apos; locations, and
                  participate in the experiences to earn points for monthly
                  prizes from the Chamber.
                </p>
              </div>

              {/* Pricing pill */}
              <div className="inline-flex items-center gap-3 bg-light-gray rounded-full px-6 py-3 mb-8">
                <span className="font-heading text-primary text-2xl font-700">
                  $50
                </span>
                <span className="font-body text-ink text-sm">
                  per quarter · Chamber members only
                </span>
              </div>

              <div>
                <a
                  href="mailto:Info@mountainwestchamber.org"
                  className="btn btn-primary btn-lg"
                >
                  Email Us to Join
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        {/* subtle dot texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            Ready to Shop Local &amp;{" "}
            <span className="text-yellow">Win Big?</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re a community member looking for great local deals
            or a business ready to drive more foot traffic — the Local Link
            Discount program has something for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.goosechase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Download GooseChase — It&apos;s Free
            </a>
            <Link href="/contactus" className="btn btn-outline-white btn-lg">
              Contact the Chamber
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
