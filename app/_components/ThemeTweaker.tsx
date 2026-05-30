"use client";

import { useEffect, useState, useRef } from "react";
import styles from "@/app/_components/ThemeTweaker.module.css";

const STORE_KEY = "sp-tweaks-v1";
const DEFAULT_NAME = "Stockport Painting & Decorating";

const PALETTES = [
  { id: "1", label: "Stockport Blue",  dots: ["#1087e5", "#e9f4ff", "#7bc4ff"] },
  { id: "2", label: "Heritage Sage",   dots: ["#3f7d5a", "#eaeee7", "#9fc7b0"] },
  { id: "3", label: "Warm Clay",       dots: ["#c0612f", "#f4ede6", "#e9b894"] },
  { id: "4", label: "Charcoal & Amber",dots: ["#d98324", "#eef0f1", "#f1c181"] },
  { id: "5", label: "Ocean Teal",      dots: ["#0a9b8e", "#e0f5f3", "#6dd0c8"] },
  { id: "6", label: "Coral Sunset",    dots: ["#e84b20", "#fceee8", "#f4a389"] },
] as const;

type PaletteId = typeof PALETTES[number]["id"];

const FONTS = [
  { id: "1", label: "Satoshi",                sampleFamily: "system-ui, sans-serif" },
  { id: "2", label: "Clash Display",          sampleFamily: '"Clash Display", system-ui, sans-serif' },
  { id: "3", label: "Playfair Display",        sampleFamily: "Georgia, serif" },
  { id: "4", label: "Space Grotesk",          sampleFamily: '"Space Grotesk", system-ui, sans-serif' },
] as const;

type FontId = typeof FONTS[number]["id"];

interface TweakState {
  palette: PaletteId;
  font: FontId;
  name: string;
}

function loadState(): TweakState {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const s = JSON.parse(raw) as Partial<TweakState>;
      return {
        palette: (PALETTES.find((p) => p.id === s.palette) ? s.palette : "1") as PaletteId,
        font:    (FONTS.find((f) => f.id === s.font) ? s.font : "1") as FontId,
        name:    s.name || DEFAULT_NAME,
      };
    }
  } catch {}
  return { palette: "1", font: "1", name: DEFAULT_NAME };
}

function saveState(s: TweakState) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch {}
}

function applyPalette(id: PaletteId) {
  document.documentElement.setAttribute("data-palette", id);
}

function applyFont(id: FontId) {
  document.documentElement.setAttribute("data-fonts", id);
}

function applyName(name: string) {
  const clean = name.trim() || DEFAULT_NAME;
  document.querySelectorAll<HTMLElement>("[data-biz-name]").forEach((el) => {
    el.textContent = clean;
  });
}

const SlidersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" width="18" height="18">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="9" cy="6" r="2.4" fill="currentColor" stroke="none" />
    <circle cx="15" cy="12" r="2.4" fill="currentColor" stroke="none" />
    <circle cx="8" cy="18" r="2.4" fill="currentColor" stroke="none" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" width="20" height="20">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export function ThemeTweaker() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<TweakState>({ palette: "1", font: "1", name: DEFAULT_NAME });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const s = loadState();
    setState(s);
    applyPalette(s.palette);
    applyFont(s.font);
    applyName(s.name);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const update = (patch: Partial<TweakState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      saveState(next);
      if (patch.palette) applyPalette(patch.palette);
      if (patch.font)    applyFont(patch.font);
      if ("name" in patch) applyName(patch.name!);
      return next;
    });
  };

  const reset = () => {
    const defaults: TweakState = { palette: "1", font: "1", name: DEFAULT_NAME };
    setState(defaults);
    saveState(defaults);
    applyPalette("1");
    applyFont("1");
    applyName(DEFAULT_NAME);
    if (inputRef.current) inputRef.current.value = DEFAULT_NAME;
  };

  return (
    <div className={styles.tw}>
      {/* FAB */}
      <button
        className={styles.fab}
        onClick={() => setIsOpen(true)}
        aria-label="Open theme customiser"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <SlidersIcon />
        <span>Customise</span>
      </button>

      {/* Scrim */}
      {isOpen && (
        <div className={styles.scrim} onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}

      {/* Panel */}
      <div
        className={`${styles.panel} ${isOpen ? styles.open : ""}`}
        role="dialog"
        aria-label="Theme customiser"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className={styles.head}>
          <div className={styles.headTitle}>
            <strong>Customise template</strong>
            <span>Preview a look &amp; brand</span>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close customiser">
            <CloseIcon />
          </button>
        </div>

        {/* Business name */}
        <div className={styles.group}>
          <label className={styles.label} htmlFor="tw-name">Business name</label>
          <input
            ref={inputRef}
            id="tw-name"
            className={styles.input}
            type="text"
            maxLength={50}
            defaultValue={state.name}
            placeholder={DEFAULT_NAME}
            onChange={(e) => update({ name: e.target.value })}
          />
        </div>

        {/* Colour palettes */}
        <div className={styles.group}>
          <span className={styles.label}>Colour scheme</span>
          <div className={styles.palettes}>
            {PALETTES.map((p) => (
              <button
                key={p.id}
                className={`${styles.palette} ${state.palette === p.id ? styles.active : ""}`}
                onClick={() => update({ palette: p.id })}
                aria-pressed={state.palette === p.id}
                title={p.label}
              >
                <span className={styles.dots}>
                  {p.dots.map((c, i) => (
                    <i key={i} style={{ background: c }} />
                  ))}
                </span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Font pairings */}
        <div className={styles.group}>
          <span className={styles.label}>Typography</span>
          <div className={styles.fonts}>
            {FONTS.map((f) => (
              <button
                key={f.id}
                className={`${styles.font} ${state.font === f.id ? styles.active : ""}`}
                onClick={() => update({ font: f.id })}
                aria-pressed={state.font === f.id}
              >
                <span className={styles.fontAa} style={{ fontFamily: f.sampleFamily }}>Aa</span>
                <span className={styles.fontName}>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={styles.foot}>
          <span className={styles.note}>Saved on this device across all pages.</span>
          <button className={styles.reset} onClick={reset}>Reset to defaults</button>
        </div>
      </div>
    </div>
  );
}
