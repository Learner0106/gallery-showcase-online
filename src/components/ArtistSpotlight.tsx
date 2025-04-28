
import { Artist } from '../data/artworks';
import { ChevronRight } from 'lucide-react';

interface ArtistSpotlightProps {
  artist: Artist;
}

const ArtistSpotlight: React.FC<ArtistSpotlightProps> = ({ artist }) => {
  return (
    <section id="artists" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Featured Artist</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-accent/10 rounded-lg -z-10 transform rotate-3"></div>
            <img 
              src={artist.imageUrl} 
              alt={artist.name} 
              className="rounded-lg w-full h-auto shadow-md animate-image-float"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display">{artist.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {artist.bio}
            </p>
            
            <div className="pt-4">
              <a href="#" className="inline-flex items-center text-accent hover:text-accent/80 font-medium">
                View Artist Profile
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
