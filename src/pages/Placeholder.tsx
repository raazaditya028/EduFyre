import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PlaceholderProps {
  title: string;
  description?: string;
}

const Placeholder = ({ title, description }: PlaceholderProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-8">
            {description ?? "This page is coming soon. Check back later."}
          </p>
          <a href="/" className="text-blue-500 underline hover:text-blue-700">
            Go back home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Placeholder;
