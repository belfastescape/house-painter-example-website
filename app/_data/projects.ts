export type ProjectCategory = "Interior" | "Exterior" | "Commercial";

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cheadle-exterior",
    category: "Exterior",
    title: "Full exterior repaint",
    location: "Cheadle",
    description:
      "Render, woodwork and a statement front door brought back to life with premium exterior coatings.",
    image: "/images/project-exterior-blue-house.webp",
    imageAlt: "Freshly painted blue house exterior in Cheadle",
  },
  {
    id: "bramhall-feature",
    category: "Interior",
    title: "Living room feature wall",
    location: "Bramhall",
    description:
      "A bold accent wall that anchors a calm, modern living space — precisely cut with clean edges.",
    image: "/images/project-interior-blue-accent.webp",
    imageAlt: "Bold blue accent wall in a Bramhall living room",
  },
  {
    id: "marple-terrace",
    category: "Exterior",
    title: "Period terrace exterior",
    location: "Marple",
    description:
      "A characterful colour scheme with crisp hard-wearing masonry paint on a Victorian terrace.",
    image: "/images/project-exterior-porch.webp",
    imageAlt: "Painted Victorian terrace exterior in Marple",
  },
  {
    id: "hazel-grove-interior",
    category: "Interior",
    title: "Warm colour refresh",
    location: "Hazel Grove",
    description:
      "Two-tone walls in warm coral and ochre for a cheerful, productive home office.",
    image: "/images/project-feature-wall-orange.webp",
    imageAlt: "Warm coral feature wall in a Hazel Grove home office",
  },
  {
    id: "stockport-office",
    category: "Commercial",
    title: "Office repaint",
    location: "Stockport centre",
    description:
      "A full office redecoration completed out-of-hours — ready for Monday morning with zero disruption.",
    image: "/images/project-commercial-grey.webp",
    imageAlt: "Freshly painted commercial office in Stockport",
  },
  {
    id: "stockport-block",
    category: "Commercial",
    title: "Lettings block exterior",
    location: "Stockport",
    description:
      "A multi-storey rental block repainted to a tight landlord deadline, on budget and on schedule.",
    image: "/images/project-commercial-painters.webp",
    imageAlt: "Commercial painters working on a Stockport rental block exterior",
  },
];
