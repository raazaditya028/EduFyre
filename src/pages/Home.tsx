import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Rocket, Users, Star, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/course/CourseCard";

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master React, Node.js, and MongoDB",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      rating: 4.8,
      students: 12453,
      price: 4999,
      category: "Web Development",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Machine Learning & AI",
      description: "Deep learning with Python and TensorFlow",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      rating: 4.9,
      students: 8932,
      price: 6999,
      category: "AI/ML",
      level: "Advanced"
    },
    {
      id: 3,
      title: "Cloud Computing with AWS",
      description: "Master AWS services and DevOps",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      rating: 4.7,
      students: 10245,
      price: 5999,
      category: "Cloud",
      level: "Intermediate"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: Code2,
      title: "Hands-on Projects",
      description: "Build real-world projects to strengthen your portfolio"
    },
    {
      icon: Rocket,
      title: "Career Support",
      description: "Get job-ready with interview prep and career guidance"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Software Engineer at Google",
      content: "EduLearn transformed my career. The courses are practical and the instructors are amazing!",
      rating: 5
    },
    {
      name: "Anjali kumari",
      role: "Full Stack Developer",
      content: "Best investment I've made in my education. Got a job within 3 months of completing the bootcamp.",
      rating: 5
    },
    {
      name: "Rohit Mehra",
      role: "ML Engineer at Amazon",
      content: "The AI course gave me the skills I needed to transition into machine learning. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(239,76%,58%,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(187,95%,43%,0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-fade-in">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium">Trusted by 50,000+ Students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in">
              Empowering the Next<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Generation of Developers
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Learn Computer Science, AI, and DevOps with expert-led courses. 
              Build real projects and launch your tech career.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              <Link to="/courses">
                <Button size="lg" className="btn-gradient text-lg px-8 py-6 rounded-2xl">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground">Start learning with our most popular courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="rounded-2xl">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground">Everything you need to succeed in tech</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="glass p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from our graduates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass p-8 rounded-3xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img  
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-10" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of students already building their tech careers
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg" className="btn-gradient text-lg px-8 py-6 rounded-2xl">
                    Browse Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
