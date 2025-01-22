import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Send, Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className=" from-blue-600 to-teal-500 text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Skill as fun</h2>
            <p className="mb-4">
              Empowering learners worldwide with cutting-edge educational
              technology solutions.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Courses", "About Us", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Learning Street</p>
            <p>Education City, ED 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@skillasfun.com</p>
          </div>
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="mb-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex items-center justify-center" >
              <Input
                type="email"
                placeholder="Enter your email"
                
                className="focus:ring-2 focus:ring-teal-300 text-gray-900 border-none rounded-l-full shadow-gray-500"
              />
              
              <Button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 rounded-r-full flex align -item hight:78px
                 "
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-400 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-teal-300 transition-colors"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Skill ad fun. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
