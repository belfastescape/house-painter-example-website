"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS, type ProjectCategory } from "@/app/_data/projects";
import { Icon } from "@/app/_components/Icon";
import styles from "@/app/_components/ProjectsGrid.module.css";

const FILTERS: Array<{ label: string; value: ProjectCategory | "All" }> = [
  { label: "All",        value: "All" },
  { label: "Interior",   value: "Interior" },
  { label: "Exterior",   value: "Exterior" },
  { label: "Commercial", value: "Commercial" },
];

export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Filters */}
        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              className={`${styles.filter} ${active === value ? styles.filterActive : ""}`}
              onClick={() => setActive(value)}
              aria-pressed={active === value}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageFigure}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.overlay} aria-hidden="true">
                  <span className={styles.viewLabel}>
                    <Icon name="arrow-right" size={18} />
                    View project
                  </span>
                </div>
              </div>

              <div className={styles.info}>
                <span className={styles.badge}>{project.category}</span>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.location}>
                  <Icon name="map-pin" size={13} />
                  {project.location}
                </p>
                <p className={styles.desc}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
