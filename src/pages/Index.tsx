import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtworkCard from "@/components/ArtworkCard";
import CategoryCard from "@/components/CategoryCard";
import ArtistCard from "@/components/ArtistCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";

const Index = () => {
  const featuredArtworks = [
    { image: art1, title: "Autumn Bloom", artist: "Maria Chen", price: "$245", category: "Watercolor" },
    { image: art2, title: "Abstract Harmony", artist: "David Kumar", price: "$380", category: "Acrylic" },
    { image: art3, title: "Organic Form", artist: "Sophie Laurent", price: "$520", category: "Sculpture" },
    { image: art4, title: "Mandala Dreams", artist: "Rajesh Sharma", price: "$180", category: "Pen Art" },
    { image: art5, title: "Traditional Textile", artist: "Priya Mehta", price: "$295", category: "Craft" },
    { image: art6, title: "Golden Horizon", artist: "Elena Rodriguez", price: "$450", category: "Oil Painting" },
  ];

  const categories = [
    { name: "Painting", count: 1243, icon: "🎨" },
    { name: "Sculpture", count: 567, icon: "🗿" },
    { name: "Pen Art", count: 892, icon: "✒️" },
    { name: "Craft", count: 1456, icon: "🧵" },
    { name: "Digital Art", count: 723, icon: "💻" },
    { name: "Mandala", count: 389, icon: "🌸" },
  ];

  const featuredArtists = [
    { name: "Maria Chen", location: "Beijing, China", artworks: 47, specialty: "Watercolor Artist", featured: true },
    { name: "David Kumar", location: "Mumbai, India", artworks: 62, specialty: "Abstract Painter", featured: true },
    { name: "Sophie Laurent", location: "Paris, France", artworks: 35, specialty: "Sculptor" },
    { name: "Elena Rodriguez", location: "Barcelona, Spain", artworks: 51, specialty: "Oil Painter" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Featured Artworks Section */}
      <section className="py-16 px-4 container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-2">Featured Artworks</h2>
            <p className="text-muted-foreground">Handpicked pieces from talented artists worldwide</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredArtworks.map((artwork, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">Explore diverse art forms from around the world</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 px-4 container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-accent/20 rounded-full">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Featured Artists</span>
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground mb-2">Meet Our Talented Creators</h2>
          <p className="text-muted-foreground">Artists who bring their unique vision to life</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredArtists.map((artist, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ArtistCard {...artist} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Explore All Artists
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Share Your Art with the World?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of artists selling their handmade creations on ArtisanWave
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" size="lg" className="bg-card text-foreground hover:bg-card/90">
              Start Selling Today
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
