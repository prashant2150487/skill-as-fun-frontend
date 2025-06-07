const MissionVision = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-gradient-to-tr from-blue-200 to-blue-300 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl ">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 dark:bg-gray-800/80 dark:border-gray-700 transform transition-transform hover:scale-[1.02]">
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-indigo-600 px-3 py-1 text-sm text-white font-medium">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                Empowering learners through accessible, engaging, and effective
                educational technology
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                At SkillAsFun, we believe that quality education should be
                accessible to everyone, regardless of their background or
                circumstances. Our mission is to develop and deliver
                cutting-edge educational technology solutions that break down
                barriers to learning, engage students in meaningful ways, and
                produce measurable results.
              </p>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                We are committed to creating tools that support educators,
                empower students, and transform the educational experience. By
                combining pedagogical expertise with technological innovation,
                we aim to address the unique challenges facing education today
                and prepare learners for the demands of tomorrow.
              </p>
            </div>
            <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100 dark:bg-gray-800/80 dark:border-gray-700 transform transition-transform hover:scale-[1.02]">
              <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 text-sm text-white font-medium">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
                A world where technology enhances human potential through
                education
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                We envision a future where educational technology seamlessly
                integrates into learning environments, enhancing rather than
                replacing human connection. Our vision is to lead the
                transformation of education through thoughtful innovation that
                respects the essential role of teachers while expanding what's
                possible in education.
              </p>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                We see a world where personalized learning experiences are the
                norm, where data-driven insights help educators make informed
                decisions, and where technology bridges gaps in educational
                access and quality. Through our work, we strive to make this
                vision a reality, one classroom, one school, and one educational
                system at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
