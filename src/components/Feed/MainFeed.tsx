import { PostCard } from "./PostCard";
import { Stories } from "./Stories";

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
      {/* Stories Section */}
      <Stories />

      {/* Posts */}
      <div className="space-y-4">
        {samplePosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};