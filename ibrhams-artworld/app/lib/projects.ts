export type Project = {
  slug: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  body: string[];
  tags: string[];
  year: string;
  location: string;
  medium: string;
};

export const projects: Project[] = [
  {
    slug: "portrait-painting",
    num: "01",
    category: "Fine Art",
    title: "Portrait Painting",
    tagline: "Not just a likeness. A record of someone alive.",
    description:
      "Custom portraits of individuals, families, couples, and pets. Oil, acrylic, or charcoal. Every commission is taken seriously — this is not a photocopy service, it is an interpretation of a person.",
    body: [
      "There is a long tradition of portraiture as an act of witnessing — of saying: this person existed, this person mattered. Ibrahim carries that tradition into every commission.",
      "Working from photo reference or live sitting, each portrait is an extended study of the subject. The goal is never photographic accuracy. It is emotional truth — the set of the jaw, the quality of light in the eyes, the particular way someone holds themselves when they think no one is watching.",
      "Commissions are available in oil on canvas, acrylic, charcoal on paper, and mixed media. Sizes from intimate A3 studies to large-format statement pieces. Families, couples, children, elders, and pets are all welcomed.",
      "The process typically involves an initial reference consultation, a sketch proof for approval, and then the full execution. Most commissions are completed within 3–6 weeks depending on scale and complexity.",
    ],
    tags: ["Oil", "Acrylic", "Charcoal", "Commission", "Family", "Pets"],
    year: "2017 — Present",
    location: "Lagos, Nigeria",
    medium: "Oil, Acrylic, Charcoal",
  },
  {
    slug: "interior-art-direction",
    num: "02",
    category: "Interior",
    title: "Interior Art Direction",
    tagline: "A room without considered art is just a room.",
    description:
      "Full art direction for residential and commercial interiors — wall colour consultation, custom canvas commissioning, art placement, and decorative surface treatments that unify a space.",
    body: [
      "Most interiors are designed from the floor up — flooring, furniture, fixtures. Art is an afterthought. Ibrahim works the other way: the art is the starting point, and everything else responds to it.",
      "The service covers everything from a single consultation to full ongoing collaboration with architects and interior designers. It includes colour palette development, sourcing and commissioning of original works, placement strategy, and bespoke wall treatments that blur the line between decoration and architecture.",
      "Past projects include Lekki penthouses, Ikoyi townhouses, Victoria Island restaurants and hotel lobbies, and corporate offices. Each space is treated as its own brief — there is no house style, only the style that is right for this room, this client, this life.",
      "The result is interiors that feel complete — not assembled, but composed. Spaces where the art and the architecture are in genuine conversation.",
    ],
    tags: ["Residential", "Commercial", "Colour Consult", "Curation", "Styling"],
    year: "2020 — Present",
    location: "Lagos, Nigeria",
    medium: "Mixed, Consultancy",
  },
  {
    slug: "exterior-facade-work",
    num: "03",
    category: "Exterior",
    title: "Exterior & Facade Work",
    tagline: "The outside of a building is its first and loudest statement.",
    description:
      "Painting, finishing, and decorative treatments for building exteriors, gates, compound walls, and outdoor architectural features. Engineered for Lagos weather.",
    body: [
      "In Lagos, a building's exterior does more than shelter — it speaks. To the street, to the neighbourhood, to anyone who passes. Ibrahim's exterior work treats every facade as a public statement worth making carefully.",
      "Projects range from residential compound wall paintings and decorative gate finishes to full commercial building facade treatments and branded exterior murals for businesses. The scope always includes both the aesthetic and the technical — surface preparation, primer selection, paint specification, and protective finishing are as important as the visual design.",
      "All exterior work uses paints and sealants rated for tropical climates. UV degradation, humidity, and rain exposure are accounted for at the materials stage, not as an afterthought. Most exterior treatments are guaranteed for a minimum of five years before any touch-up is needed.",
      "Gate and perimeter wall work is a speciality — often overlooked in the design process but one of the highest-impact visual opportunities on any property.",
    ],
    tags: ["Facade", "Gates", "Compound Walls", "Weatherproof", "Commercial"],
    year: "2018 — Present",
    location: "Lagos, Nigeria",
    medium: "Enamel, Masonry Paint, Sealant",
  },
  {
    slug: "decorative-finishing-plasterwork",
    num: "04",
    category: "Finishing",
    title: "Decorative Finishing & Plasterwork",
    tagline: "Texture is the thing paint alone cannot do.",
    description:
      "Venetian plaster, textured wall finishes, stucco, and ornamental plasterwork for spaces that want depth, warmth, and materiality beyond a painted surface.",
    body: [
      "Paint gives colour. Plaster gives presence. There is a tactile richness to a well-executed Venetian plaster finish or a hand-sculpted plaster detail that no painted wall — however beautifully coloured — can replicate.",
      "Ibrahim's decorative finishing work covers the full range: Venetian plaster in its traditional polished form and in contemporary matte and satin interpretations, textured finishes using aggregates and speciality compounds, lime wash for organic aged effects, and ornamental plasterwork for cornices, ceiling roses, feature niches, and architectural details.",
      "This service pairs naturally with the interior art direction offering — together they allow a space to be designed from the surface out, with every wall, ceiling, and architectural element considered as part of a unified composition.",
      "Work is available for residential and commercial projects. All plasterwork is applied by hand. No spray, no shortcuts.",
    ],
    tags: ["Venetian Plaster", "Texture", "Lime Wash", "Ornamental", "Luxury"],
    year: "2019 — Present",
    location: "Lagos, Nigeria",
    medium: "Plaster, Lime, Aggregate",
  },
  {
    slug: "digital-illustration-design",
    num: "05",
    category: "Digital",
    title: "Digital Illustration & Design",
    tagline: "The same eye. A different tool.",
    description:
      "Custom digital artwork for print, branding, events, and social media. Everything is created from scratch — no templates, no stock, no shortcuts.",
    body: [
      "The move to digital does not change the fundamental commitment: original work, made by hand (or stylus), for a specific purpose. Ibrahim's digital illustration practice runs parallel to the physical work — informed by the same instincts, the same cultural references, the same eye.",
      "Work in this category includes: editorial illustrations for publications and brands, visual identity systems and brand mark design, event posters and promotional graphics, social media campaign artwork, and print-ready artwork for merchandise, packaging, and signage.",
      "Afrofuturism is a recurring thread — work that takes traditional Yoruba, Igbo, and broader West African visual languages and recontextualises them in contemporary and speculative settings. It is not pastiche. It is lineage.",
      "All digital files are delivered print-ready at 300dpi in agreed formats. Licensing is discussed per project — options range from single-use to full buyout.",
    ],
    tags: ["Illustration", "Branding", "Print", "Social Media", "Afrofuturism"],
    year: "2018 — Present",
    location: "Remote / Lagos",
    medium: "Digital (Procreate, Illustrator)",
  },
  {
    slug: "paint-production",
    num: "06",
    category: "Production",
    title: "Paint Production",
    tagline: "The right colour, made from scratch.",
    description:
      "Custom paint mixing and production for residential, commercial, and industrial projects. Exact colour matching, bulk formulation, and specialty finishes unavailable off the shelf.",
    body: [
      "Most people settle for what is available in the tin. Ibrahim doesn't. The paint production service exists because the right colour — the exact right colour — is not always sitting on a shelf at a hardware store.",
      "The service covers custom colour matching from any reference (fabric, material sample, Pantone, RAL, or photograph), small and large batch mixing for residential and commercial projects, and specialty formulations including anti-mould, waterproofing additives, and textured compounds.",
      "For large exterior or commercial projects, this means consistent colour across every litre — no batch variation, no surprises halfway up a building. For interior clients, it means the specific warm cream or the precise terracotta that the standard range never quite nails.",
      "Paint production is also available as a standalone supply service for contractors, designers, and developers who need reliable custom colour at scale. Formulations are documented and replicable for future touch-ups.",
    ],
    tags: ["Custom Mix", "Colour Match", "Bulk Supply", "Specialty Finish", "Commercial"],
    year: "2021 — Present",
    location: "Lagos, Nigeria",
    medium: "Acrylic, Oil-Based, Specialty",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}