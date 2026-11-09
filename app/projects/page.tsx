import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Flame,
  Globe,
  Palette,
  Radar,
  Sparkles,
  Wifi,
} from "lucide-react";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Projects | Tarikur Rahman — Robotics Inventor",
  description:
    "Explore robotics builds and branded web experiences by Tarikur Rahman, from field-ready rovers to creative and team websites.",
  alternates: {
    canonical: "https://yourtarikur.vercel.app/projects/",
  },
  openGraph: {
    title: "Engineering & Web Projects | Tarikur Rahman",
    description:
      "Robotics and digital experiences built with thoughtful engineering and distinctive visual identities.",
    url: "https://yourtarikur.vercel.app/projects/",
    siteName: "Tarikur Rahman",
    type: "website",
    images: [
      {
        url: "https://yourtarikur.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Tarikur Rahman robotics projects",
      },
    ],
  },
};

const projects = [
  {
    name: "PHANTOM-X",
    category: "Tactical defense rover",
    description:
      "A remote-operated field rover designed for reconnaissance and hazardous-environment response—keeping people farther from danger.",
    image: "/images/projects/phantom-x-rover-hero.webp",
    imageAlt: "PHANTOM-X tactical rover with its robotic arm",
    href: "/projects/PHANTOM-X",
    role: "System Architect & Developer",
    status: "Functional prototype",
    accent: "violet",
    icon: Radar,
    tags: ["Mobile robotics", "Remote operation", "Field systems"],
  },
  {
    name: "PHOENIX-F1",
    category: "Firefighting defense rover",
    description:
      "An autonomous firefighting rover created to support emergency response in high-risk zones and reduce direct exposure for frontline responders.",
    image: "/images/projects/phoenix-f1-rover-circuit.webp",
    imageAlt: "PHOENIX-F1 firefighting rover prototype",
    href: "/projects/PHOENIX-F1",
    role: "Lead Coder",
    status: "Functional prototype",
    accent: "emerald",
    icon: Flame,
    tags: ["Fire response", "Autonomous robotics", "Safety-first design"],
  },
  {
    name: "AETHER-H1",
    category: "Smart home IoT automation",
    description:
      "My first project: a NodeMCU smart-home prototype with a custom mobile app, environmental monitoring, fire alerts, servo-operated doors and windows, and fan and light control.",
    image: "/images/projects/aether-h1-home-automation.webp",
    imageAlt: "AETHER-H1 smart-home automation prototype",
    href: "/projects/AETHER-H1",
    role: "Project creator",
    status: "Prototype showcase",
    accent: "cyan",
    icon: Wifi,
    tags: ["Internet of Things", "Home automation", "Connected systems"],
  },
];

const webProjects = [
  {
    name: "TEAM DEMON71",
    category: "Rover team website",
    description:
      "An official home for Team DEMON71, introducing the team, its mission, and the rover projects behind its work.",
    href: "https://teamdemon71.vercel.app/",
    domain: "teamdemon71.vercel.app",
    image: "/assets/website/team-demon71-site.webp",
    imageAlt: "Screenshot of the official Team DEMON71 website",
    mark: "D71",
    previewLabel: "AUTONOMOUS ROVER TEAM",
    previewTitle: "Built to explore.",
    previewNote: "TEAM • MISSION • PROJECTS",
    accent: "lime",
    tags: ["Team identity", "Robotics", "Official website"],
  },
  {
    name: "FAYZEE CREATIVE",
    category: "Creative agency",
    description:
      "A visual storytelling agency website positioning Fayzee Creative around video, brand stories, and ambitious clients.",
    href: "https://fayzeecreative.vercel.app/",
    domain: "fayzeecreative.vercel.app",
    image: "/assets/website/fayzee-creative-site.webp",
    imageAlt: "Screenshot of the Fayzee Creative agency website",
    mark: "F",
    previewLabel: "VISUAL STORYTELLING",
    previewTitle: "Stories that inspire.",
    previewNote: "CREATE • CONNECT • GROW",
    accent: "gold",
    tags: ["Agency identity", "Visual storytelling", "Creative services"],
  },
  {
    name: "DEMON71",
    category: "Robotics brand website",
    description:
      "A bold, futuristic digital presence for DEMON71, presenting its robotics work through a mission-control-inspired interface.",
    href: "https://demon71.netlify.app/",
    domain: "demon71.netlify.app",
    image: "/assets/website/demon-71-site.webp",
    imageAlt: "Screenshot of the DEMON71 robotics website",
    mark: "D—71",
    previewLabel: "ROBOTICS • INTELLIGENCE • SYSTEMS",
    previewTitle: "Mission engaged.",
    previewNote: "OPERATOR DATABASE / 071",
    accent: "cyan",
    tags: ["Robotics identity", "Mission-led UI", "Digital experience"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden text-[var(--text-color)]">
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-10">
          <header className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Selected engineering work
            </div>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Projects built for{" "}
              <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                real-world impact.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              I bring ambitious ideas to life through robotics and digital
              experiences—connecting thoughtful engineering with clear,
              distinctive design.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#featured-projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:text-indigo-300"
              >
                Explore robotics
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#web-projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-200"
              >
                Explore web &amp; brand work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </header>

          <section
            id="featured-projects"
            aria-labelledby="featured-heading"
            className="mt-20 scroll-mt-28 sm:mt-24"
          >
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                  The featured builds
                </p>
                <h2
                  id="featured-heading"
                  className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl"
                >
                  From concept to field-ready thinking.
                </h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                03 featured robotics projects
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => {
                const Icon = project.icon;
                const isViolet = project.accent === "violet";
                const iconColor =
                  project.accent === "cyan"
                    ? "text-cyan-200"
                    : isViolet
                      ? "text-violet-300"
                      : "text-emerald-300";

                return (
                  <article
                    key={project.name}
                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/75 shadow-xl shadow-slate-900/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900/65 dark:shadow-black/10 dark:hover:shadow-black/25"
                  >
                    <Link
                      href={project.href}
                      className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
                      aria-label={`Explore ${project.name}: ${project.category}`}
                    >
                      <div className="relative h-64 overflow-hidden bg-slate-950 sm:h-80">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-slate-950/5" />
                        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                          <Icon className={`h-4 w-4 ${iconColor}`} aria-hidden="true" />
                          {project.category}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                          <div>
                            <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald-200">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                              {project.status}
                            </p>
                            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                              {project.name}
                            </h3>
                          </div>
                          <span className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition group-hover:rotate-45 group-hover:bg-white group-hover:text-slate-950">
                            <ArrowUpRight
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-7">
                        <p className="min-h-[3.5rem] text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-5 text-xs dark:border-slate-800 sm:text-sm">
                          <span className="text-slate-500 dark:text-slate-400">My role</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-100">
                            {project.role}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            id="web-projects"
            aria-labelledby="web-projects-heading"
            className="mt-20 scroll-mt-28 sm:mt-24"
          >
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                  Web &amp; brand experiences
                </p>
                <h2
                  id="web-projects-heading"
                  className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl"
                >
                  Distinct brands, brought to life online.
                </h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                03 live websites
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {webProjects.map((project) => {
                const isLime = project.accent === "lime";
                const isGold = project.accent === "gold";
                const accentText = isLime
                  ? "text-lime-300"
                  : isGold
                    ? "text-amber-300"
                    : "text-cyan-300";
                const accentBorder = isLime
                  ? "border-lime-300/30"
                  : isGold
                    ? "border-amber-300/30"
                    : "border-cyan-300/30";
                const accentDot = isLime
                  ? "bg-lime-300"
                  : isGold
                    ? "bg-amber-300"
                    : "bg-cyan-300";
                const Icon = isGold ? Palette : Globe;

                return (
                  <article
                    key={project.name}
                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/75 shadow-xl shadow-slate-900/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900/65 dark:shadow-black/10 dark:hover:shadow-black/25"
                  >
                    {project.image ? (
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div
                        className={`relative flex h-56 flex-col justify-between overflow-hidden p-6 text-white sm:h-64 sm:p-7 ${
                          isGold
                            ? "bg-[radial-gradient(ellipse_at_85%_5%,rgba(229,169,60,0.24),transparent_48%),linear-gradient(135deg,#171717,#090909)]"
                            : isLime
                              ? "bg-[radial-gradient(ellipse_at_85%_5%,rgba(190,242,100,0.2),transparent_48%),linear-gradient(135deg,#111a13,#080b09)]"
                              : "bg-[radial-gradient(ellipse_at_85%_5%,rgba(34,211,238,0.23),transparent_48%),linear-gradient(135deg,#101821,#080b10)]"
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-12 -top-14 h-52 w-52 rounded-full border border-white/10"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-4 -top-6 h-36 w-36 rounded-full border border-white/10"
                        />
                        <div className="relative flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-12 min-w-12 items-center justify-center rounded-xl border px-2 text-sm font-black tracking-tight ${accentBorder} ${accentText} bg-white/[0.04]`}
                            >
                              {project.mark}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                              {project.previewLabel}
                            </span>
                          </div>
                        </div>

                        <div className="relative">
                          <p className={`mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${accentText}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${accentDot}`} />
                            {project.category}
                          </p>
                          <p className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                            {project.previewTitle}
                          </p>
                          <p className="mt-2 text-[10px] font-medium tracking-[0.17em] text-white/45">
                            {project.previewNote}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                            {project.name}
                          </h3>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {project.domain}
                          </p>
                        </div>
                        <Icon
                          className={`mt-1 h-5 w-5 shrink-0 ${accentText}`}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the live ${project.name} website`}
                        className="mt-5 inline-flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800/70"
                      >
                        Visit live website
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-3xl border border-indigo-500/15 bg-indigo-500/[0.04] px-6 py-8 dark:bg-indigo-400/[0.04] sm:mt-20 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                  The idea behind the work
                </p>
                <p className="mt-3 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  Build machines to take on the risk—not the people.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-200"
              >
                Let&apos;s build something
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
