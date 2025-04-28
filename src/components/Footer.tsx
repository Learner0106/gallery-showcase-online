
import { GalleryVertical, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <GalleryVertical className="h-6 w-6 mr-2" />
              <span className="font-display text-lg">Artistry</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6 max-w-xs">
              A contemporary art gallery showcasing exceptional works from emerging and established artists.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div id="about">
            <h3 className="font-display text-lg mb-6">About Us</h3>
            <p className="text-primary-foreground/80 text-sm">
              Founded in 2020, Artistry is dedicated to promoting contemporary art through thoughtfully curated exhibitions, artist talks, and educational programs. We believe in the transformative power of art and its ability to inspire, challenge, and connect us.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground">Gallery</a>
              </li>
              <li>
                <a href="#artists" className="text-primary-foreground/80 hover:text-primary-foreground">Artists</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Exhibitions</a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Events</a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground">About</a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="font-display text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  123 Gallery Street<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">info@artistry.gallery</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-center text-primary-foreground/60">
            © {new Date().getFullYear()} Artistry Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
