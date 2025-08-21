import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  url: string;
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
  url,
}: CourseCardProps) => {
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover cursor-pointer">
        <div className="relative overflow-hidden">
          {/* 
            Selecciona aleatoriamente un gradiente de una lista predefinida de gradientes de colores.
            Esto da variedad visual a las tarjetas de curso.
          */}
          {(() => {
            const gradients = [
              'linear-gradient(135deg, #7f9cf5 0%, #43e97b 100%)',
              'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
              'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
              'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
              'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
              'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
              'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
              'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
            ];
            // Para mantener el gradiente consistente por tarjeta, se puede usar el título como semilla simple
            function getGradientIndex(str: string, gradientsLength: number) {
              let hash = 0;
              for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
              }
              return Math.abs(hash) % gradientsLength;
            }
            const gradientIndex = getGradientIndex(title, gradients.length);
            const selectedGradient = gradients[gradientIndex];
            return (
              <div
                className="w-full h-48 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center"
                style={{
                  background: selectedGradient,
                }}
              >
                <span className="text-white text-2xl font-bold opacity-80 drop-shadow-lg text-center px-4">
                  {title}
                </span>
              </div>
            );
          })()}
          {/* Etiqueta de categoría, ubicada en la esquina superior izquierda */}
          <div className="absolute top-2 left-2">
            <Badge
              variant="secondary"
              className="bg-white/90 border-category-border text-category-foreground  px-3 py-1 font-semibold"
              style={{
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
            >
              {category}
            </Badge>
          </div>
          <div className="absolute top-2 right-2">
            <Badge
              variant="outline"
              className={cn(
                'text-xs',
                level === 'Beginner' &&
                  'bg-green-50 text-green-700 border-green-200',
                level === 'Intermediate' &&
                  'bg-yellow-50 text-yellow-700 border-yellow-200',
                level === 'Advanced' && 'bg-red-50 text-red-700 border-red-200'
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
              <span className="text-2xl font-bold text-course-price">
                ${price}
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            {hasDiscount && (
              <Badge variant="destructive" className="text-xs">
                {Math.round(((originalPrice! - price) / originalPrice!) * 100)}%
                OFF
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
