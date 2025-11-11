import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/course/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "AI/ML", "Cloud", "DevOps", "Mobile"];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master React, Node.js, and MongoDB to build modern web applications",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      rating: 4.8,
      students: 12453,
      price: 49.99,
      category: "Web Development",
      level: "Intermediate",
      duration: "12 weeks"
    },
    {
      id: 2,
      title: "Machine Learning & AI",
      description: "Deep learning with Python and TensorFlow for real-world applications",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      rating: 4.9,
      students: 8932,
      price: 69.99,
      category: "AI/ML",
      level: "Advanced",
      duration: "16 weeks"
    },
    {
      id: 3,
      title: "Cloud Computing with AWS",
      description: "Master AWS services, architecture, and DevOps practices",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      rating: 4.7,
      students: 10245,
      price: 59.99,
      category: "Cloud",
      level: "Intermediate",
      duration: "10 weeks"
    },
    {
      id: 4,
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile apps with React Native",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      rating: 4.6,
      students: 7821,
      price: 54.99,
      category: "Mobile",
      level: "Intermediate",
      duration: "8 weeks"
    },
    {
      id: 5,
      title: "DevOps Engineering Bootcamp",
      description: "CI/CD, Docker, Kubernetes, and cloud infrastructure",
      thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      rating: 4.8,
      students: 9156,
      price: 64.99,
      category: "DevOps",
      level: "Advanced",
      duration: "14 weeks"
    },
    {
      id: 6,
      title: "Python for Data Science",
      description: "Data analysis, visualization, and machine learning with Python",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      rating: 4.7,
      students: 11342,
      price: 44.99,
      category: "AI/ML",
      level: "Beginner",
      duration: "10 weeks"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose from {courses.length} expert-led courses to advance your tech career
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-12 h-14 rounded-2xl text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="lg" className="rounded-2xl h-14">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-2xl ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-primary to-secondary text-white" 
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6 text-muted-foreground">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No courses found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
