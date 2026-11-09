"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { EXPERIENCES } from "./constants";

const navbarVariants = (direction: string, delay: number): Variants => ({
  hidden: { y: direction === "top" ? -100 : 100, opacity: 0 },
  visible: {
    y: 0,
    transition: { delay: delay, duration: 0.5, ease: "easeOut" as const },
    opacity: 1,
  },
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" setLoading={setLoading} />
      ) : (
        <motion.div key="home">
          <Navbar />
          <div className="pt-16 sm:pt-20" />

          <nav aria-label="Main navigation" className="sr-only">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#skills">Skills</Link></li>
              <li><Link href="/#experience">Experience</Link></li>
              <li><Link href="/projects/AETHER-H1">AETHER-H1</Link></li>
              <li><Link href="/projects/PHOENIX-F1">PHOENIX-F1</Link></li>
              <li><Link href="/projects/PHANTOM-X">PHANTOM-X</Link></li>
              <li><Link href="/#awards">Awards</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </nav>

          <Hero />

          <motion.div
            variants={navbarVariants("bottom", 1)}
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
          >
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience SectionTopic={EXPERIENCES} title="Experience" /></section>
            <div className="h-28"></div>
            <section id="awards"><Awards /></section>
            <section id="gallery"><Gallery /></section>
            <section id="contact"><Contact /></section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
