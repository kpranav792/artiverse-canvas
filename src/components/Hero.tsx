import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-art.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground mb-6 animate-fade-in-up">
          Discover Handmade Art<br />
          <span className="text-accent-foreground">from Real Artists Worldwide</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Where Creativity Finds Its Canvas
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for art, artist, or country..."
              className="w-full px-6 py-4 rounded-lg bg-card text-foreground shadow-elegant focus:outline-none focus:ring-2 focus:ring-primary pr-12"
            />
            <Button size="icon" variant="hero" className="absolute right-2 top-1/2 -translate-y-1/2">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg">
            Join as an Artist
          </Button>
          <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
            Shop Art
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
