import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Content = () => {
  const courses = [
    { title: "Data Structures & Algorithms", desc: "Master problem solving with arrays, trees, graphs, DP, and more." },
    { title: "Operating Systems", desc: "Processes, threads, scheduling, memory, file systems, concurrency." },
    { title: "Database Management Systems", desc: "Relational design, SQL, transactions, indexing, normalization." },
    { title: "Computer Networks", desc: "OSI/TCP-IP models, routing, transport protocols, HTTP/HTTPS, DNS." },
    { title: "Computer Architecture", desc: "CPU design, memory hierarchy, pipelining, instruction sets." },
    { title: "Software Engineering", desc: "SDLC, testing, design patterns, version control, CI/CD basics." },
    { title: "Compiler Design", desc: "Lexing, parsing, semantic analysis, code generation, optimization." },
    { title: "Distributed Systems", desc: "Consistency, partitioning, consensus, scalability, fault tolerance." },
    { title: "Artificial Intelligence & Machine Learning", desc: "Supervised/unsupervised learning, deep learning, model evaluation." },
    { title: "Web Development", desc: "Frontend (React), backend (Node), APIs, authentication, deployments." },
    { title: "Cloud Computing & DevOps", desc: "AWS foundations, containers, CI/CD pipelines, monitoring." },
    { title: "Cybersecurity Fundamentals", desc: "Threat models, cryptography basics, secure coding, best practices." }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Computer Science Engineering Courses</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the core pillars of CSE—from fundamentals to advanced systems—
              designed to build strong foundations and make you industry-ready.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {courses.map((c) => (
              <div key={c.title} className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </section>

          <div className="text-center space-y-3">
            <Link to="/courses" className="text-blue-500 underline hover:text-blue-700">
              Browse all EduFyre courses
            </Link>
            <div>
              <Link to="/contact" className="text-blue-500 underline hover:text-blue-700">
                Have questions? Contact us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Content;
