import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-foreground">AW</span>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">ArtisanWave</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Where creativity finds its canvas. Connecting artists with art lovers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Browse Art</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/artists" className="text-muted-foreground hover:text-primary transition-colors">Featured Artists</Link></li>
              <li><Link to="/competitions" className="text-muted-foreground hover:text-primary transition-colors">Competitions</Link></li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">For Artists</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Join as Artist</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Artist Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sell Your Art</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ArtisanWave. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
