import { MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ArtistCardProps {
  name: string;
  location: string;
  artworks: number;
  specialty: string;
  featured?: boolean;
}

const ArtistCard = ({ name, location, artworks, specialty, featured }: ArtistCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300">
      <div className="p-6 text-center">
        <div className="relative inline-block mb-4">
          <Avatar className="h-20 w-20 border-4 border-primary/20">
            <AvatarFallback className="bg-gradient-hero text-2xl font-serif text-primary-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {featured && (
            <div className="absolute -top-1 -right-1 bg-accent text-accent-foreground rounded-full p-1.5">
              <Award className="h-4 w-4" />
            </div>
          )}
        </div>

        <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
        </div>

        <p className="text-sm text-primary font-medium mb-2">{specialty}</p>
        <p className="text-xs text-muted-foreground mb-4">{artworks} artworks</p>

        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          View Gallery
        </Button>
      </div>
    </Card>
  );
};

export default ArtistCard;
