"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type BoardMember = {
  name: string;
  company: string;
  companyUrl?: string;
  role: string;
  image: string;
  bio?: string;
};

// Fallback bio so every member can open a popup
function getBio(m: BoardMember) {
  return (
    m.bio ||
    `${m.name} serves as a ${m.role} on the Mountain West Chamber of Commerce Board of Directors. As a representative of ${m.company}, they contribute to strengthening the business community across Riverton, Herriman, and Bluffdale.`
  );
}

// ─── Shared Popup Modal ──────────────────────────────────────────────────────
function MemberModal({
  member,
  onClose,
}: {
  member: BoardMember;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} profile`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/70"
        style={{ backdropFilter: "blur(4px)" }}
      />

      {/* Card */}
      <div
        className="relative z-10 bg-white radius-2xl shadow-2xl w-full max-w-lg animate-fadeIn overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent strip */}
        <div className="h-1.5 bg-linear-to-r from-primary via-slate-blue to-teal" />

        {/* Header */}
        <div className="flex items-start gap-5 p-6 pb-4">
          <div className="relative w-20 h-20 radius-full overflow-hidden ring-4 ring-teal/20 shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              quality={95}
              className="object-cover object-top"
            />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 radius-full mb-2 font-accent">
              {member.role}
            </span>
            <h3 className="heading-s text-primary font-heading leading-tight mb-1">
              {member.name}
            </h3>
            {member.companyUrl ? (
              <a
                href={member.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-s font-body text-teal hover:text-primary transition-colors"
              >
                {member.company}
              </a>
            ) : (
              <p className="text-s font-body text-ink">{member.company}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 radius-full border border-light-gray text-ink hover:text-primary hover:border-primary transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.95 1.05a.75.75 0 0 0-1.06 0L6 4.94 2.11 1.05A.75.75 0 1 0 1.05 2.11L4.94 6 1.05 9.89a.75.75 0 1 0 1.06 1.06L6 7.06l3.89 3.89a.75.75 0 1 0 1.06-1.06L7.06 6l3.89-3.89a.75.75 0 0 0 0-1.06Z" />
            </svg>
          </button>
        </div>

        <div className="mx-6 h-px bg-light-gray" />

        <div className="p-6">
          <p className="font-body text-m text-ink leading-relaxed">
            {getBio(member)}
          </p>
        </div>

        {member.companyUrl && (
          <div className="px-6 pb-6 pt-0">
            <a
              href={member.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Visit Company →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// STYLE A — Classic Portrait
// Vertical card · square photo top · role badge pill · name · company
// Clean, minimal. Very safe for any use case.
// ═══════════════════════════════════════════════════════════════════════════
function CardA({
  m,
  onOpen,
}: {
  m: BoardMember;
  onOpen: (m: BoardMember) => void;
}) {
  return (
    <div
      onClick={() => onOpen(m)}
      className="card cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-light-gray">
        <Image
          src={m.image}
          alt={m.name}
          fill
          quality={90}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 radius-full mb-3 font-accent">
          {m.role}
        </span>
        <h3 className="heading-xs text-primary font-heading mb-1">{m.name}</h3>
        <p className="text-s font-body text-ink">{m.company}</p>
      </div>
    </div>
  );
}

export default function BoardExpandGrid({
  members,
}: {
  members: BoardMember[];
}) {
  const [selected, setSelected] = useState<BoardMember | null>(null);

  function open(m: BoardMember) {
    setSelected(m);
  }

  function close() {
    setSelected(null);
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {members.map((m) => (
          <CardA key={m.name} m={m} onOpen={open} />
        ))}
      </div>
      {selected && <MemberModal member={selected} onClose={close} />}
    </div>
  );
}
