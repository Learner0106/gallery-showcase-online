
import { useState } from 'react';
import { Artwork } from '../data/artworks';

interface GalleryGridProps {
  artworks: Artwork[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ artworks }) => {
  const [filter, setFilter] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(artworks.map(artwork => artwork.category))];
  
  // Filter artworks based on selected category
  const filteredArtworks = filter === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Explore Our Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a curated selection of contemporary artworks spanning various mediums and styles.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category 
                  ? 'bg-accent text-white' 
                  : 'bg-background hover:bg-accent/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="image-container rounded-lg overflow-hidden shadow-md bg-white">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title} 
                className="w-full h-80 object-cover"
              />
              <div className="artwork-overlay">
                <div className="text-white">
                  <h3 className="font-display text-xl">{artwork.title}</h3>
                  <p className="text-white/80">{artwork.artist}</p>
                  <p className="text-sm text-white/70">{artwork.year} • {artwork.category}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-medium">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">{artwork.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
