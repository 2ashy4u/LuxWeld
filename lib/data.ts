// All marketing content for Luxury Welding lives here so it's easy to edit.

export type ServiceCategory = {
  slug: string;
  title: string;
  blurb: string;
  items: string[];
};

export const services: ServiceCategory[] = [
  {
    slug: "mobile-welding",
    title: "Mobile Welding",
    blurb: "We bring the welder to you — on-site, anywhere you need us.",
    items: [
      "On-site welding services",
      "Emergency welding repairs",
      "Job site welding",
      "Farm and ranch welding",
      "Industrial maintenance welding",
      "Commercial welding",
      "Residential welding",
      "After-hours and weekend service",
    ],
  },
  {
    slug: "welding-repairs",
    title: "Welding Repairs",
    blurb: "Fast, durable repairs that get your equipment back in service.",
    items: [
      "Trailer repairs",
      "Gate repairs",
      "Fence repairs",
      "Heavy equipment repairs",
      "Machinery repairs",
      "Cracked frame repairs",
      "Structural steel repairs",
      "Truck and fleet repairs",
      "Dumpster repairs",
      "Handrail repairs",
      "Stairs and platform repairs",
      "Pipe repairs",
      "Equipment reinforcement and modifications",
    ],
  },
  {
    slug: "fabrication-services",
    title: "Fabrication Services",
    blurb: "Custom metalwork built to spec, from brackets to BBQ pits.",
    items: [
      "Custom metal fabrication",
      "Structural steel fabrication",
      "Custom brackets and mounts",
      "Frames and supports",
      "Platforms and walkways",
      "Equipment modifications",
      "Custom tool racks",
      "Steel tables and workstations",
      "Metal signs and decorative pieces",
      "Fire pits and BBQ pits",
      "Security doors and window bars",
    ],
  },
  {
    slug: "trailer-services",
    title: "Trailer Services",
    blurb: "Complete trailer repair, reinforcement, and custom builds.",
    items: [
      "Trailer frame repair",
      "Tongue repair",
      "Axle reinforcement",
      "Coupler replacement",
      "Ramp repair",
      "Trailer modifications",
      "Custom trailer fabrication",
      "Utility trailer repair",
      "Flatbed trailer repair",
    ],
  },
  {
    slug: "gates-fencing-security",
    title: "Gates, Fencing & Security",
    blurb: "Secure your property with custom gates, fencing, and bars.",
    items: [
      "Gate fabrication",
      "Gate installation",
      "Gate repairs",
      "Fence repairs",
      "Security bars",
      "Custom fencing",
      "Ranch and livestock gates",
    ],
  },
  {
    slug: "structural-welding",
    title: "Structural Welding",
    blurb: "Beams, columns, platforms, and code-minded structural work.",
    items: [
      "Beams and columns",
      "Structural supports",
      "Pipe supports",
      "Platforms",
      "Mezzanines",
      "Handrails",
      "Staircases",
      "Building modifications",
    ],
  },
  {
    slug: "industrial-services",
    title: "Industrial Services",
    blurb: "Plant maintenance and production equipment repair you can rely on.",
    items: [
      "Equipment repair",
      "Plant maintenance",
      "Pipe welding",
      "Conveyor repairs",
      "Machinery modifications",
      "Production equipment repairs",
      "Shutdown maintenance work",
    ],
  },
  {
    slug: "agricultural-services",
    title: "Agricultural Services",
    blurb: "Keep your farm and ranch running with on-site repairs.",
    items: [
      "Tractor repairs",
      "Implement repairs",
      "Livestock equipment repairs",
      "Trailer repairs",
      "Irrigation equipment repairs",
      "Ranch gate repairs",
    ],
  },
  {
    slug: "specialty-welding",
    title: "Specialty Welding",
    blurb: "Aluminum, stainless, cast, and precision TIG specialists.",
    items: [
      "Aluminum welding",
      "Stainless steel welding",
      "Cast iron repairs",
      "Cast aluminum repairs",
      "Pipe welding",
      "Precision TIG welding",
    ],
  },
  {
    slug: "cutting-services",
    title: "Cutting Services",
    blurb: "Clean plasma and torch cutting for any metal job.",
    items: [
      "Plasma cutting",
      "Torch cutting",
      "Metal removal",
      "Custom plate cutting",
      "Demolition cutting",
    ],
  },
  {
    slug: "installation-services",
    title: "Installation Services",
    blurb: "Professional installation of fabricated and structural steel.",
    items: [
      "Equipment installation",
      "Handrail installation",
      "Gate installation",
      "Structural steel installation",
      "Custom fabrication installation",
    ],
  },
];

export const materials: string[] = [
  "Mild Steel",
  "Carbon Steel",
  "Stainless Steel",
  "Aluminum",
  "Cast Iron",
  "Cast Aluminum",
  "Pipe",
  "Tube",
  "Sheet Metal",
  "Plate Steel",
];

export const weldingProcesses: { name: string; code: string }[] = [
  { name: "MIG Welding", code: "GMAW" },
  { name: "TIG Welding", code: "GTAW" },
  { name: "Stick Welding", code: "SMAW" },
  { name: "Flux-Core Welding", code: "FCAW" },
];

export type PriceItem = {
  title: string;
  // Use "___" placeholders where the owner needs to fill in numbers.
  price?: string;
  details?: string[];
};

export const pricing: PriceItem[] = [
  {
    title: "Service Call Fee",
    price: "Starting at $___",
  },
  {
    title: "Mobile Welding Rate",
    price: "$___ per hour",
    details: ["Minimum charge: ___ hours"],
  },
  {
    title: "Shop Welding Rate",
    price: "$___ per hour",
  },
  {
    title: "Emergency Service",
    price: "Premium rate applies",
    details: ["Nights, weekends, holidays", "Prices will vary"],
  },
  {
    title: "Travel Charges",
    details: [
      "Local travel included within ___ miles",
      "Additional mileage charged after ___ miles",
    ],
  },
  {
    title: "Aluminum Welding",
    details: ["Additional charge due to specialized equipment and materials"],
  },
  {
    title: "Stainless Steel Welding",
    details: ["Additional charge due to specialized materials and consumables"],
  },
  {
    title: "TIG Welding",
    details: ["Premium rate applies for precision work"],
  },
  {
    title: "Materials",
    details: ["Steel, aluminum, hardware, and consumables billed separately"],
  },
  {
    title: "Fabrication Projects",
    details: ["Quoted per project"],
  },
  {
    title: "Structural Projects",
    details: ["Quoted per project"],
  },
  {
    title: "Large Commercial Jobs",
    details: ["Custom bid pricing"],
  },
  {
    title: "Two-Man Crew",
    details: ["Additional labor charges apply when required"],
  },
  {
    title: "Equipment Charges",
    details: [
      "Generator usage",
      "Lifting equipment",
      "Specialized tooling",
      "Cutting equipment",
    ],
  },
  {
    title: "Rush Service",
    details: ["Same day service available", "Expedited scheduling fee applies"],
  },
];

export const whyChooseUs: string[] = [
  "Mobile welding available",
  "Fast response times",
  "Licensed and insured",
  "Residential, commercial, and industrial work",
  "Free estimates",
  "Quality workmanship",
  "Emergency services available",
  "Satisfaction guaranteed",
];

export const quoteInfoNeeded: string[] = [
  "Photos of the project",
  "Measurements",
  "Material type",
  "Job location",
  "Desired completion date",
  "Whether mobile service is required",
];
