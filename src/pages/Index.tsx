import { Sidebar } from "@/components/Layout/Sidebar";
import { RightPanel } from "@/components/Layout/RightPanel";
import { MainFeed } from "@/components/Feed/MainFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-64 mr-80 min-h-screen">
        <div className="py-6 px-4">
          <MainFeed />
        </div>
      </div>
      
      {/* Right Panel */}
      <RightPanel />
    </div>
  );
};

export default Index;
