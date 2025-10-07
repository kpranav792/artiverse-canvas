import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card shadow-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="font-serif text-xl font-bold text-primary-foreground">AW</span>
            </div>
            <span className="font-serif text-2xl font-bold text-foreground">ArtisanWave</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">Shop</Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">Categories</Link>
            <Link to="/artists" className="text-foreground hover:text-primary transition-colors">Artists</Link>
            <Link to="/competitions" className="text-foreground hover:text-primary transition-colors">Competitions</Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors">Community</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="hero" size="sm" className="hidden md:inline-flex">
              Sell Your Art
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
