"use client";

import { useState, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandAlt, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CustomSection from "./custom/CustomSection";
import { ThemeContext } from "../context/ThemeContext";

const galleryImages = [
  {
    id: 1,
    title: "World Invention Competition & Exhibition 2026 Showcase",
    description: "Team DEMON71 showcased their project at Northern University Bangladesh.",
    tag: "Robotics",
    src: "/images/gallery/demon71-wice-2026-team-showcase.webp",
  },
  {
    id: 2,
    title: "National Round WICE 2026 Gold Medal",
    description: "Team DEMON71 was awarded the Gold Medal in the national round of WICE 2026.",
    tag: "Robotics",
    src: "/images/gallery/demon71-wice-2026-gold-medal.webp",
  },
  {
    id: 3,
    title: "PHANTOM-X Rover Showcase with Inventor",
    description: "Demonstrating the PHANTOM-X tactical defense rover at the National Science and Technology Complex.",
    tag: "Robotics",
    src: "/images/gallery/demon71-rover-showcase.webp",
  },
  {
    id: 4,
    title: "47th National Science & Technology Week - Grand Finale",
    description: "Team DEMON71 secured 5th Place at the Grand Finale of the 47th National Science & Technology Week (National Level).",
    tag: "National Award",
    src: "/images/gallery/demon71-national-science-fair-2026.webp",
  },
  {
    id: 5,
    title: "Sylhet Division Event Evaluation",
    description: "Evaluation session and judges photo with Team DEMON71 at the Sylhet Division event.",
    tag: "Robotics",
    src: "/images/gallery/demon71-sylhet-division-evaluation.webp",
  },
  {
    id: 6,
    title: "Sylhet Division Level Champions",
    description: "Triumphant 1st Place moment achieved by Team DEMON71 at the Sylhet Division level.",
    tag: "Robotics",
    src: "/images/gallery/demon71-sylhet-division-champions.webp",
  },
  {
    id: 7,
    title: "Official District Reception",
    description: "Official reception and honor for Team DEMON71 from the District Administration after the Sylhet victory.",
    tag: "Robotics",
    src: "/images/gallery/demon71-district-reception.webp",
  },
  {
    id: 8,
    title: "Field Testing of PHANTOM-X Tactical Rover",
    description: "Team DEMON71 testing the computational algorithms and remote control hardware of the PHANTOM-X defense rover outdoors.",
    tag: "Robotics",
    src: "/images/gallery/demon71-rover-field-test.webp",
  },
  {
    id: 9,
    title: "Mentoring & Science Club Presentation",
    description: "Conducting an interactive workshop on IoT, Robotics, and Innovation with students under Udvaboni Biggan Club.",
    tag: "Mentorship",
    src: "/images/gallery/robotics-student-mentoring-session.webp",
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((index) =>
          index === null ? null : (index + 1) % galleryImages.length
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((index) =>
          index === null ? null : (index - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <>
      <CustomSection
        className="relative z-10 py-24 overflow-hidden w-full transition-colors duration-300"
        style={{
          backgroundColor: darkMode ? "#111e36" : "#ffffff",
        }}
      >
      {/* Background Glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-175 blur-[160px] rounded-full pointer-events-none transition-colors duration-300 ${
          darkMode ? "bg-indigo-600/10" : "bg-indigo-500/5"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Block */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 transition-colors duration-300"
            style={{ color: darkMode ? "#ffffff" : "#0f172a" }}
          >
            Gallery
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-purple-500 mx-auto mb-6 rounded-full origin-center"
          />
        </div>

        {/* Fluid Masonry Grid */}
        <div className="columns-1 gap-3 min-[480px]:columns-2 sm:gap-4 md:columns-3 lg:columns-4 w-full">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="break-inside-avoid group relative mb-3 w-full sm:mb-4"
              style={{
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
            >
              <motion.button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${item.title}`}
                className="relative block w-full overflow-hidden rounded-xl border text-left transition-shadow hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-purple-500"
                style={{
                  borderColor: darkMode ? "#1e293b" : "#e2e8f0",
                  backgroundColor: darkMode ? "#1e293b" : "#f8fafc",
                }}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={800}
                  height={600}
                  className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/85 via-black/20 to-transparent p-2.5 opacity-100 transition-opacity duration-300 sm:p-4 sm:opacity-0 sm:group-hover:opacity-100">
                  <div className="flex justify-end">
                    <span className="rounded-full bg-purple-600/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm sm:px-2.5 sm:text-[10px]">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-1.5 text-white">
                    <div className="min-w-0">
                      <p className="line-clamp-2 text-[11px] font-semibold sm:text-xs">
                        {item.title}
                      </p>
                      <p className="mt-0.5 hidden text-[10px] text-slate-300 opacity-90 sm:block">
                        {item.description}
                      </p>
                    </div>
                    <FaExpandAlt className="mb-0.5 h-3.5 w-3.5 shrink-0 opacity-80" />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </CustomSection>

      {selectedImage &&
        typeof document !== "undefined" &&
        createPortal(
          <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedIndex(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md select-none"
                role="dialog"
                aria-modal="true"
                aria-label={selectedImage.title}
              >
            {/* Close Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              aria-label="Close image viewer"
              className="absolute right-4 top-[calc(env(safe-area-inset-top)+1rem)] z-50 h-11 w-11 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <FaTimes className="w-5 h-5" />
            </motion.button>

            {/* Prev Arrow */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-50 h-11 w-11 -translate-y-1/2 rounded-full bg-black/50 text-white transition-colors hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12 sm:bg-white/10"
            >
              <FaArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Next Arrow */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-50 h-11 w-11 -translate-y-1/2 rounded-full bg-black/50 text-white transition-colors hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12 sm:bg-white/10"
            >
              <FaArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Lightbox Content Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.9, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -10 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[85dvh] max-w-4xl flex-col overflow-y-auto overscroll-contain rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/50 p-2">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="mx-auto max-h-[50dvh] max-w-full rounded-lg object-contain sm:max-h-[65vh]"
                  />
                </div>

                {/* Description and Title in Lightbox */}
                <div className="border-t border-slate-800/80 bg-slate-950/95 p-4 text-left sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest bg-purple-950/60 border border-purple-800/50 px-2.5 py-0.5 rounded-full">
                      {selectedImage.tag}
                    </span>
                    <span className="text-xs text-slate-400">
                      {selectedIndex !== null ? selectedIndex + 1 : 0} / {galleryImages.length}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>,
          document.body
        )}
    </>
  );
};

export default Gallery;