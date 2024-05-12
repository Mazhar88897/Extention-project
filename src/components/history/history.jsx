import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Hero = () => {
  const { bg, mode } = useSelector((state) => state.mode);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 h-screen"
    >
      <div className="text-center flex items-center gap-y-10 flex-col tracking-[1px] ">
      <h1 className={`text-white font-bold text-4xl md:text-[100] ${mode} `}>
          History
        </h1>
        <p className="text-white max-w-[85%] mx-auto leading-relaxed text-[16px]">
          During my college years, I faced the daunting challenge of juggling
          tuition fees, accommodation costs, and daily expenses. Balancing work
          hours with academic demands was a constant struggle, leaving me short
          on time and resources. Despite my dedication, the process of applying
          for scholarships felt overwhelming and time-consuming. Determined to
          overcome this obstacle, I embarked on a journey to develop a solution.
        </p>

        <p className="text-white max-w-[85%] mx-auto leading-relaxed text-[16px]">
          Recognizing the need for a more efficient approach, I envisioned an
          AI-powered scholarship assistant that could streamline the application
          process, allowing me to pursue more opportunities without sacrificing
          my studies or personal time. This was the spark that ignited my
          entrepreneurial spirit.
        </p>
        <p className="text-white max-w-[85%] mx-auto leading-relaxed text-[16px]">
          Today, our company stands as a testament to the belief that challenges
          can be transformed into opportunities for growth and empowerment. We
          are committed to empowering students by providing them with the tools
          they need to achieve their academic and career aspirations. With our
          AI scholarship assistant, students can navigate the complex world of
          scholarships with ease, unlocking new possibilities for their future
          success.
        </p>
        <p className="text-white max-w-[85%] mx-auto leading-relaxed text-[16px]">
          Driven by my own experiences and fueled by a passion for innovation, I
          dedicated myself to bringing this idea to life. Through perseverance
          and hard work, I transformed a simple concept into a powerful tool
          that would revolutionize the way students access financial aid.
        </p>
        <p className="text-white max-w-[85%] mx-auto leading-relaxed text-[16px]">
          As we continue to evolve and expand our offerings, we remain steadfast
          in our mission to make education more accessible and equitable for
          all. Together, we are shaping the future of scholarship assistance and
          empowering the next generation of leaders to reach their full
          potential.{" "}
        </p>
      </div>
      <div className="mt-12 justify-center text-white items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex text-[16px] tracking-[1px]">
        <a
          href="/signup"
          className={`px-10 py-3.5 w-full ${bg} hover:opacity-70 text-center rounded-md shadow-md block sm:w-auto`}
        >
          Get started
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
