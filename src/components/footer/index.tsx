import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Send, Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import bgFooterImg from "@/assets/footerImg.png";
export default function Footer() {
  return (
    <div className="relative">
      {/* <div className="absolute top-0 left-0 w-full h-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </div> */}

      <footer
        className={`bg-[url(${bgFooterImg})] from-blue-600 to-teal-500 text-white`}
        style={{
          backgroundImage: `url(${bgFooterImg})`,
          backgroundSize: "",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">SkillAsFun</h2>
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
                      className="pointer-events-none"
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
              <form className="flex items-center justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="focus:ring-2 focus:ring-teal-300 text-gray-900 border-none rounded-l-full shadow-gray-500"
                />

                <Button
                  type="submit"
                  disabled
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
                  className="hover:text-teal-300 transition-colors pointer-events-none"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} SkillAsFun. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
