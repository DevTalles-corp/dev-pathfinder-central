import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  duration: string;
  studentsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const CourseCard = ({
  title,
  instructor,
  thumbnail,
  price,
  originalPrice,
  rating,
  ratingCount,
  duration,
  studentsCount,
  level,
  category,
}: CourseCardProps) => {
  const hasDiscount = originalPrice && originalPrice > price;
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-category-bg border-category-border">
            {category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs",
              level === "Beginner" && "bg-green-50 text-green-700 border-green-200",
              level === "Intermediate" && "bg-yellow-50 text-yellow-700 border-yellow-200",
              level === "Advanced" && "bg-red-50 text-red-700 border-red-200"
            )}
          >
            {level}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">{instructor}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-course-rating text-course-rating" />
            <span className="font-medium">{rating}</span>
            <span>({ratingCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{studentsCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-course-price">${price}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          {hasDiscount && (
            <Badge variant="destructive" className="text-xs">
              {Math.round(((originalPrice! - price) / originalPrice!) * 100)}% OFF
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;