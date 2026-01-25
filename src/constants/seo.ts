// SEO Metadata Constants
export const SEO_CONFIG = {
  siteName: "Skill as Fun",
  siteUrl: "https://skill-as-fun.com",
  description:
    "Learn skills through fun and interactive gamified courses. Engage with quizzes, competitions, and leaderboards on Skill as Fun.",
  author: "Skill as Fun Team",
  keywords: [
    "gamified learning",
    "interactive courses",
    "skill development",
    "online education",
    "quizzes",
    "leaderboards",
    "learning platform",
    "educational technology",
  ],
  socialLinks: {
    twitter: "https://twitter.com/skillasfun",
    facebook: "https://facebook.com/skillasfun",
    linkedin: "https://linkedin.com/company/skillasfun",
    instagram: "https://instagram.com/skillasfun",
  },
};

export const PAGES_SEO = {
  home: {
    title: "Skill as Fun - Learn Gamified Courses | Interactive Learning Platform",
    description:
      "Learn skills through fun and interactive gamified courses. Engage with quizzes, competitions, and leaderboards. Start your journey with Skill as Fun today!",
    keywords:
      "gamified learning, interactive courses, skill development, online education, quizzes, leaderboards",
  },
  about: {
    title: "About Skill as Fun - Our Mission & Vision",
    description:
      "Learn about Skill as Fun's mission to transform education through gamified learning. Discover our innovative approach, team, and achievements.",
    keywords:
      "about us, educational platform, gamified learning, team, mission, vision",
  },
  quizzes: {
    title: "Interactive Quiz Challenge - Test Your Knowledge | Skill as Fun",
    description:
      "Challenge yourself with our interactive quizzes across different tech topics. Track your progress and compete with others on the leaderboard!",
    keywords:
      "quizzes, tech challenges, interactive learning, knowledge test, leaderboard",
  },
  courses: {
    title: "Courses - Learn Skills through Gamified Learning | Skill as Fun",
    description:
      "Explore our comprehensive courses designed to make learning fun and engaging. Learn new skills with interactive lessons, quizzes, and real-world projects.",
    keywords:
      "courses, skill development, online learning, interactive education, tutorials",
  },
  signin: {
    title: "Sign In - Skill as Fun | Access Your Learning Dashboard",
    description:
      "Sign in to your Skill as Fun account to access gamified courses, quizzes, and track your learning progress.",
    keywords:
      "sign in, login, account access, learning dashboard",
  },
  signup: {
    title: "Sign Up - Skill as Fun | Create Your Learning Account",
    description:
      "Join Skill as Fun today! Create an account to access gamified courses, interactive quizzes, and start your personalized learning journey.",
    keywords:
      "sign up, registration, create account, join learning platform",
  },
  bookDemo: {
    title: "Book a Demo - Skill as Fun | Free Trial Session",
    description:
      "Schedule a free demo session to experience Skill as Fun. Discover how gamified learning can transform your child's educational journey.",
    keywords:
      "book demo, free trial, education demo, learning session, schedule",
  },
};

// Structured Data for Rich Snippets
export const getStructuredData = (pageType: string) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skill as Fun",
    url: "https://skill-as-fun.com",
    logo: "https://skill-as-fun.com/logo.png",
    description: SEO_CONFIG.description,
    sameAs: Object.values(SEO_CONFIG.socialLinks),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@skill-as-fun.com",
    },
  };

  if (pageType === "course") {
    return {
      ...baseData,
      "@type": "Course",
      courseCode: "SAF-001",
      publisher: {
        "@type": "Organization",
        name: "Skill as Fun",
      },
    };
  }

  if (pageType === "quiz") {
    return {
      ...baseData,
      "@type": "Quiz",
    };
  }

  return baseData;
};
