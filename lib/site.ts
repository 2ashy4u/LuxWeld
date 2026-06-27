// Central site configuration. Update these values with real business details.
export const site = {
  name: "Luxury Welding",
  shortName: "Luxury Welding",
  tagline: "Mobile Welding • Fabrication • Repairs",
  description:
    "Luxury Welding offers mobile and shop welding, custom fabrication, structural, trailer, gate, industrial, and agricultural welding services. Fast response, free estimates, licensed and insured.",
  // TODO: replace with real contact details
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "info@luxurywelding.com",
  emailHref: "mailto:info@luxurywelding.com",
  serviceArea: "Your City & surrounding areas",
  hours: "Mon–Sat with after-hours & weekend emergency service",
  // Social links (optional)
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Get a Quote", href: "/contact" },
] as const;
