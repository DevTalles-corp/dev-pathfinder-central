import CourseCard from './CourseCard';
import { Badge } from '@/components/ui/badge';
import reactCourse from '@/assets/react-course.jpg';
import angularCourse from '@/assets/angular-course.jpg';
import nodejsCourse from '@/assets/nodejs-course.jpg';
import djangoCourse from '@/assets/django-course.jpg';
import pythonCourse from '@/assets/python-course.jpg';
import javaCourse from '@/assets/java-course.jpg';
import dockerCourse from '@/assets/docker-course.jpg';
import mobileCourse from '@/assets/mobile-course.jpg';

const courseCategories = [
  'All',
  'Frontend',
  'Backend',
  'Full Stack',
  'Mobile',
  'DevOps',
  'Data Science',
];

const mockCourses = [
  {
    id: '1',
    title: 'Complete React Developer Course 2024',
    instructor: 'Sarah Johnson',
    thumbnail: reactCourse,
    price: 89,
    originalPrice: 199,
    rating: 4.8,
    ratingCount: 12453,
    duration: '24h',
    studentsCount: 45678,
    level: 'Intermediate' as const,
    category: 'Frontend',
  },
  {
    id: '2',
    title: 'Angular Enterprise Applications Mastery',
    instructor: 'Michael Chen',
    thumbnail: angularCourse,
    price: 79,
    originalPrice: 159,
    rating: 4.7,
    ratingCount: 8932,
    duration: '18h',
    studentsCount: 23456,
    level: 'Beginner' as const,
    category: 'Frontend',
  },
  {
    id: '3',
    title: 'Node.js Microservices Architecture',
    instructor: 'David Rodriguez',
    thumbnail: nodejsCourse,
    price: 95,
    originalPrice: 189,
    rating: 4.9,
    ratingCount: 15678,
    duration: '32h',
    studentsCount: 67890,
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '4',
    title: 'Django REST API Development Pro',
    instructor: 'Emily Zhang',
    thumbnail: djangoCourse,
    price: 85,
    originalPrice: 175,
    rating: 4.6,
    ratingCount: 6543,
    duration: '28h',
    studentsCount: 34567,
    level: 'Advanced' as const,
    category: 'Backend',
  },
  {
    id: '5',
    title: 'Advanced TypeScript Patterns & Design',
    instructor: 'Alex Thompson',
    thumbnail: reactCourse,
    price: 69,
    originalPrice: 149,
    rating: 4.8,
    ratingCount: 9876,
    duration: '16h',
    studentsCount: 28934,
    level: 'Intermediate' as const,
    category: 'Frontend',
  },
  {
    id: '6',
    title: 'Vue.js 3 Composition API Deep Dive',
    instructor: 'Lisa Park',
    thumbnail: angularCourse,
    price: 75,
    originalPrice: 165,
    rating: 4.7,
    ratingCount: 7654,
    duration: '20h',
    studentsCount: 18765,
    level: 'Beginner' as const,
    category: 'Frontend',
  },
  {
    id: '7',
    title: 'GraphQL Schema Design & Performance',
    instructor: 'Robert Kim',
    thumbnail: nodejsCourse,
    price: 99,
    originalPrice: 199,
    rating: 4.9,
    ratingCount: 4321,
    duration: '35h',
    studentsCount: 12456,
    level: 'Advanced' as const,
    category: 'Backend',
  },
  {
    id: '8',
    title: 'Spring Boot Reactive Programming',
    instructor: 'Maria Garcia',
    thumbnail: javaCourse,
    price: 119,
    originalPrice: 249,
    rating: 4.8,
    ratingCount: 11234,
    duration: '42h',
    studentsCount: 56789,
    level: 'Advanced' as const,
    category: 'Backend',
  },
  {
    id: '9',
    title: 'Machine Learning with Python & TensorFlow',
    instructor: 'Dr. Amanda Foster',
    thumbnail: pythonCourse,
    price: 109,
    originalPrice: 229,
    rating: 4.9,
    ratingCount: 18765,
    duration: '38h',
    studentsCount: 89432,
    level: 'Intermediate' as const,
    category: 'Data Science',
  },
  {
    id: '10',
    title: 'Kubernetes Container Orchestration',
    instructor: 'Marcus Williams',
    thumbnail: dockerCourse,
    price: 129,
    originalPrice: 279,
    rating: 4.8,
    ratingCount: 7845,
    duration: '45h',
    studentsCount: 23456,
    level: 'Advanced' as const,
    category: 'DevOps',
  },
  {
    id: '11',
    title: 'React Native Cross-Platform Apps',
    instructor: 'Jessica Martinez',
    thumbnail: mobileCourse,
    price: 95,
    originalPrice: 199,
    rating: 4.7,
    ratingCount: 12876,
    duration: '30h',
    studentsCount: 45123,
    level: 'Intermediate' as const,
    category: 'Mobile',
  },
  {
    id: '12',
    title: 'Next.js Full-Stack Web Applications',
    instructor: 'Jason Taylor',
    thumbnail: reactCourse,
    price: 149,
    originalPrice: 299,
    rating: 4.9,
    ratingCount: 9654,
    duration: '55h',
    studentsCount: 34567,
    level: 'Advanced' as const,
    category: 'Full Stack',
  },
  {
    id: '13',
    title: 'MongoDB Atlas Database Administration',
    instructor: 'Nina Patel',
    thumbnail: nodejsCourse,
    price: 89,
    originalPrice: 179,
    rating: 4.6,
    ratingCount: 5432,
    duration: '22h',
    studentsCount: 16789,
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '14',
    title: 'AWS Solutions Architect Certification Prep',
    instructor: 'Chris Anderson',
    thumbnail: dockerCourse,
    price: 139,
    originalPrice: 289,
    rating: 4.8,
    ratingCount: 8901,
    duration: '48h',
    studentsCount: 27654,
    level: 'Advanced' as const,
    category: 'DevOps',
  },
  {
    id: '15',
    title: 'Vanilla JavaScript DOM Manipulation Master',
    instructor: 'Rachel Green',
    thumbnail: reactCourse,
    price: 59,
    originalPrice: 129,
    rating: 4.7,
    ratingCount: 21456,
    duration: '25h',
    studentsCount: 78901,
    level: 'Beginner' as const,
    category: 'Frontend',
  },
  {
    id: '16',
    title: 'PostgreSQL Performance Tuning Expert',
    instructor: 'Ahmed Hassan',
    thumbnail: pythonCourse,
    price: 79,
    originalPrice: 169,
    rating: 4.5,
    ratingCount: 6789,
    duration: '20h',
    studentsCount: 19876,
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '17',
    title: 'Flutter Firebase Integration Bootcamp',
    instructor: 'Sophie Lee',
    thumbnail: mobileCourse,
    price: 99,
    originalPrice: 209,
    rating: 4.8,
    ratingCount: 10987,
    duration: '35h',
    studentsCount: 32145,
    level: 'Intermediate' as const,
    category: 'Mobile',
  },
  {
    id: '18',
    title: 'Laravel E-commerce Platform Development',
    instructor: 'Roberto Silva',
    thumbnail: djangoCourse,
    price: 75,
    originalPrice: 155,
    rating: 4.6,
    ratingCount: 8765,
    duration: '28h',
    studentsCount: 25431,
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '19',
    title: '.NET Core Web API Security Fundamentals',
    instructor: 'Anna Kowalski',
    thumbnail: javaCourse,
    price: 105,
    originalPrice: 219,
    rating: 4.7,
    ratingCount: 7234,
    duration: '40h',
    studentsCount: 18769,
    level: 'Advanced' as const,
    category: 'Backend',
  },
  {
    id: '20',
    title: 'Redis Caching Strategies & Implementation',
    instructor: 'Samuel Davis',
    thumbnail: dockerCourse,
    price: 69,
    originalPrice: 149,
    rating: 4.5,
    ratingCount: 5643,
    duration: '18h',
    studentsCount: 14532,
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '21',
    title: 'Svelte & SvelteKit Modern Web Framework',
    instructor: 'Maya Johnson',
    thumbnail: angularCourse,
    price: 65,
    originalPrice: 139,
    rating: 4.6,
    ratingCount: 4321,
    duration: '15h',
    studentsCount: 9876,
    level: 'Advanced' as const,
    category: 'Frontend',
  },
  {
    id: '22',
    title: 'Elasticsearch Search Engine Optimization',
    instructor: 'Oliver Brown',
    thumbnail: pythonCourse,
    price: 79,
    originalPrice: 169,
    rating: 4.7,
    ratingCount: 6543,
    duration: '24h',
    studentsCount: 15432,
    level: 'Intermediate' as const,
    category: 'Backend',
  },
  {
    id: '23',
    title: 'Terraform Infrastructure as Code',
    instructor: 'Isabella Rodriguez',
    thumbnail: dockerCourse,
    price: 115,
    originalPrice: 235,
    rating: 4.8,
    ratingCount: 3456,
    duration: '30h',
    studentsCount: 8901,
    level: 'Advanced' as const,
    category: 'DevOps',
  },
  {
    id: '24',
    title: 'WebAssembly Performance Programming',
    instructor: 'James Mitchell',
    thumbnail: javaCourse,
    price: 125,
    originalPrice: 259,
    rating: 4.6,
    ratingCount: 2345,
    duration: '26h',
    studentsCount: 5678,
    level: 'Advanced' as const,
    category: 'Frontend',
  },
];

const CourseGrid = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our most popular tech courses and start your learning
            journey today
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {courseCategories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              url={`/course/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
            />
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
