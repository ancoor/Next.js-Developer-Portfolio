import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcons } from "./LiIcons";

const experienceData = [
  {
    postion: "Software Engineer",
    company: "Google",
    time: "2022-Present",
    address: "Mountain View, CA",
    companyLink: "www.google.com",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    postion: "Intern",
    company: "Facebook",
    time: "Summer 2021",
    address: "Menlo Park, CA.",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and hare short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
  },
  {
    postion: "Software Engineer",
    company: "Google",
    time: "2022-Present",
    address: "Mountain View, CA",
    companyLink: "www.google.com",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    postion: "Intern",
    company: "Facebook",
    time: "Summer 2021",
    address: "Menlo Park, CA.",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and hare short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
  },
];


const Details = ({ postion, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first: mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcons reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {postion}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top" ref={ref} style={{scaleY: scrollYProgress}} />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {
            experienceData.map((companyData, index) => {
              return <Details
              key={companyData.company + "-" + index}
                postion={companyData.postion}
                company={companyData.company}
                companyLink={companyData.companyLink}
                time={companyData.time}
                address={companyData.address}
                work={companyData.work}
              />
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Experience;