import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// --- TYPE DEFINITIONS ---
interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface ContactDetailProps {
  Icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
}

// --- CONFIGURATION CONSTANTS (Adjust these colors to match your theme) ---
const BRAND_COLOR = 'text-red-500';
const BG_COLOR = 'bg-gray-900';
const TEXT_COLOR = 'text-gray-200';
const CARD_COLOR = 'bg-gray-800';

// Reusable Contact Detail Component
const ContactDetail: React.FC<ContactDetailProps> = ({ Icon, title, value, link }) => (
  <a href={link} target={link ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition duration-200 group">
    <div className={`p-3 rounded-full ${BRAND_COLOR} bg-red-900/40 flex-shrink-0`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition duration-200">{title}</h3>
      <p className="text-gray-400 break-all">{value}</p>
    </div>
  </a>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Replace this mock delay with your actual form submission logic
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className={`pt-32 pb-20 px-6 ${TEXT_COLOR}`}>
        <header className="text-center mb-10">
          <h1 className={`text-4xl font-extrabold text-white mb-2`}>
            Get In Touch
          </h1>
          <p className="text-gray-400">
            We'd love to hear from you. Fill out the form or use our direct contact info.
          </p>
        </header>

        <div className={`container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 p-6 rounded-xl shadow-2xl ${CARD_COLOR}`}>
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Send us a message</h2>
            {isSubmitted ? (
              <div className="p-6 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                <p className="font-semibold text-lg">Thank You!</p>
                <p>Your message has been received. We will get back to you shortly.</p>
                <button
                  className={`mt-4 px-4 py-2 rounded-lg font-semibold bg-green-600 hover:bg-green-700 transition duration-200`}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg border border-gray-700 ${BG_COLOR} text-white focus:ring-red-500 focus:border-red-500 transition duration-150`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg border border-gray-700 ${BG_COLOR} text-white focus:ring-red-500 focus:border-red-500 transition duration-150`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg border border-gray-700 ${BG_COLOR} text-white focus:ring-red-500 focus:border-red-500 transition duration-150`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-lg shadow-md text-white font-semibold ${isLoading ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Direct Information</h2>
            <ContactDetail
              Icon={Mail}
              title="Email Support"
              value="support@edufyre.com"
              link="mailto:support@edufyre.com"
            />
            <ContactDetail
              Icon={Phone}
              title="Customer Service"
              value="+1 (555) 123-4567"
              link="tel:+15551234567"
            />
            <ContactDetail
              Icon={MapPin}
              title="Corporate Address"
              value="123 Knowledge Blvd, Suite 400, Learning City, CA 90210"
            />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.90806456743!2d-118.3697955847849!3d34.0536904806037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75a45b85a11%3A0x6b445d47190011c0!2sHollywood!5e0!3m2!1sen!2sus!4v1636502283994!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
