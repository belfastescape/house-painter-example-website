export type Service = {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
};

export const SERVICES: Service[] = [
  {
    id: "interior-painting",
    icon: "home",
    title: "Interior Painting",
    shortDescription:
      "From a single room refresh to a full-house repaint — careful preparation, neat lines and a finish that lasts.",
    fullDescription:
      "We handle every aspect of interior decoration, from moving furniture and laying dust sheets to applying multiple coats of premium paint. Whether you want a calming neutral or a bold feature wall, we work with you to achieve the exact look you're after. All surfaces are properly sanded, primed and prepped before a single drop of paint goes on.",
  },
  {
    id: "exterior-painting",
    icon: "building",
    title: "Exterior Painting",
    shortDescription:
      "Weather-resistant coatings applied properly, protecting your home and keeping it looking sharp for years.",
    fullDescription:
      "A professional exterior repaint does more than improve kerb appeal — it protects your home from the elements. We power wash, sand, fill cracks and prime all surfaces before applying specialist exterior coatings rated for the UK climate. From render and masonry to timber fascias and soffits, we cover it all.",
  },
  {
    id: "wallpapering",
    icon: "layers",
    title: "Wallpapering & Feature Walls",
    shortDescription:
      "Precision hanging with perfect seams — from standard rolls to bold statement patterns.",
    fullDescription:
      "Getting wallpaper right takes experience and patience. We hang all types — vinyls, textured papers, large-pattern feature walls and delicate lincrusta — with seams you genuinely can't find. We also strip existing wallpaper cleanly and prepare the walls so the new paper sits perfectly flat and lasts.",
  },
  {
    id: "fence-painting",
    icon: "fence",
    title: "Fence & Gate Painting",
    shortDescription:
      "Restore weathered fencing and gates with long-lasting timber treatment and paint.",
    fullDescription:
      "Fences and gates take a real battering from the weather. We clean, sand and treat all timber before applying your chosen stain or paint — leaving a finish that looks great and protects the wood for years. We also handle metal gates: wire-brushed, primed with rust-inhibitor and finished to a high standard.",
  },
  {
    id: "decorating-finishing",
    icon: "brush",
    title: "Decorating & Finishing",
    shortDescription:
      "Ceilings, coving, skirting boards and woodwork — the details that make a room feel complete.",
    fullDescription:
      "The finishing touches are what separates a professional job from a DIY attempt. We pay close attention to ceilings, coving, skirtings, door frames and all woodwork — sanding to a smooth finish, filling any imperfections and painting with a precision brush so every edge is perfectly straight. It's the kind of detail that makes a room feel genuinely finished.",
  },
  {
    id: "commercial-painting",
    icon: "office",
    title: "Commercial Painting",
    shortDescription:
      "Offices, retail units and commercial properties — flexible scheduling with minimal disruption.",
    fullDescription:
      "We work with local businesses and landlords to keep commercial properties looking their best. Jobs can be scheduled out of hours — evenings or weekends — so you're back to business first thing Monday morning. We're used to working in occupied buildings, taking care to protect stock, equipment and furnishings throughout.",
  },
];
