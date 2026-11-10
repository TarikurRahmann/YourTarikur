"use client";

import { useContext, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const sectionLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Awards", href: "/#awards" },
  { label: "Gallery", href: "/#gallery" }, // 🛠️ ফিক্স করা হয়েছে: research এর বদলে gallery দেওয়া হলো
  { label: "Contact", href: "/#contact" },
];

const projectLinks = [
  { label: "All Projects", href: "/projects/", desc: "Explore featured builds" },
  { label: "AETHER-H1", href: "/projects/AETHER-H1/", desc: "NodeMCU smart home with app control" },
  { label: "PHOENIX-F1", href: "/projects/PHOENIX-F1/", desc: "Fire-response rover" },
  { label: "PHANTOM-X", href: "/projects/PHANTOM-X/", desc: "Remote-operated tactical defense rover" },
];

const Navbar = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);

  // 🛠️ ফিক্স করা হয়েছে: রুট পরিবর্তন হলে মেনু ও ড্রপডাউন বন্ধ করার হ্যান্ডলার
  useEffect(() => {
    const handlePathChange = () => {
      setMenuOpen(false);
      setProjectsDropdownOpen(false);
    };
    handlePathChange();
  }, [pathname]);

  // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ হওয়া
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // স্ক্রল হলে ব্যাকগ্রাউন্ড টগল
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // মোবাইল মেনু খোলা থাকলে বডি স্ক্রল বন্ধ করা
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    closeMenuButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false);

      if (href.startsWith("/#")) {
        const id = href.replace("/#", "");
        if (pathname === "/") {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    },
    [pathname]
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "py-2.5 sm:py-3 bg-white/80 dark:bg-[#111e36]/85 backdrop-blur-md shadow-sm border-slate-200/50 dark:border-slate-800/40"
            : "py-3 sm:py-6 bg-transparent border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex min-h-11 items-center text-lg font-bold tracking-tight bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Tarikur Rahman
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/40 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-700/30">
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-medium px-4 py-2 rounded-full transition-all text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900 shadow-none hover:shadow-sm"
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setProjectsDropdownOpen((prev) => !prev);
                }}
                className={`text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1 transition-all ${
                  projectsDropdownOpen || projectLinks.some((l) => normalizedPathname === l.href.replace(/\/$/, ""))
                    ? "text-purple-600 dark:text-white bg-white dark:bg-slate-900 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900"
                }`}
              >
                Projects
                <FiChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    projectsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {projectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-64 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111e36] p-2 shadow-xl backdrop-blur-xl z-50"
                  >
                    {projectLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setProjectsDropdownOpen(false)}
                        className={`flex flex-col gap-0.5 p-3 rounded-lg text-left transition-colors ${
                          normalizedPathname === link.href.replace(/\/$/, "")
                            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        <span className="text-xs font-semibold">{link.label}</span>
                        <span className="text-[10px] text-slate-400 font-light">{link.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMode}
              className="h-11 w-11 rounded-full border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
            </button>

            <button
              type="button"
              ref={menuButtonRef}
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden h-11 w-11 rounded-full border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-300 transition-all active:scale-95 active:bg-slate-100 dark:active:bg-slate-800"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            ref={menuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="fixed inset-0 z-60 h-dvh md:hidden bg-white dark:bg-[#111e36] flex flex-col px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6"
          >
            <div className="mb-5 flex shrink-0 items-center justify-between">
              <div>
                <p
                  id="mobile-navigation-title"
                  className="text-lg font-bold tracking-tight bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent"
                >
                  Tarikur Rahman
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Explore the portfolio
                </p>
              </div>
              <button
                type="button"
                ref={closeMenuButtonRef}
                onClick={() => {
                  setMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label="Close menu"
                className="h-11 w-11 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 transition-colors active:bg-slate-100 dark:text-slate-300 dark:active:bg-slate-800"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain -mx-2 px-2"
            >
              <div className="flex flex-col gap-5 pb-4">
                <section aria-labelledby="mobile-sections-title">
                  <p
                    id="mobile-sections-title"
                    className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
                  >
                    Sections
                  </p>
                  <div className="flex flex-col gap-1">
                    {sectionLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="flex min-h-12 items-center rounded-xl px-3 text-lg font-semibold text-slate-800 transition-colors active:bg-purple-500/10 active:text-purple-600 dark:text-slate-100 dark:active:bg-purple-400/10 dark:active:text-purple-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="mobile-projects-title">
                  <p
                    id="mobile-projects-title"
                    className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
                  >
                    Projects
                  </p>
                  <div className="flex flex-col gap-1">
                    {projectLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex min-h-14 flex-col justify-center rounded-xl px-3 py-2 transition-colors active:bg-purple-500/10 ${
                          normalizedPathname === link.href.replace(/\/$/, "")
                            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <span className="text-base font-semibold">{link.label}</span>
                        <span className="mt-0.5 text-xs font-light text-slate-400 dark:text-slate-500">
                          {link.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </nav>
            <div className="mt-3 flex shrink-0 items-center justify-between border-t border-slate-200/80 pt-4 dark:border-slate-800">
              <p className="max-w-40 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Turning ideas into real-world technology.
              </p>
              <Link
                href="/#contact"
                onClick={() => handleNavClick("/#contact")}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-purple-600 px-4 text-sm font-semibold text-white transition-colors active:bg-purple-700"
              >
                Say hello <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
      )}
    </>
  );
};

export default Navbar;