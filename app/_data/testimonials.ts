export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  stars: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    quote:
      "James and his team redecorated our entire downstairs — hallway, lounge and kitchen. The prep work was meticulous, the finish is flawless and they left the place spotless every evening. We'd struggled to find a reliable decorator for years. We've found ours now.",
    name: "Sarah T.",
    location: "Cheadle Hulme",
    stars: 5,
  },
  {
    id: "mark",
    quote:
      "Had the full exterior done — render, fascias, soffits, front door, the lot. Really competitive quote and they stuck to it. The difference is remarkable. Three neighbours have already asked for their number.",
    name: "Mark D.",
    location: "Bramhall",
    stars: 5,
  },
  {
    id: "priya",
    quote:
      "I was nervous about a bold feature wall in the living room — a deep teal, floor to ceiling. They talked me through the prep and paint choices, and the result is exactly what I had in my head. Precise, professional and genuinely friendly.",
    name: "Priya K.",
    location: "Marple",
    stars: 5,
  },
];
