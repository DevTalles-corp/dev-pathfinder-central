import CourseCard from "./CourseCard";
import { Badge } from "@/components/ui/badge";
import reactCourse from "@/assets/react-course.jpg";
import angularCourse from "@/assets/angular-course.jpg";
import nodejsCourse from "@/assets/nodejs-course.jpg";
import djangoCourse from "@/assets/django-course.jpg";

const courseCategories = [
  "All", "Frontend", "Backend", "Full Stack", "Mobile", "DevOps", "Data Science"
];

const mockCourses = [
  {
    id: "1",
    title: "Complete React Developer Course 2024",
    instructor: "Sarah Johnson",
    thumbnail: reactCourse,
    price: 89,
    originalPrice: 199,
    rating: 4.8,
    ratingCount: 12453,
    duration: "24h",
    studentsCount: 45678,
    level: "Intermediate" as const,
    category: "Frontend"
  },
  {
    id: "2", 
    title: "Angular - The Complete Guide",
    instructor: "Michael Chen",
    thumbnail: angularCourse,
    price: 79,
    originalPrice: 159,
    rating: 4.7,
    ratingCount: 8932,
    duration: "18h",
    studentsCount: 23456,
    level: "Beginner" as const,
    category: "Frontend"
  },
  {
    id: "3",
    title: "Node.js & Express Masterclass",
    instructor: "David Rodriguez",
    thumbnail: nodejsCourse,
    price: 95,
    originalPrice: 189,
    rating: 4.9,
    ratingCount: 15678,
    duration: "32h",
    studentsCount: 67890,
    level: "Intermediate" as const,
    category: "Backend"
  },
  {
    id: "4",
    title: "Django REST Framework Complete Course",
    instructor: "Emily Zhang",
    thumbnail: djangoCourse,
    price: 85,
    originalPrice: 175,
    rating: 4.6,
    ratingCount: 6543,
    duration: "28h",
    studentsCount: 34567,
    level: "Advanced" as const,
    category: "Backend"
  },
  {
    id: "5",
    title: "TypeScript for JavaScript Developers",
    instructor: "Alex Thompson",
    thumbnail: reactCourse,
    price: 69,
    originalPrice: 149,
    rating: 4.8,
    ratingCount: 9876,
    duration: "16h",
    studentsCount: 28934,
    level: "Intermediate" as const,
    category: "Frontend"
  },
  {
    id: "6",
    title: "Vue.js 3 Complete Course",
    instructor: "Lisa Park",
    thumbnail: angularCourse,
    price: 75,
    originalPrice: 165,
    rating: 4.7,
    ratingCount: 7654,
    duration: "20h", 
    studentsCount: 18765,
    level: "Beginner" as const,
    category: "Frontend"
  },
  {
    id: "7",
    title: "NestJS Advanced Backend Development",
    instructor: "Robert Kim",
    thumbnail: nodejsCourse,
    price: 99,
    originalPrice: 199,
    rating: 4.9,
    ratingCount: 4321,
    duration: "35h",
    studentsCount: 12456,
    level: "Advanced" as const,
    category: "Backend"
  },
  {
    id: "8",
    title: "Java Spring Boot Microservices",
    instructor: "Maria Garcia",
    thumbnail: djangoCourse,
    price: 119,
    originalPrice: 249,
    rating: 4.8,
    ratingCount: 11234,
    duration: "42h",
    studentsCount: 56789,
    level: "Advanced" as const,
    category: "Backend"
  }
];

const CourseGrid = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our most popular tech courses and start your learning journey today
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {courseCategories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;