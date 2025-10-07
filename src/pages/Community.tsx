import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Share2 } from "lucide-react";

const Community = () => {
  const posts = [
    {
      title: "5 Tips for Pricing Your Handmade Art",
      author: "Maria Chen",
      date: "March 1, 2025",
      excerpt: "Learn how to price your artwork fairly while valuing your time and skill...",
      likes: 234,
      comments: 45
    },
    {
      title: "Artist Spotlight: Journey of a Sculptor",
      author: "Sophie Laurent",
      date: "February 28, 2025",
      excerpt: "From clay to masterpiece - Sophie shares her creative process...",
      likes: 456,
      comments: 78
    },
    {
      title: "The Rise of Digital Art in 2025",
      author: "David Kumar",
      date: "February 25, 2025",
      excerpt: "Exploring how digital tools are transforming traditional art forms...",
      likes: 189,
      comments: 32
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Community Hub</h1>
          <p className="text-muted-foreground">Connect with artists, share stories, and learn from each other</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-hero text-primary-foreground">
            <CardHeader>
              <CardTitle>Share Your Story</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Inspire others with your creative journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="accent" className="w-full">Create Post</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Artist Interviews</CardTitle>
              <CardDescription>
                In-depth conversations with featured creators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Browse Interviews</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tutorials & Resources</CardTitle>
              <CardDescription>
                Learn new techniques and grow your skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Resources</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-foreground">Recent Posts</h2>
          
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-hover transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-serif mb-2">{post.title}</CardTitle>
                    <CardDescription>
                      By {post.author} • {post.date}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-accent transition-colors">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-accent transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
