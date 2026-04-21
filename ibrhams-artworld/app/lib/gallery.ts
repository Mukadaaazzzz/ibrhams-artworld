export type GalleryItem = {
  src: string;
  category: "interior" | "exterior" | "mural" | "portrait";
  label: string;
};

export const featuredItems: GalleryItem[] = [
  { src: "/works/interior/int10.jpeg", category: "interior", label: "Interior" },
  { src: "/works/interior/int16.jpeg", category: "interior", label: "Interior" },
  { src: "/works/exterior/ext12.jpeg", category: "exterior", label: "Exterior" },
  { src: "/works/exterior/ext9.jpeg",  category: "exterior", label: "Exterior" },
  { src: "/works/murals/mur6.jpeg",    category: "mural",    label: "Mural"    },
  { src: "/works/murals/mur16.jpeg",   category: "mural",    label: "Mural"    },
  { src: "/works/portrait/port3.jpg",  category: "portrait", label: "Portrait" },
  { src: "/works/portrait/port2.jpg",  category: "portrait", label: "Portrait" },
];

export const allItems: GalleryItem[] = [
  ...Array.from({ length: 31 }, (_, i): GalleryItem => ({
    src: `/works/interior/int${i + 1}.jpeg`,
    category: "interior",
    label: "Interior",
  })),
  ...Array.from({ length: 22 }, (_, i): GalleryItem => ({
    src: `/works/exterior/ext${i + 1}.jpeg`,
    category: "exterior",
    label: "Exterior",
  })),
  ...Array.from({ length: 29 }, (_, i): GalleryItem => ({
    src: `/works/murals/mur${i + 1}.jpeg`,
    category: "mural",
    label: "Mural",
  })),
  ...Array.from({ length: 3 }, (_, i): GalleryItem => ({
    src: `/works/portrait/port${i + 1}.jpg`,
    category: "portrait",
    label: "Portrait",
  })),
];