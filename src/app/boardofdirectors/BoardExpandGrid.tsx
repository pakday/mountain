"use client";

import Image from "next/image";
import { useState } from "react";

export type BoardMember = {
  name: string;
  company: string;
  companyUrl?: string;
  role: string;
  image: string;
  bio?: string;
};

export default function BoardExpandGrid({
  members,
}: {
  members: BoardMember[];
}) {
  const [selected, setSelected] = useState<BoardMember | null>(null);

  function toggle(member: BoardMember) {
    if (!member.bio) return;
    setSelected((prev) => (prev?.name === member.name ? null : member));
  }

  return (
    <div>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {members.map((m) => {
          const isActive = selected?.name === m.name;
          const hasBio = Boolean(m.bio);
          return (
            <div
              key={m.name}
              onClick={() => toggle(m)}
              className={[
                "group rounded-xl overflow-hidden border transition-all duration-300",
                hasBio ? "cursor-pointer" : "cursor-default",
                isActive
                  ? "border-yellow shadow-lg ring-2 ring-yellow/30"
                  : "border-light-gray bg-white hover:shadow-md hover:border-slate-blue/20",
              ].join(" ")}
            >
              {/* Photo */}
              <div className="relative w-full aspect-square overflow-hidden bg-light-gray">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  quality={90}
                  className={[
                    "object-cover object-top transition-transform duration-500",
                    hasBio ? "group-hover:scale-105" : "",
                  ].join(" ")}
                />
                {/* Overlay on active */}
                {isActive && <div className="absolute inset-0 bg-primary/30" />}
                {/* Bio indicator badge */}
                {hasBio && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-yellow flex items-center justify-center shadow">
                    <span
                      className="text-primary font-bold leading-none"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <span
                  className="inline-block bg-primary/8 text-slate-blue font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2"
                  style={{ fontSize: "0.58rem" }}
                >
                  {m.role}
                </span>
                <h3
                  className="font-heading font-semibold text-primary leading-tight mb-1"
                  style={{ fontSize: "0.95rem" }}
                >
                  {m.name}
                </h3>
                {m.companyUrl ? (
                  <a
                    href={m.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-body text-teal hover:text-primary transition-colors"
                    style={{ fontSize: "0.78rem" }}
                  >
                    {m.company}
                  </a>
                ) : (
                  <p
                    className="font-body text-ink"
                    style={{ fontSize: "0.78rem" }}
                  >
                    {m.company}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded bio panel */}
      {selected && (
        <div className="mt-6 rounded-2xl overflow-hidden border border-yellow/30 bg-white shadow-lg animate-fadeIn">
          <div className="flex flex-col sm:flex-row gap-0">
            {/* Photo strip */}
            <div className="relative sm:w-52 shrink-0 aspect-square sm:aspect-auto overflow-hidden bg-light-gray">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                quality={95}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Bio content */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span
                      className="inline-block bg-yellow text-primary font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                      style={{ fontSize: "0.62rem" }}
                    >
                      {selected.role}
                    </span>
                    <h3 className="heading-s text-primary mb-1 font-heading">
                      {selected.name}
                    </h3>
                    <p
                      className="font-body text-teal font-medium"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {selected.company}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="shrink-0 mt-1 w-8 h-8 rounded-full border border-light-gray text-ink hover:text-primary hover:border-primary transition-colors flex items-center justify-center"
                    aria-label="Close bio"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path d="M10.95 1.05a.75.75 0 0 0-1.06 0L6 4.94 2.11 1.05A.75.75 0 1 0 1.05 2.11L4.94 6 1.05 9.89a.75.75 0 1 0 1.06 1.06L6 7.06l3.89 3.89a.75.75 0 1 0 1.06-1.06L7.06 6l3.89-3.89a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </button>
                </div>

                <div className="h-px bg-light-gray mb-5" />

                <p className="font-body text-ink leading-relaxed text-sm sm:text-base">
                  {selected.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
