import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  const categories = [
    { name: "Painting", count: 1243, icon: "🎨" },
    { name: "Sculpture", count: 567, icon: "🗿" },
    { name: "Pen Art", count: 892, icon: "✒️" },
    { name: "Craft", count: 1456, icon: "🧵" },
    { name: "Digital Art", count: 723, icon: "💻" },
    { name: "Mandala", count: 389, icon: "🌸" },
    { name: "Abstract", count: 634, icon: "🎭" },
    { name: "Nature Art", count: 821, icon: "🌿" },
    { name: "Portrait", count: 445, icon: "👤" },
    { name: "Mixed Media", count: 298, icon: "🖌️" },
    { name: "Photography", count: 512, icon: "📷" },
    { name: "Textile Art", count: 367, icon: "🧶" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Browse by Category</h1>
          <p className="text-muted-foreground">Explore diverse art forms from talented creators around the world</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
