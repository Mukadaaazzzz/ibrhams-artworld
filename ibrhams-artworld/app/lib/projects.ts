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
    slug: "art-portraiture",
    num: "01",
    category: "Fine Art",
    title: "Art & Portraiture",
    tagline: "Not just a likeness. A record of someone alive.",
    description:
      "Custom portraits, original paintings, and commissioned artwork — individuals, families, pets, or abstract compositions. Oil, acrylic, charcoal, or mixed media. Every commission is taken seriously.",
    body: [
      "There is a long tradition of portraiture as an act of witnessing — of saying: this person existed, this person mattered. Ibrahim carries that tradition into every commission.",
      "Working from photo reference or live sitting, each portrait is an extended study of the subject. The goal is never photographic accuracy. It is emotional truth — the set of the jaw, the quality of light in the eyes, the particular way someone holds themselves when they think no one is watching.",
      "Commissions are available in oil on canvas, acrylic, charcoal on paper, and mixed media. Sizes from intimate A3 studies to large-format statement pieces. Families, couples, children, elders, and pets are all welcomed.",
      "The process typically involves an initial reference consultation, a sketch proof for approval, and then the full execution. Most commissions are completed within 3–6 weeks depending on scale and complexity.",
    ],
    tags: ["Oil Painting", "Acrylic", "Charcoal", "Mixed Media", "Commission"],
    year: "2017 — Present",
    location: "Lagos, Nigeria",
    medium: "Oil, Acrylic, Charcoal, Mixed Media",
  },
  {
    slug: "professional-painting",
    num: "02",
    category: "Painting",
    title: "Professional Painting",
    tagline: "Every surface tells a story. Make yours count.",
    description:
      "High-standard interior and exterior painting for residential, commercial, and industrial spaces. Flawless finishes, proper surface preparation, and results built to last.",
    body: [
      "Professional painting is not simply the application of paint. It begins long before a brush touches a wall — with surface assessment, cleaning, filling, sanding, and priming. The finish is only as good as the preparation beneath it.",
      "Ibrahim's painting work covers the full scope: residential rooms and full homes, commercial offices and retail spaces, industrial warehouses and facilities, and everything in between. Each project is approached with the same standard regardless of scale.",
      "Material selection matters enormously. The right paint for a humid Lagos bathroom is different from the right paint for a high-traffic office corridor or an exposed exterior wall. These decisions are made deliberately, not by habit.",
      "Every project is finished with care — clean edges, consistent sheen, no drips, no missed spots. The kind of finish that holds up for years and reflects well on everyone involved.",
    ],
    tags: ["Interior", "Exterior", "Industrial", "Commercial", "Residential"],
    year: "2014 — Present",
    location: "Lagos, Nigeria",
    medium: "Emulsion, Gloss, Enamel, Masonry",
  },
  {
    slug: "screeding-floor-levelling",
    num: "03",
    category: "Flooring",
    title: "Screeding & Floor Levelling",
    tagline: "Everything above the floor depends on what is beneath it.",
    description:
      "Professional floor screeding, self-levelling compounds, and substrate preparation. Creating perfectly flat, smooth surfaces ready for tiling, polishing, or any floor finish.",
    body: [
      "A floor that is not level is a problem that never goes away. Tiles crack. Joints open. Finishes fail prematurely. Screeding done properly eliminates these problems before they start.",
      "Ibrahim's screeding work covers traditional sand and cement screed, self-levelling compounds for fast turnaround projects, and concrete substrate preparation for industrial and commercial floors. Each application is chosen based on the substrate condition, the final finish required, and the timeline.",
      "The work is precise. Levels are checked continuously during application, not just at the end. Expansion joints are placed correctly. Curing times are respected. There are no shortcuts that a floor will not eventually expose.",
      "This service is frequently paired with the surface treatment and decorative finishing offerings — creating a complete floor-to-wall solution for new builds and renovation projects alike.",
    ],
    tags: ["Floor Screed", "Self-Levelling", "Substrate Prep", "Concrete Finish"],
    year: "2016 — Present",
    location: "Lagos, Nigeria",
    medium: "Sand & Cement, Self-Levelling Compound",
  },
  {
    slug: "surface-treatment",
    num: "04",
    category: "Treatment",
    title: "Surface Treatment",
    tagline: "The foundation everything else rests on.",
    description:
      "Comprehensive surface preparation and finishing — cleaning, priming, sealing, and protective coatings for walls, floors, concrete, metal, and wood surfaces.",
    body: [
      "Surface treatment is the work that most people never see — and the work that determines whether everything else holds. A coating applied to an unprepared surface will fail. It is not a question of if, but when.",
      "The service covers the full range of surface conditions: new plaster that needs sealing before painting, old walls with adhesion problems, concrete floors requiring densification, metal surfaces needing rust treatment and primer, and timber requiring appropriate preparation for the finish above.",
      "Protective coating specification is a particular area of expertise — selecting the right sealer, primer, or treatment for the specific surface, environment, and top finish involved. In Lagos, where heat, humidity, and rain place real demands on surfaces, this knowledge matters.",
      "Surface treatment is available as a standalone service or as part of a larger project scope. It is always the first conversation on any new project.",
    ],
    tags: ["Priming", "Sealing", "Protective Coatings", "Prep Work", "Restoration"],
    year: "2014 — Present",
    location: "Lagos, Nigeria",
    medium: "Primers, Sealers, Protective Coatings",
  },
  {
    slug: "decorative-finishing-plasterwork",
    num: "05",
    category: "Finishing",
    title: "Decorative Finishing & Plasterwork",
    tagline: "Texture is the thing paint alone cannot do.",
    description:
      "Textured wall finishes, Venetian plaster, stucco, polished plaster, and ornamental plasterwork for spaces that demand character and craftsmanship.",
    body: [
      "Paint gives colour. Plaster gives presence. There is a tactile richness to a well-executed Venetian plaster finish or a hand-sculpted plaster detail that no painted wall — however beautifully coloured — can replicate.",
      "Ibrahim's decorative finishing work covers the full range: Venetian plaster in its traditional polished form and in contemporary matte and satin interpretations, textured finishes using aggregates and speciality compounds, lime wash for organic aged effects, and ornamental plasterwork for cornices, ceiling roses, feature niches, and architectural details.",
      "This service pairs naturally with the interior art direction offering — together they allow a space to be designed from the surface out, with every wall, ceiling, and architectural element considered as part of a unified composition.",
      "Work is available for residential and commercial projects. All plasterwork is applied by hand. No spray, no shortcuts.",
    ],
    tags: ["Venetian Plaster", "Texture", "Stucco", "Ornamental", "Luxury Finish"],
    year: "2019 — Present",
    location: "Lagos, Nigeria",
    medium: "Plaster, Lime, Aggregate, Stucco",
  },
  {
    slug: "interior-art-direction",
    num: "06",
    category: "Interior",
    title: "Interior Art Direction",
    tagline: "A room without considered art is just a room.",
    description:
      "Holistic space curation — wall colour consultation, art placement, custom canvases, surface treatments, and visual identity that ties every room together.",
    body: [
      "Most interiors are designed from the floor up — flooring, furniture, fixtures. Art is an afterthought. Ibrahim works the other way: the art is the starting point, and everything else responds to it.",
      "The service covers everything from a single consultation to full ongoing collaboration with architects and interior designers. It includes colour palette development, sourcing and commissioning of original works, placement strategy, and bespoke wall treatments that blur the line between decoration and architecture.",
      "Past projects include Lekki penthouses, Ikoyi townhouses, Victoria Island restaurants and hotel lobbies, and corporate offices. Each space is treated as its own brief — there is no house style, only the style that is right for this room, this client, this life.",
      "The result is interiors that feel complete — not assembled, but composed. Spaces where the art and the architecture are in genuine conversation.",
    ],
    tags: ["Colour Consult", "Wall Art", "Styling", "Space Curation", "Visual Identity"],
    year: "2020 — Present",
    location: "Lagos, Nigeria",
    medium: "Mixed, Consultancy",
  },
  {
    slug: "exterior-facade-work",
    num: "07",
    category: "Exterior",
    title: "Exterior & Facade Work",
    tagline: "The outside of a building is its first and loudest statement.",
    description:
      "Weather-resistant painting, finishing, and decorative treatments for building exteriors, gates, compound walls, and outdoor architectural features.",
    body: [
      "In Lagos, a building's exterior does more than shelter — it speaks. To the street, to the neighbourhood, to anyone who passes. Ibrahim's exterior work treats every facade as a public statement worth making carefully.",
      "Projects range from residential compound wall paintings and decorative gate finishes to full commercial building facade treatments and branded exterior murals for businesses. The scope always includes both the aesthetic and the technical — surface preparation, primer selection, paint specification, and protective finishing are as important as the visual design.",
      "All exterior work uses paints and sealants rated for tropical climates. UV degradation, humidity, and rain exposure are accounted for at the materials stage, not as an afterthought. Most exterior treatments are guaranteed for a minimum of five years before any touch-up is needed.",
      "Gate and perimeter wall work is a speciality — often overlooked in the design process but one of the highest-impact visual opportunities on any property.",
    ],
    tags: ["Facade", "Gates", "Compound Walls", "Weatherproof", "Durable Finish"],
    year: "2018 — Present",
    location: "Lagos, Nigeria",
    medium: "Enamel, Masonry Paint, Sealant",
  },
  {
    slug: "paint-production",
    num: "08",
    category: "Production",
    title: "Paint Production & Colour Matching",
    tagline: "The right colour, made from scratch.",
    description:
      "Custom paint mixing and precise colour matching for any project — residential, commercial, or industrial. The exact colour you envision, made from scratch.",
    body: [
      "Most people settle for what is available in the tin. Ibrahim doesn't. The paint production service exists because the right colour — the exact right colour — is not always sitting on a shelf at a hardware store.",
      "The service covers custom colour matching from any reference (fabric, material sample, Pantone, RAL, or photograph), small and large batch mixing for residential and commercial projects, and specialty formulations including anti-mould, waterproofing additives, and textured compounds.",
      "For large exterior or commercial projects, this means consistent colour across every litre — no batch variation, no surprises halfway up a building. For interior clients, it means the specific warm cream or the precise terracotta that the standard range never quite nails.",
      "Paint production is also available as a standalone supply service for contractors, designers, and developers who need reliable custom colour at scale. Formulations are documented and replicable for future touch-ups.",
    ],
    tags: ["Custom Mix", "Colour Match", "Bulk Supply", "Commercial", "Eco Options"],
    year: "2021 — Present",
    location: "Lagos, Nigeria",
    medium: "Acrylic, Oil-Based, Specialty",
  },
  {
    slug: "digital-illustration-design",
    num: "09",
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
    tags: ["Illustration", "Branding", "Print", "Social Content", "Digital Art"],
    year: "2018 — Present",
    location: "Remote / Lagos",
    medium: "Digital (Procreate, Illustrator)",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}