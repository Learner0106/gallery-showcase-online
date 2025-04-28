
import { useEffect, useState } from 'react';
import { Artwork } from '../data/artworks';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  artwork: Artwork;
}

const HeroSection: React.FC<HeroSectionProps> = ({ artwork }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${artwork.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      <div className="relative container mx-auto h-full flex flex-col justify-end pb-24 px-4 z-10">
        <div className={`max-w-lg transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white/80 mb-2 text-sm">Featured Work</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display mb-4">{artwork.title}</h1>
          <p className="text-white/90 mb-2">{artwork.artist}</p>
          <p className="text-white/70 mb-6 max-w-md">{artwork.description}</p>
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-foreground transition-all"
          >
            View Artwork
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;
