import CourseDescription from "@/components/CourseDescription";
import SEO from "@/components/SEO/SEO";

const Courses = () => {
  return (
    <>
      <SEO
        title="Courses - Learn Skills through Gamified Learning | Skill as Fun"
        description="Explore our comprehensive courses designed to make learning fun and engaging. Learn new skills with interactive lessons, quizzes, and real-world projects."
        keywords="courses, skill development, online learning, interactive education, tutorials"
        url="https://skill-as-fun.com/courses"
      />
      <div className="container mx-auto bg-red-300 max-w-7xl">
        <CourseDescription/>
      </div>
    </>
  );
};

export default Courses;
