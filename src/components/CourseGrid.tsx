import CourseCard from "./CourseCard";
import { Badge } from "@/components/ui/badge";
import reactCourse from "@/assets/react-course.jpg";
import angularCourse from "@/assets/angular-course.jpg";
import nodejsCourse from "@/assets/nodejs-course.jpg";
import djangoCourse from "@/assets/django-course.jpg";
import pythonCourse from "@/assets/python-course.jpg";
import javaCourse from "@/assets/java-course.jpg";
import dockerCourse from "@/assets/docker-course.jpg";
import mobileCourse from "@/assets/mobile-course.jpg";

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
    thumbnail: javaCourse,
    price: 119,
    originalPrice: 249,
    rating: 4.8,
    ratingCount: 11234,
    duration: "42h",
    studentsCount: 56789,
    level: "Advanced" as const,
    category: "Backend"
  },
  {
    id: "9",
    title: "Python for Data Science & Machine Learning",
    instructor: "Dr. Amanda Foster",
    thumbnail: pythonCourse,
    price: 109,
    originalPrice: 229,
    rating: 4.9,
    ratingCount: 18765,
    duration: "38h",
    studentsCount: 89432,
    level: "Intermediate" as const,
    category: "Data Science"
  },
  {
    id: "10",
    title: "Docker & Kubernetes DevOps Bootcamp",
    instructor: "Marcus Williams",
    thumbnail: dockerCourse,
    price: 129,
    originalPrice: 279,
    rating: 4.8,
    ratingCount: 7845,
    duration: "45h",
    studentsCount: 23456,
    level: "Advanced" as const,
    category: "DevOps"
  },
  {
    id: "11",
    title: "React Native Mobile App Development",
    instructor: "Jessica Martinez",
    thumbnail: mobileCourse,
    price: 95,
    originalPrice: 199,
    rating: 4.7,
    ratingCount: 12876,
    duration: "30h",
    studentsCount: 45123,
    level: "Intermediate" as const,
    category: "Mobile"
  },
  {
    id: "12",
    title: "Full Stack Web Development with MERN",
    instructor: "Jason Taylor",
    thumbnail: reactCourse,
    price: 149,
    originalPrice: 299,
    rating: 4.9,
    ratingCount: 9654,
    duration: "55h",
    studentsCount: 34567,
    level: "Advanced" as const,
    category: "Full Stack"
  },
  {
    id: "13",
    title: "GraphQL with Apollo Server & Client",
    instructor: "Nina Patel",
    thumbnail: nodejsCourse,
    price: 89,
    originalPrice: 179,
    rating: 4.6,
    ratingCount: 5432,
    duration: "22h",
    studentsCount: 16789,
    level: "Intermediate" as const,
    category: "Backend"
  },
  {
    id: "14",
    title: "AWS Cloud Architecture Masterclass",
    instructor: "Chris Anderson",
    thumbnail: dockerCourse,
    price: 139,
    originalPrice: 289,
    rating: 4.8,
    ratingCount: 8901,
    duration: "48h",
    studentsCount: 27654,
    level: "Advanced" as const,
    category: "DevOps"
  },
  {
    id: "15",
    title: "Modern JavaScript ES6+ Complete Guide",
    instructor: "Rachel Green",
    thumbnail: reactCourse,
    price: 59,
    originalPrice: 129,
    rating: 4.7,
    ratingCount: 21456,
    duration: "25h",
    studentsCount: 78901,
    level: "Beginner" as const,
    category: "Frontend"
  },
  {
    id: "16",
    title: "MongoDB Database Administration",
    instructor: "Ahmed Hassan",
    thumbnail: nodejsCourse,
    price: 79,
    originalPrice: 169,
    rating: 4.5,
    ratingCount: 6789,
    duration: "20h",
    studentsCount: 19876,
    level: "Intermediate" as const,
    category: "Backend"
  },
  {
    id: "17",
    title: "Flutter Mobile Development Bootcamp",
    instructor: "Sophie Lee",
    thumbnail: mobileCourse,
    price: 99,
    originalPrice: 209,
    rating: 4.8,
    ratingCount: 10987,
    duration: "35h",
    studentsCount: 32145,
    level: "Intermediate" as const,
    category: "Mobile"
  },
  {
    id: "18",
    title: "PHP Laravel Framework Mastery",
    instructor: "Roberto Silva",
    thumbnail: djangoCourse,
    price: 75,
    originalPrice: 155,
    rating: 4.6,
    ratingCount: 8765,
    duration: "28h",
    studentsCount: 25431,
    level: "Intermediate" as const,
    category: "Backend"
  },
  {
    id: "19",
    title: "C# .NET Core Web API Development",
    instructor: "Anna Kowalski",
    thumbnail: javaCourse,
    price: 105,
    originalPrice: 219,
    rating: 4.7,
    ratingCount: 7234,
    duration: "40h",
    studentsCount: 18769,
    level: "Advanced" as const,
    category: "Backend"
  },
  {
    id: "20",
    title: "PostgreSQL Database Design & Optimization",
    instructor: "Samuel Davis",
    thumbnail: pythonCourse,
    price: 69,
    originalPrice: 149,
    rating: 4.5,
    ratingCount: 5643,
    duration: "18h",
    studentsCount: 14532,
    level: "Intermediate" as const,
    category: "Backend"
  },
  {
    id: "21",
    title: "Redis Caching & Performance Optimization",
    instructor: "Maya Johnson",
    thumbnail: dockerCourse,
    price: 65,
    originalPrice: 139,
    rating: 4.6,
    ratingCount: 4321,
    duration: "15h",
    studentsCount: 9876,
    level: "Advanced" as const,
    category: "Backend"
  },
  {
    id: "22",
    title: "Svelte & SvelteKit Modern Web Framework",
    instructor: "Oliver Brown",
    thumbnail: angularCourse,
    price: 79,
    originalPrice: 169,
    rating: 4.7,
    ratingCount: 6543,
    duration: "24h",
    studentsCount: 15432,
    level: "Intermediate" as const,
    category: "Frontend"
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