import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import articleImage from "../../public/images/articles/pagination component in reactjs.jpg";
import articleImage2 from "../../public/images/articles/create loading screen in react js.jpg";
import articleImage3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const featuredArticlesData = [
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    summary:
      "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    time: "9 min read",
    link: "/",
    image: { articleImage },
  },
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    summary:
      "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    time: "9 min read",
    link: "/",
    image: { articleImage },
  },
];
const articlesData = [
  {
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    summary:
      "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    date: "March 22, 2023",
    link: "/",
    image: { articleImage3 },
  },
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    summary:
      "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    date: "March 24, 2023",
    link: "/",
    image: { articleImage },
  },
];

const FramerImage = motion(Image);

const MovingImg = ({ title, image, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  const handleMouse = (event) => {
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imageRef}
        src={image}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
      />
    </Link>
  );
};

const Article = ({ image, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col
    "
    >
      <MovingImg title={title} image={image} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ image, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.1rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          width={1000}
          height={1000}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Ancoor Banerjee | Articles Page</title>
        <meta
          name="description"
          content="Browse through Ancoor's collection of software engineering articles and tutorials on Next.js, React.js, web development, and more.  Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title={featuredArticlesData[0].title}
              summary={featuredArticlesData[0].summary}
              time={featuredArticlesData[0].time}
              link={featuredArticlesData[0].link}
              image={articleImage}
            />
            <FeaturedArticle
              title={featuredArticlesData[1].title}
              summary={featuredArticlesData[1].summary}
              time={featuredArticlesData[1].time}
              link={featuredArticlesData[1].link}
              image={articleImage2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={articlesData[0].title}
              date={articlesData[0].date}
              image={articleImage3}
              link={articlesData[0].link}
            />
            <Article
              title={articlesData[1].title}
              date={articlesData[1].date}
              image={articleImage3}
              link={articlesData[1].link}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
