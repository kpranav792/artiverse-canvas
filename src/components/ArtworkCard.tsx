import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ArtworkCardProps {
  image: string;
  title: string;
  artist: string;
  price: string;
  category: string;
}

const ArtworkCard = ({ image, title, artist, price, category }: ArtworkCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full h-9 w-9 shadow-card"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full shadow-card">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">by {artist}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button variant="hero" size="sm">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkCard;
