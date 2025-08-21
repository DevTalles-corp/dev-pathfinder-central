import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Master Tech Skills with 
          <span className="block text-primary-glow">Expert-Led Courses</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Learn from industry professionals and advance your career with our comprehensive programming courses
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full pl-10 pr-4 py-3 rounded-lg border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Explore Courses
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white/80">Expert Courses</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15K+</div>
            <div className="text-white/80">Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">4.8★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;