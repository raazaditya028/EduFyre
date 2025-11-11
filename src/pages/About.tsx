import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About EduFyre</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              EduFyre is an education platform on a mission to ignite technical excellence in everyone.
              We provide accessible, industry-aligned learning that helps learners build real skills and real careers.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To educate and empower people everywhere to become technical—
                enabling them to create, innovate, and thrive in the digital economy.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="text-muted-foreground">
                Project-first learning, expert mentorship, and a modern curriculum that mirrors
                how technology is practiced in the industry.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
              <p className="text-muted-foreground">
                Practical skills, clear outcomes, and guidance from first line of code to first job offer.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why EduFyre</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Hands-on projects to build a strong portfolio</li>
                <li>Mentorship from experienced engineers</li>
                <li>Flexible learning modes: Online, Offline, and Hybrid</li>
                <li>Career support: interview prep, resume reviews, and referrals</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-extrabold">50k+</div>
                  <div className="text-sm text-muted-foreground">Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">200+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">150+</div>
                  <div className="text-sm text-muted-foreground">Mentors</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
