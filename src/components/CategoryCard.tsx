import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  count: number;
  icon: string;
}

const CategoryCard = ({ name, count, icon }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="p-6 text-center">
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {count} artworks
        </p>
      </div>
    </Card>
  );
};

export default CategoryCard;
