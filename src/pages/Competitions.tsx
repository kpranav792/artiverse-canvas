import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users } from "lucide-react";

const Competitions = () => {
  const competitions = [
    {
      title: "Global Abstract Art Challenge 2025",
      description: "Show us your best abstract artwork. Winners get featured on homepage and $500 prize.",
      status: "Open",
      deadline: "March 15, 2025",
      participants: 234,
      prize: "$500"
    },
    {
      title: "Nature & Wildlife Art Contest",
      description: "Celebrate the beauty of nature through your art. Top 3 winners receive cash prizes.",
      status: "Open",
      deadline: "April 20, 2025",
      participants: 189,
      prize: "$750"
    },
    {
      title: "Emerging Artists Showcase",
      description: "For artists with less than 2 years of professional experience. Get discovered!",
      status: "Coming Soon",
      deadline: "May 1, 2025",
      participants: 0,
      prize: "$300"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-accent/20 rounded-full">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Art Competitions</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Art Competitions & Awards</h1>
          <p className="text-muted-foreground">Showcase your talent and win exciting prizes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition, index) => (
            <Card key={index} className="hover:shadow-hover transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={competition.status === "Open" ? "default" : "secondary"}>
                    {competition.status}
                  </Badge>
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="font-serif">{competition.title}</CardTitle>
                <CardDescription>{competition.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Deadline: {competition.deadline}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {competition.participants} participants
                </div>
                <div className="text-lg font-semibold text-accent">
                  Prize: {competition.prize}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={competition.status !== "Open"}>
                  {competition.status === "Open" ? "Enter Competition" : "Coming Soon"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Competitions;
