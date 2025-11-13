"use client";

import React, { useEffect, useRef, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaSearch } from "react-icons/fa";

type Category = {
  image: string;
  bg: string;
  test: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  reportsIn?: string;
  size?: string;
};

export type CatalogItem = {
  id: number;
  title: string;
  price: number;
  offer?: number;
  reportsIn?: string;
  type?: string;
  discount?: number;
};

interface SearchComponentProps {
  query: string;
  setQuery: (q: string) => void;
  onClose?: () => void;
  onSelect?: (item: CatalogItem) => void;
}

/**
 * TypeScript conversion of the original SearchComponent.
 * Preserves behavior and layout while adding strong typing to props, state and helpers.
 */
export default function SearchComponent({ query, setQuery, onClose, onSelect }: SearchComponentProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [filter, setFilter] = useState<string>("all");
  const [recent, setRecent] = useState<string[]>([]);

  // --- demo categories & catalog (kept from your original code) ---
  const categories = useMemo<Category[]>(
    () => [
      {
        image: "./images/test.png",
        bg: "bg-[#B2EBF2]",
        test: "25-Hydroxy Vitamin D Total Test (Bone & Joint Health)",
        price: 1099,
        originalPrice: 1400,
        discount: "22%",
        reportsIn: "12 Hours",
        size: "w-[250px] h-auto ml-30 mt-10",
      },
      {
        image: "./images/pregnet.png",
        bg: "bg-[#FFF59D]",
        test: "BhCG Beta HCG / Blood Pregnancy Hormone Test - Serum",
        price: 899,
        originalPrice: 1200,
        discount: "25%",
        reportsIn: "24 Hours",
        size: "w-[145px] h-auto ml-10",
      },
    ],
    []
  );

  const catalog = useMemo<CatalogItem[]>(
    () => [
      { id: 1, title: "25-Hydroxy Vitamin D Total (D2 & D3)", price: 1400, offer: 1099, reportsIn: "12 Hours" },
      { id: 2, title: "BhCG Beta HCG / Blood Pregnancy Hormone Test - Serum", price: 900, offer: 699, reportsIn: "12 Hours" },
      { id: 3, title: "Glucose - Random / RBS Random Blood Sugar", price: 120, offer: 99, reportsIn: "12 Hours" },
      { id: 26, title: "PathoFit - 1 Full Body Package with Thyroid (48 Tests)", price: 2600, offer: 1199, reportsIn: "12-24 Hours", type: "package" },
      { id: 27, title: "PathoFit - 2 Full Body Package with HbA1c (70 Tests)", price: 5950, offer: 1499, reportsIn: "12-24 Hours", type: "package" },
      { id: 8, title: "Glucose - Fasting / Fasting Blood Sugar FBS", price: 120, offer: 99, reportsIn: "12 Hours" },
      { id: 18, title: "CBC Complete Blood Count - Advance Hemogram HMG (28 Parameters)", price: 350, offer: 250, reportsIn: "12 Hours" },
      { id: 28, title: "PCOS PCOD Hormones Screening ADVANCE with AMH (38 Tests)", price: 9070, offer: 4999, reportsIn: "12-24 Hours", type: "package" },
    ],
    []
  );

  // helpers
  const escapeRegExp = (s = "") => s.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");

  function highlight(text: string, q?: string) {
    if (!q) return <>{text}</>;
    const pattern = new RegExp(`(${escapeRegExp(q)})`, "i");
    const parts = text.split(pattern);
    return (
      <>
        {parts.map((part, i) => {
          if (!part) return null;
          if (pattern.test(part)) {
            return (
              <mark key={i} className="bg-yellow-300 text-gray-900 font-semibold px-[2px] rounded">
                {part}
              </mark>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  }

  const withDiscount = useMemo<CatalogItem[]>(
    () =>
      catalog.map((it) => {
        const price = Number(it.price) || 0;
        const offer = Number(it.offer ?? price) || price;
        const discount = price > 0 ? Math.round(((price - offer) / price) * 100) : 0;
        return { ...it, discount };
      }),
    [catalog]
  );

  // recent searches
  useEffect(() => {
    try {
      const raw = localStorage.getItem("search.recent.v1");
      if (raw) setRecent(JSON.parse(raw));
    } catch (e) {
      setRecent([]);
    }
  }, []);

  function pushRecent(q?: string) {
    if (!q) return;
    const next = [q, ...recent.filter((r) => r !== q)].slice(0, 6);
    setRecent(next);
    try {
      localStorage.setItem("search.recent.v1", JSON.stringify(next));
    } catch (e) {
      // ignore storage errors
    }
  }

  // small debounce to show "Searching..."
  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 220);
    return () => clearTimeout(t);
  }, [query]);

  // filtering logic
  const filtered = useMemo<CatalogItem[]>(() => {
    const q = (query || "").trim().toLowerCase();
    const typeFilter = filter === "all" ? null : filter === "packages" ? "package" : null;

    if (!q) {
      const popular = [...withDiscount].sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0) || a.title.localeCompare(b.title));
      return typeFilter ? popular.filter((p) => p.type === typeFilter) : popular;
    }

    const tokens = q.split(/\s+/).filter(Boolean);

    function score(item: CatalogItem) {
      const title = item.title.toLowerCase();
      let s = 0;
      if (title === q) s += 100;
      if (title.includes(q)) s += 40;
      for (const t of tokens) if (title.includes(t)) s += 8;
      const acronym = item.title.split(/\s+/).map((w) => w[0]).join("").toLowerCase();
      if (acronym.includes(q)) s += 12;
      return s;
    }

    const matches = withDiscount
      .map((it) => ({ it, s: score(it) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || a.it.title.localeCompare(b.it.title))
      .map((x) => x.it);

    return typeFilter ? matches.filter((m) => m.type === typeFilter) : matches;
  }, [query, withDiscount, filter]);

  const findCategory = (title?: string): Category | null => {
    if (!title) return null;
    const t = title.toLowerCase();
    let found = categories.find((c) => c.test.toLowerCase().includes(t) || t.includes(c.test.toLowerCase()));
    if (found) return found;
    const tokens = t.split(/\s+/).filter(Boolean);
    found = categories.find((c) => tokens.some((tok) => c.test.toLowerCase().includes(tok)));
    return found || null;
  };

  // prevent background scrolling while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // autofocus input on mount
  useEffect(() => {
    const id = setTimeout(() => inputRef.current?.focus(), 60);
    return () => clearTimeout(id);
  }, []);

  // keyboard behaviour
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose?.();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(0, filtered.length - 1)));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(-1, i - 1));
      }
      if (e.key === "Enter") {
        if (activeIndex >= 0 && activeIndex < filtered.length) {
          handleSelect(filtered[activeIndex]);
        } else if (!filtered.length && query) {
          pushRecent(query);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // intentionally including dependencies the original logic used
  }, [filtered, activeIndex, query, onClose]);

  // keep active visible
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const node = listRef.current.querySelector(`[data-idx='${activeIndex}']`) as HTMLElement | null;
      node?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // simple focus trap inside the dialog (cycles focus)
  useEffect(() => {
    function trap(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const container = containerRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", trap);
    return () => window.removeEventListener("keydown", trap);
  }, []);

  function handleSelect(item: CatalogItem) {
    setQuery(item.title);
    pushRecent(item.title);
    onSelect?.(item);
  }

  const resultStyle: React.CSSProperties = { height: "clamp(4.2rem, 11vh, 9.9rem)" };
  const avatarStyle: React.CSSProperties = { width: "clamp(3.2rem, 8.6vh, 6.6rem)", height: "clamp(3.2rem, 8.6vh, 6.6rem)" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* dialog */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 8, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative z-60 w-full max-w-[720px] sm:max-w-[640px] md:max-w-[900px] max-h-[90vh] rounded-3xl bg-white border border-white/40 shadow-xl p-4 mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Search row */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1">
            <FaSearch className="text-black/60 w-4 h-4" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(-1);
              }}
              placeholder="Search tests, packages, labs... e.g. 'vitamin d', 'cbc', 'full body'"
              className="flex-1 bg-transparent outline-none text-sm sm:text-base text-black placeholder-black/45"
              aria-label="Search tests and packages"
            />

            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setActiveIndex(-1);
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="p-2 rounded hover:bg-gray-100 transition"
              >
                <FaTimes className="text-black/70 w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-sm px-3 py-2 text-black/60 hover:text-black rounded-md hover:bg-gray-100 transition hidden xs:block"
          >
            Close
          </button>
        </div>

        {/* Filters & count */}
        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-full text-sm ${filter === "all" ? "bg-[#A5EB81] text-[#193200]" : "bg-gray-100 text-black"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("tests")}
              className={`px-3 py-1 rounded-full text-sm ${filter === "tests" ? "bg-[#A5EB81] text-[#193200]" : "bg-gray-100 text-black"}`}
            >
              Tests
            </button>
            <button
              onClick={() => setFilter("packages")}
              className={`px-3 py-1 rounded-full text-sm ${filter === "packages" ? "bg-[#A5EB81] text-[#193200]" : "bg-gray-100 text-black"}`}
            >
              Packages
            </button>
          </div>

          <div className="text-xs text-black/50">{loading ? "Searching..." : `${filtered.length} results`}</div>
        </div>

        {/* Recent when no query */}
        {!query && recent.length > 0 && (
          <div className="mt-3">
            <div className="text-xs text-black/60 mb-2">Recent</div>
            <div className="flex flex-wrap gap-2">
              {recent.map((r) => (
                <button
                  key={r}
                  onClick={() => setQuery(r)}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results list */}
        <div
          className="mt-3 overflow-auto max-h-[65vh] pr-2"
          ref={listRef}
          role="listbox"
          aria-activedescendant={activeIndex >= 0 ? `result-${activeIndex}` : undefined}
        >
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const cat = findCategory(item.title);
              return (
                <button
                  key={item.id}
                  data-idx={idx}
                  id={`result-${idx}`}
                  role="option"
                  aria-selected={idx === activeIndex}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  onClick={() => handleSelect(item)}
                  style={resultStyle}
                  className={`w-full text-left flex items-center justify-between p-3 rounded-lg mb-3 transition transform ${
                    idx === activeIndex ? "bg-black/5 scale-[1.001]" : "bg-gray-50 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 ${cat?.bg || "bg-white/10"}`}
                      style={avatarStyle}
                    >
                      {cat ? (
                        <img
                          src={cat.image}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="text-sm font-semibold text-black/80">{item.title?.[0]}</div>
                      )}
                    </div>

                    <div className="text-left max-w-[62%]">
                      <div className="text-lg text-black break-words">{highlight(item.title, query)}</div>
                      <div className="text-md text-black/60 mt-1 text-sm">Reports in: {item.reportsIn}</div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1">
                    <div className="text-lg sm:text-xl font-semibold">₹{item.offer}</div>
                    {item.discount && item.discount > 0 && <div className="text-sm text-[#16AB59]">{item.discount}% off</div>}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-sm text-black/50">No results. Try different keywords or check the popular searches above.</div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
