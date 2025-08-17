import { PostCard } from "./PostCard";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus, Image, Video, Smile } from "lucide-react";

const samplePosts = [
  {
    author: {
      name: "Vinuth Kumar",
      username: "vinuth_kumar_18",
      avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
      verified: true
    },
    content: {
      text: "Just completed my first marathon! The training was intense but totally worth it. Thanks to everyone who supported me along the way! 🏃‍♂️💪",
      image: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
      achievement: "Marathon Finisher"
    },
    engagement: {
      likes: 234,
      comments: 45,
      shares: 12
    },
    timestamp: "2h"
  },
  {
    author: {
      name: "Sarah Chen",
      username: "sarah.gaming",
      avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
      verified: false
    },
    content: {
      text: "New collaboration project launching next week! Excited to work with such talented people. Stay tuned for updates! 🚀",
    },
    engagement: {
      likes: 89,
      comments: 23,
      shares: 8
    },
    timestamp: "4h"
  },
  {
    author: {
      name: "Mike Rodriguez",
      username: "mike.creative",
      avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
      verified: true
    },
    content: {
      text: "Team building session was amazing today! Nothing beats good collaboration and shared goals. Looking forward to our next project together! 🎯",
      achievement: "Team Leader"
    },
    engagement: {
      likes: 156,
      comments: 34,
      shares: 19
    },
    timestamp: "6h"
  }
];

export const MainFeed = () => {
  return (
    <div className="flex-1 max-w-2xl mx-auto">
      {/* Create Post */}
      <Card className="p-4 mb-6 shadow-soft">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="flex-1 bg-muted rounded-full px-4 py-2 cursor-pointer hover:bg-secondary transition-smooth">
            <span className="text-muted-foreground">What's on your mind?</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-playure-blue-light hover:text-playure-blue-dark transition-smooth">
              <Image className="h-4 w-4" />
              Photo
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-playure-blue-light hover:text-playure-blue-dark transition-smooth">
              <Video className="h-4 w-4" />
              Video
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-playure-blue-light hover:text-playure-blue-dark transition-smooth">
              <Smile className="h-4 w-4" />
              Feeling
            </Button>
          </div>
          <Button className="bg-playure-gradient hover:shadow-medium transition-smooth">
            <Plus className="h-4 w-4 mr-2" />
            Post
          </Button>
        </div>
      </Card>

      {/* Posts */}
      <div className="space-y-4">
        {samplePosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};