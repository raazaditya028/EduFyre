import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Auth from "./pages/Auth";
import AboutPage from "./pages/About.tsx"; 
import ContactPage from "./pages/Contact.tsx"; 
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Content from "./pages/Content";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
              <Route path="/course/:id" element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />

              {/* Public routes */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<Placeholder title="Pricing" />} />
              <Route path="/features" element={<Placeholder title="Features" />} />
              <Route path="/testimonials" element={<Placeholder title="Testimonials" />} />
              <Route path="/careers" element={<Placeholder title="Careers" />} />
              <Route path="/blog" element={<Placeholder title="Blog" />} />
              <Route path="/press" element={<Placeholder title="Press" />} />
              <Route path="/help" element={<Placeholder title="Help Center" />} />
              <Route path="/community" element={<Placeholder title="Community" />} />
              <Route path="/docs" element={<Placeholder title="Documentation" />} />
              <Route path="/api" element={<Placeholder title="API" />} />
              <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
              <Route path="/terms" element={<Placeholder title="Terms of Service" />} />
              <Route path="/cookies" element={<Placeholder title="Cookie Policy" />} />
              <Route path="/licenses" element={<Placeholder title="Licenses" />} />

              {/* Resources modality placeholders */}
              <Route path="/resources/online" element={<Placeholder title="Online" />} />
              <Route path="/resources/offline" element={<Placeholder title="Offline" />} />
              <Route path="/resources/hybrid" element={<Placeholder title="Hybrid" />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
