import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";

const Artists = () => {
  const artists = [
    { name: "Maria Chen", location: "Beijing, China", artworks: 47, specialty: "Watercolor Artist", featured: true },
    { name: "David Kumar", location: "Mumbai, India", artworks: 62, specialty: "Abstract Painter", featured: true },
    { name: "Sophie Laurent", location: "Paris, France", artworks: 35, specialty: "Sculptor" },
    { name: "Elena Rodriguez", location: "Barcelona, Spain", artworks: 51, specialty: "Oil Painter" },
    { name: "Rajesh Sharma", location: "Jaipur, India", artworks: 28, specialty: "Mandala Artist" },
    { name: "Priya Mehta", location: "Gujarat, India", artworks: 43, specialty: "Textile Crafter" },
    { name: "John Williams", location: "New York, USA", artworks: 56, specialty: "Digital Artist" },
    { name: "Yuki Tanaka", location: "Tokyo, Japan", artworks: 39, specialty: "Pen Artist" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Featured Artists</h1>
          <p className="text-muted-foreground">Meet talented creators from around the world sharing their unique vision</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <ArtistCard key={index} {...artist} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Artists;
