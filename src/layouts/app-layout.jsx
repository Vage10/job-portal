import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Outlet } from "react-router-dom";
import { Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const AppLayout = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { user_email: email },
        "5I9j7MbwirDkP0MJs"
      );
      alert("Subscription successful!");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Hustlrr</h2>
            <p className="text-sm leading-relaxed">
              Find your dream job or hire top talent. Connecting professionals with opportunities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Post a Job</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Career Tips</a></li>
              <li><a href="#" className="hover:text-white">Resume Help</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <div className="flex flex-col space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 text-white placeholder-gray-400"
            />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleSubscribe}
              disabled={loading}
            >
              <Mail className="mr-2 h-4 w-4" />
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5">
              <a href="#"><Facebook className="text-white hover:text-blue-500 w-5 h-5" /></a>
              <a href="#"><Twitter className="text-white hover:text-blue-400 w-5 h-5" /></a>
              <a href="#"><Linkedin className="text-white hover:text-blue-600 w-5 h-5" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hustlrr. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default AppLayout;
