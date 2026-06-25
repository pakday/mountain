"use client";

import { useState } from "react";

export default function MemberSearchBar() {
  const [query, setQuery] = useState("");

  return (
    <section className="bg-primary py-10 border-b border-primary/20">
      <div className="section-container max-w-7xl">
        <div className="max-w-2xl">
          <label className="block mb-3">
            <p className="font-body text-sm font-600 text-white mb-3">
              Search the Directory
            </p>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by business name, category, or contact..."
              className="w-full px-4 py-3 rounded-lg border-2 border-teal/30 bg-white text-ink placeholder-slate-blue/60 font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
