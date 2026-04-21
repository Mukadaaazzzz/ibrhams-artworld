export type GalleryItem = {
  src: string;
  category: "interior" | "exterior" | "mural" | "portrait";
  label: string;
};

export const featuredItems: GalleryItem[] = [
  { src: "/works/interior/int10.jpg", category: "interior", label: "Interior" },
  { src: "/works/interior/int16.jpg", category: "interior", label: "Interior" },
  { src: "/works/exterior/ext12.jpg", category: "exterior", label: "Exterior" },
  { src: "/works/exterior/ext9.jpg",  category: "exterior", label: "Exterior" },
  { src: "/works/murals/mur6.jpg",    category: "mural",    label: "Mural" },
  { src: "/works/murals/mur16.jpg",   category: "mural",    label: "Mural" },
  { src: "/works/portrait/port1.jpg", category: "portrait", label: "Portrait" },
  { src: "/works/portrait/port2.jpg", category: "portrait", label: "Portrait" },
];

export const allItems: GalleryItem[] = [
  // Interior — int1 to int31
  ...Array.from({ length: 31 }, (_, i) => ({
    src: `/works/interior/int${i + 1}.jpg`,
    category: "interior" as const,
    label: "Interior",
  })),
  // Exterior — ext1 to ext22
  ...Array.from({ length: 22 }, (_, i) => ({
    src: `/works/exterior/ext${i + 1}.jpg`,
    category: "exterior" as const,
    label: "Exterior",
  })),
  // Murals — mur1 to mur29
  ...Array.from({ length: 29 }, (_, i) => ({
    src: `/works/murals/mur${i + 1}.jpg`,
    category: "mural" as const,
    label: "Mural",
  })),
  // Portrait — port1 to port3
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/works/portrait/port${i + 1}.jpg`,
    category: "portrait" as const,
    label: "Portrait",
  })),
];