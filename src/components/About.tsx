"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
        Hey there, I&apos;m Shashi Ala  a passionate developer, problem solver, and enthusiast for innovation. Welcome to my digital haven!
        </Paragraph>
        <Paragraph className=" mt-4">
        Since the beginning of my journey, I&apos;ve been driven by the thrill of transforming ideas into impactful digital solutions. As a developer, I excel at building seamless and scalable applications, combining functionality with intuitive design. My mission is to craft software that not only works efficiently but also delivers an exceptional user experience.
        </Paragraph>

        <Paragraph className=" mt-4">
        But my passion doesn&apos;t stop at development , With a strong foundation in problem-solving, I&apos;ve tackled over 650+ problems on platforms like LeetCode, honing my skills in data structures and algorithms. I thrive on solving complex problems and enjoy creating solutions that push the boundaries of what's possible.
        </Paragraph>
        <Paragraph className=" mt-4">
        What sets me apart is my dedication to creating with purpose. Whether it's a Prompt sharing app, an Modern banking application, or a portfolio tracker, I ensure every project merges technical excellence with thoughtful design.
        </Paragraph>
        <Paragraph className=" mt-4">
        My expertise in tools like the MERN stack, and modern authentication mechanisms like OAuth reflects my commitment to delivering reliable and secure software for everyone.
        </Paragraph>
        <Paragraph className=" mt-4">
        Through this website, I hope to share my journey, projects, and insights with you. Whether you're a fellow developer looking for ideas, a recruiter scouting talent, or simply curious about my work, there&apos;s something here for everyone.
        </Paragraph>
        <Paragraph className=" mt-4">
        Let&apos;s embark on this adventure of code, creativity, and innovation together. Thank you for stopping by, and I can&apos;t wait to connect with you!
        </Paragraph>
      </div>
    </div>
  );
}
