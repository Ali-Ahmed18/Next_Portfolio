// icons
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiAdobephotoshop,
  SiMongodb,
  SiFirebase,
  SiAdobelightroom
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <FaNodeJs key="nodejs" />,
          <SiMongodb key="mongodb" />,
          <SiExpress key="express" />,
          <SiFirebase key="firebase" />
        ],
      },
      {
        title: "Graphic Design",
        icons: [<SiAdobelightroom key="lightroom" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Mern Stack Developer Certificate",
        stage: "2023",
      },
      {
        title: "Adobe Design Certificate ",
        stage: "2019",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Freelancing",
        stage: "6 Month",
      },
      {
        title: "Data Entry - Digi Skill",
        stage: "2018 - 2019",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Saylani Mass IT Training, Karachi",
        stage: "2022",
      },
      {
        title: "Computer Science Diploma - S.M Collegiate",
        stage: "2020",
      },
      {
        title: "Graphic designing - Arena Karachi, Pakistan",
        stage: "2019",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import CountUp from "react-countup";
import Cirles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Cirles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I begin freelancing as a developer. Since then, I&apos;ve
            done work from agencies, counseled for startups, and collaborated
            on digital products for business and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience{" "}
                </div>
              </div>
              {/* ... (rest of the code for counters) */}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className={`${
                    index === itemindex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemindex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 xl:items-start items-center">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconindex) => {
                      return <div key={iconindex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
