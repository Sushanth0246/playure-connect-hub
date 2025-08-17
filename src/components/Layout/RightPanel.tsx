import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const suggestedPeople = [
  {
    id: 1,
    name: "Alex Johnson",
    username: "alex.gaming",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
    mutualFriends: 3,
    isOnline: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    username: "sarah.dev",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
    mutualFriends: 7,
    isOnline: false
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    username: "mike.streams",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
    mutualFriends: 2,
    isOnline: true
  },
  {
    id: 4,
    name: "Emma Wilson",
    username: "emma.creative",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
    mutualFriends: 5,
    isOnline: false
  }
];

export const RightPanel = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-card border-l border-border p-4 overflow-y-auto">
      {/* User Profile */}
      <Card className="p-4 mb-6 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
          </div>
          <div>
            <h3 className="font-semibold">Your Username</h3>
            <p className="text-sm text-muted-foreground">@your.handle</p>
          </div>
        </div>
      </Card>

      {/* Suggested for you */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Connect with People</h2>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
            See All
          </Button>
        </div>

        <div className="space-y-3">
          {suggestedPeople.map((person) => (
            <Card key={person.id} className="p-3 hover:shadow-soft transition-smooth">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {person.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{person.name}</h4>
                    <p className="text-xs text-muted-foreground">@{person.username}</p>
                    <p className="text-xs text-muted-foreground">{person.mutualFriends} mutual friends</p>
                  </div>
                </div>
                <Button size="sm" className="bg-playure-gradient hover:shadow-medium transition-smooth">
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Activity */}
        <Card className="p-4 mt-6 shadow-soft">
          <h3 className="font-semibold mb-3 text-foreground">Recent Activity</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-playure-blue-light text-playure-blue-dark">
                Achievement
              </Badge>
              <span className="text-sm text-muted-foreground">You earned "Team Player"</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Online
              </Badge>
              <span className="text-sm text-muted-foreground">5 friends are active</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Event
              </Badge>
              <span className="text-sm text-muted-foreground">Gaming tournament tomorrow</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};