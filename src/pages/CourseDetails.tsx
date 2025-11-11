import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, Users, BookOpen, ArrowLeft, Play, CheckCircle2 } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would come from a database
  const course = {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    description: "Master modern web development from frontend to backend. Build real-world projects using React, Node.js, Express, and MongoDB.",
    longDescription: "This comprehensive bootcamp will take you from beginner to professional web developer. You'll learn industry-standard tools and best practices while building 10+ real-world projects.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    rating: 4.8,
    students: 12453,
    price: 49.99,
    category: "Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    instructor: {
      name: "Dr. Sarah Anderson",
      bio: "Senior Software Engineer at Meta with 10+ years of experience. Passionate about teaching and helping students launch their tech careers.",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    syllabus: [
      {
        module: "Module 1: Frontend Fundamentals",
        lessons: [
          "HTML5 & CSS3 Mastery",
          "JavaScript ES6+ Features",
          "Responsive Design Principles",
          "CSS Frameworks & Tailwind"
        ]
      },
      {
        module: "Module 2: React Development",
        lessons: [
          "React Components & Props",
          "State Management with Hooks",
          "React Router & Navigation",
          "Context API & Redux"
        ]
      },
      {
        module: "Module 3: Backend with Node.js",
        lessons: [
          "Node.js Fundamentals",
          "Express.js Framework",
          "RESTful API Design",
          "Authentication & Security"
        ]
      },
      {
        module: "Module 4: Database & Deployment",
        lessons: [
          "MongoDB & Mongoose",
          "Database Design Patterns",
          "Cloud Deployment (AWS/Vercel)",
          "CI/CD Pipeline Setup"
        ]
      }
    ],
    features: [
      "Lifetime access to course materials",
      "10+ real-world projects",
      "Certificate of completion",
      "Career support & job placement",
      "Private Discord community",
      "Weekly live Q&A sessions"
    ]
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-7xl">
          <Link to="/courses" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                {course.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              
              <p className="text-xl text-muted-foreground">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">Instructor</div>
                  <div className="text-muted-foreground">{course.instructor.name}</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-3xl sticky top-24">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative group cursor-pointer">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="text-4xl font-bold mb-6">
                  ${course.price}
                  <span className="text-lg font-normal text-muted-foreground ml-2">one-time</span>
                </div>
                
                <Button className="w-full btn-gradient text-lg py-6 rounded-2xl mb-4">
                  Enroll Now
                </Button>
                
                <Button variant="outline" className="w-full rounded-2xl">
                  Add to Wishlist
                </Button>
                
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="text-sm font-semibold mb-3">This course includes:</div>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-muted/50 p-1 rounded-2xl">
              <TabsTrigger value="overview" className="rounded-xl">Overview</TabsTrigger>
              <TabsTrigger value="syllabus" className="rounded-xl">Syllabus</TabsTrigger>
              <TabsTrigger value="instructor" className="rounded-xl">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="glass p-8 rounded-3xl">
                <h2 className="text-3xl font-bold mb-4">What you'll learn</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {course.longDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="syllabus">
              <div className="glass p-8 rounded-3xl">
                <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {course.syllabus.map((module, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6">
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                        {module.module}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center gap-3 text-muted-foreground">
                              <Play className="w-4 h-4" />
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="instructor">
              <div className="glass p-8 rounded-3xl">
                <div className="flex items-start gap-6 mb-6">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="w-24 h-24 rounded-2xl"
                  />
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{course.instructor.name}</h2>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span>4.9 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>25,000+ Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{course.instructor.bio}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
