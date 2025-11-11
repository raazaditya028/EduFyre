import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock } from "lucide-react";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    rating: number;
    students: number;
    price: number;
    category: string;
    level: string;
    duration?: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`}>
      <Card className="overflow-hidden glass border-0 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Thumbnail */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-white">{course.category}</Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              {course.level}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {course.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="font-semibold text-foreground">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            {course.duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="pt-4 border-t flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              ₹{course.price.toLocaleString('en-IN')}
            </div>
            <div className="text-sm text-muted-foreground line-through">
              ₹{Math.round(course.price * 1.5).toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
