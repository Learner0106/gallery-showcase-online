
import { useState, useEffect } from 'react';
import { GalleryVertical, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <GalleryVertical className="h-6 w-6 mr-2 text-accent" />
          <span className="font-display text-lg font-medium">Artistry</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#gallery" className="text-sm hover:text-accent transition-colors">Gallery</a>
          <a href="#artists" className="text-sm hover:text-accent transition-colors">Artists</a>
          <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-accent/10"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#gallery" 
              className="px-4 py-2 text-sm hover:bg-accent/10 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#artists" 
              className="px-4 py-2 text-sm hover:bg-accent/10 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Artists
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-sm hover:bg-accent/10 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-sm hover:bg-accent/10 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
