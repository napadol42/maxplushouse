// Static data for development — used when no database is connected.
// Replace with Prisma queries when PostgreSQL is set up.

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  category: string;
  location: string;
  concept: string;
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "The Void Residence",
    slug: "the-void-residence",
    description:
      "A striking monochromatic home that dissolves the boundary between interior and exterior space. Floor-to-ceiling glass panels frame curated views of the surrounding landscape, while raw concrete walls create a powerful sense of grounding. The design embraces negative space as its primary material.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
    category: "Exterior",
    location: "Bangkok, Thailand",
    concept:
      "Inspired by Japanese wabi-sabi philosophy, this residence celebrates imperfection and transience through honest use of materials and a restrained color palette.",
    featured: true,
    createdAt: "2025-11-15",
  },
  {
    id: "2",
    title: "Silhouette Loft",
    slug: "silhouette-loft",
    description:
      "An open-plan loft conversion that transforms a disused industrial warehouse into a refined living space. Double-height ceilings are punctuated by steel beams, creating rhythm and structure. The interplay of shadow and light throughout the day brings the space to life.",
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    category: "Interior",
    location: "Chiang Mai, Thailand",
    concept:
      "A study in contrasts — industrial heritage meets contemporary minimalism. Every detail serves a purpose, every void tells a story.",
    featured: true,
    createdAt: "2025-09-22",
  },
  {
    id: "3",
    title: "Monolith Pavilion",
    slug: "monolith-pavilion",
    description:
      "A meditative retreat pavilion set within a private garden. The structure is conceived as a single, sculptural volume — a concrete monolith that appears to float above a reflecting pool. Inside, the space is pared back to its essence: light, air, and silence.",
    coverImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80",
    ],
    category: "Minimalist",
    location: "Phuket, Thailand",
    concept:
      "Architecture as meditation. The pavilion strips away the unnecessary, allowing inhabitants to reconnect with nature and self through spatial simplicity.",
    featured: true,
    createdAt: "2025-07-10",
  },
  {
    id: "4",
    title: "Linear House",
    slug: "linear-house",
    description:
      "A long, narrow residence that stretches across the landscape like a precise incision in the earth. The home is organized along a single axis, with rooms unfolding sequentially from public to private. A continuous skylight runs the length of the corridor, washing the interior in soft, diffused light.",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472572-8aba140f3cef?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
    ],
    category: "Exterior",
    location: "Hua Hin, Thailand",
    concept:
      "Linearity as a guiding principle — the home becomes a journey, a procession through carefully framed experiences of light and landscape.",
    featured: false,
    createdAt: "2025-05-03",
  },
  {
    id: "5",
    title: "Shadow Chamber",
    slug: "shadow-chamber",
    description:
      "A dramatic interior renovation for a collector of contemporary art. The space is intentionally moody — dark-toned walls, recessed lighting, and carefully controlled sightlines create a gallery-like atmosphere where every object becomes a focal point.",
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    ],
    category: "Interior",
    location: "Bangkok, Thailand",
    concept:
      "Darkness as a design medium. By controlling light rather than flooding it, we create spaces of intensity, focus, and contemplation.",
    featured: false,
    createdAt: "2025-03-18",
  },
  {
    id: "6",
    title: "Framework Villa",
    slug: "framework-villa",
    description:
      "A structural celebration where the skeleton of the building becomes its defining aesthetic. Exposed steel frames, cantilevered volumes, and transparent facades reveal the honest logic of construction. The villa exemplifies the maxim: less is more.",
    coverImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    category: "Minimalist",
    location: "Koh Samui, Thailand",
    concept:
      "Structure as ornament. By revealing what is typically hidden, the architecture achieves an honest beauty that transcends decoration.",
    featured: false,
    createdAt: "2025-01-25",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const cats = Array.from(new Set(projects.map((p) => p.category)));
  return ["All", ...cats];
}
