import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";

const Shop = () => {
  const artworks = [
    { image: art1, title: "Autumn Bloom", artist: "Maria Chen", price: "$245", category: "Watercolor" },
    { image: art2, title: "Abstract Harmony", artist: "David Kumar", price: "$380", category: "Acrylic" },
    { image: art3, title: "Organic Form", artist: "Sophie Laurent", price: "$520", category: "Sculpture" },
    { image: art4, title: "Mandala Dreams", artist: "Rajesh Sharma", price: "$180", category: "Pen Art" },
    { image: art5, title: "Traditional Textile", artist: "Priya Mehta", price: "$295", category: "Craft" },
    { image: art6, title: "Golden Horizon", artist: "Elena Rodriguez", price: "$450", category: "Oil Painting" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Shop All Artworks</h1>
            <p className="text-muted-foreground">Discover unique handmade art from talented creators worldwide</p>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={index} {...artwork} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
