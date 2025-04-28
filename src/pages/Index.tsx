
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GalleryGrid from '@/components/GalleryGrid';
import ArtistSpotlight from '@/components/ArtistSpotlight';
import Footer from '@/components/Footer';
import { artworks, artists } from '@/data/artworks';

const Index = () => {
  // Get featured artwork and artist
  const featuredArtwork = artworks.find(artwork => artwork.featured) || artworks[0];
  const featuredArtist = artists.find(artist => artist.featured) || artists[0];

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection artwork={featuredArtwork} />
      <GalleryGrid artworks={artworks} />
      <ArtistSpotlight artist={featuredArtist} />
      <Footer />
    </div>
  );
};

export default Index;
