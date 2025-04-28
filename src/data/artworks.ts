
export interface Artwork {
  id: number;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  year: string;
  category: string;
  featured?: boolean;
}

export interface Artist {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Summer Bliss",
    artist: "Elena Montgomery",
    description: "An impressionist landscape capturing the vibrant colors of summer fields.",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    category: "Painting",
    featured: true
  },
  {
    id: 2,
    title: "Urban Solitude",
    artist: "Marcus Chen",
    description: "A photorealistic cityscape exploring themes of isolation in urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2022",
    category: "Photography"
  },
  {
    id: 3,
    title: "Fragments of Memory",
    artist: "Sofia Patel",
    description: "Abstract composition inspired by fragmented memories and dreams.",
    imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    category: "Mixed Media"
  },
  {
    id: 4,
    title: "Echoes of Silence",
    artist: "Elena Montgomery",
    description: "A minimalist exploration of negative space and subtle textures.",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2021",
    category: "Sculpture"
  },
  {
    id: 5,
    title: "Cosmic Dance",
    artist: "Marcus Chen",
    description: "Digital artwork inspired by celestial movements and cosmic patterns.",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    category: "Digital Art"
  },
  {
    id: 6,
    title: "Whispers of the Sea",
    artist: "Sofia Patel",
    description: "Abstract seascape capturing the essence of ocean movements.",
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2022",
    category: "Painting"
  },
  {
    id: 7,
    title: "Geometric Harmony",
    artist: "James Wilson",
    description: "Contemporary piece exploring balance through geometric forms.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    category: "Sculpture"
  },
  {
    id: 8,
    title: "Ethereal Light",
    artist: "James Wilson",
    description: "Light-based installation creating immersive spatial experiences.",
    imageUrl: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2022",
    category: "Installation"
  }
];

export const artists: Artist[] = [
  {
    id: 1,
    name: "Elena Montgomery",
    bio: "Elena Montgomery is a contemporary painter known for her vibrant landscapes and abstract compositions. Her work has been exhibited internationally, with permanent collections in major galleries across Europe and North America.",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Marcus Chen",
    bio: "Marcus Chen blends photography and digital manipulation to create surreal urban landscapes that challenge our perception of reality. His work has been featured in numerous publications and exhibitions worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sofia Patel",
    bio: "Sofia Patel is a multimedia artist whose work explores cultural identity and memory. She creates immersive installations that have been commissioned by major art institutions globally.",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "James Wilson",
    bio: "James Wilson is a sculptor and installation artist exploring the intersection of science, technology, and art. His geometric forms and light installations create unique spatial experiences for viewers.",
    imageUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];
