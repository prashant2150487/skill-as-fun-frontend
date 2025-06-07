import axiosInstance from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  message: string;
}

const ContactTouch = () => {
  const [userinfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  });
  const handleChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const resopnse = await axiosInstance.post("/businessInfo", userinfo);
      toast(resopnse.data.message);
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };
  console.log(userinfo, "gfhfghgf");
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 backdrop-blur-sm rounded-full">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Ready to transform education at your institution?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to hear from you and discuss how our educational
                technology solutions can address your specific needs and
                challenges.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Building className="h-5 w-5 text-white" />,
                    title: "Headquarters",
                    details:
                      "123 Innovation Way, Suite 400\nSan Francisco, CA 94103",
                    gradient: "from-blue-500 to-indigo-500",
                  },
                  {
                    icon: <Mail className="h-5 w-5 text-white" />,
                    title: "Email",
                    details: "info@edutechinnovations.com",
                    gradient: "from-purple-500 to-violet-500",
                  },
                  {
                    icon: <Phone className="h-5 w-5 text-white" />,
                    title: "Phone",
                    details: "(555) 123-4567",
                    gradient: "from-pink-500 to-rose-500",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-white" />,
                    title: "Regional Offices",
                    details:
                      "New York • Chicago • Austin • London • Singapore • Sydney",
                    gradient: "from-amber-500 to-orange-500",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${contact.gradient} flex-shrink-0`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {contact.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:bg-gray-800/90">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                  Request Information
                </h3>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                        name="firstName"
                        value={userinfo.firstName}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        name="lastName"
                        value={userinfo.lastName}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      name="email"
                      value={userinfo.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="organization"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your organization"
                      onChange={handleChange}
                      name="organization"
                      value={userinfo.organization}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your educational technology needs"
                      onChange={handleChange}
                      name="message"
                      value={userinfo.message}
                    />
                  </div>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit Request
                  </Button>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By submitting this form, you agree to our{" "}
                    <Link
                      to="/privacy"
                      className="underline underline-offset-2 text-blue-600 dark:text-blue-400"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactTouch;
