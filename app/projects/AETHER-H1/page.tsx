import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle,
  Cpu,
  DoorOpen,
  Droplets,
  Fan,
  Flame,
  House,
  Lightbulb,
  Monitor,
  Smartphone,
  Thermometer,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import ProjectAwards from "../../components/ProjectAwards";

const projectUrl = "https://yourtarikur.vercel.app/projects/AETHER-H1";
const projectTitle = "AETHER-H1 | Smart Home IoT Automation";
const projectDescription =
  "Explore AETHER-H1, Tarikur Rahman's first project: a NodeMCU smart-home prototype with a custom mobile app, environmental monitoring, fire alerts, and remote device control.";
const projectImage = "/images/projects/aether-h1-home-automation.webp";

export const metadata: Metadata = {
  title: projectTitle,
  description: projectDescription,
  keywords: [
    "AETHER-H1",
    "NodeMCU Smart Home",
    "Home Automation Prototype",
    "Tarikur Rahman AETHER-H1",
    "Home Automation Bangladesh",
  ],
  alternates: {
    canonical: projectUrl,
  },
  openGraph: {
    title: projectTitle,
    description: projectDescription,
    url: projectUrl,
    siteName: "Tarikur Rahman",
    type: "website",
    images: [{ url: `https://yourtarikur.vercel.app${projectImage}`, alt: projectTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: projectTitle,
    description: projectDescription,
    images: [`https://yourtarikur.vercel.app${projectImage}`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "AETHER-H1",
  description: projectDescription,
  creator: {
    "@type": "Person",
    name: "Tarikur Rahman",
    url: "https://github.com/tarikurrahmann",
  },
  keywords: ["AETHER-H1", "NodeMCU", "Smart home automation", "Connected systems"],
  url: projectUrl,
  about:
    "A NodeMCU smart-home prototype with environmental monitoring, a custom mobile app, fire alerts, and remote device control.",
};

const capabilities = [
  {
    icon: Flame,
    title: "Fire alarm",
    text: "A fire alarm function is included to alert the user to a fire-related event.",
    color: "text-rose-600 dark:text-rose-300",
  },
  {
    icon: Thermometer,
    title: "Temperature monitoring",
    text: "Temperature readings help the user keep track of conditions inside the model home.",
    color: "text-amber-600 dark:text-amber-300",
  },
  {
    icon: Droplets,
    title: "Humidity & moisture",
    text: "Humidity and moisture readings add environmental information to the system.",
    color: "text-sky-600 dark:text-sky-300",
  },
  {
    icon: Smartphone,
    title: "Custom mobile app",
    text: "A custom app gives the user a mobile interface for checking information and controlling home features.",
    color: "text-violet-600 dark:text-violet-300",
  },
  {
    icon: DoorOpen,
    title: "Remote doors & windows",
    text: "Servo motors operate the model doors and windows through remote control.",
    color: "text-emerald-600 dark:text-emerald-300",
  },
  {
    icon: Fan,
    title: "Fan & light control",
    text: "Fan and light controls bring everyday home functions into the prototype.",
    color: "text-cyan-600 dark:text-cyan-300",
  },
];

export default function AetherH1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <div className="relative min-h-screen overflow-hidden text-[var(--text-color)] transition-colors duration-500">
        <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <section className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
            <div className="py-4">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                <House className="h-4 w-4" aria-hidden="true" />
                Smart Home IoT
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Connected home systems
              </p>
              <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                AETHER<span className="text-cyan-600 dark:text-cyan-300">-H1</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-2xl">
                Smart Home IoT Automation
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                My first project: a NodeMCU-based smart-home prototype that
                brings environmental monitoring, a custom mobile app, fire
                alerts, and everyday home controls together.
              </p>
              <a
                href="#architecture"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-900/15 transition hover:-translate-y-0.5 hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-500"
              >
                Explore the build
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <figure className="group relative isolate min-h-[340px] overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl shadow-slate-950/20 sm:min-h-[440px]">
              <Image
                src={projectImage}
                alt="AETHER-H1 smart-home model with its display, fan, and remote-control elements"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Physical smart-home prototype
                </span>
                <p className="max-w-md text-lg font-semibold leading-snug text-white sm:text-xl">
                  Monitoring, alerts, and home controls in one hands-on build.
                </p>
              </figcaption>
              <div className="absolute right-5 top-5 rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  System
                </p>
                <p className="text-xl font-black">H1</p>
              </div>
            </figure>
          </section>

          <section
            aria-label="Project overview"
            className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:grid-cols-3"
          >
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:border-b-0 sm:border-r">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                <Lightbulb className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Project role
                </p>
                <p className="mt-1 font-bold">Project creator</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  My first project
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:border-b-0 sm:border-r">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Focus
                </p>
                <p className="mt-1 font-bold">Home monitoring</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Sensors &amp; alerts
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Format
                </p>
                <p className="mt-1 font-bold">Physical prototype</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  NodeMCU-based build
                </p>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                01 / The idea
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                A model home you can monitor and control.
              </h2>
              </div>
              <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:pb-1">
                My first project: a NodeMCU-based smart home that brings
                environmental sensing, a display, custom mobile-app control,
                and everyday home functions together.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm dark:border-white/10 dark:bg-slate-900/75">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative overflow-hidden bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                        System flow
                      </p>
                      <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                        AETHER-H1
                      </span>
                    </div>

                    <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <Thermometer className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                        <p className="mt-3 text-sm font-bold">Sensors</p>
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          Temperature · Humidity · Moisture
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                      <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-4">
                        <Cpu className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                        <p className="mt-3 text-sm font-bold">NodeMCU</p>
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          Main controller
                        </p>
                      </div>
                    </div>

                    <div className="ml-[calc(75%-1rem)] h-8 w-px bg-gradient-to-b from-cyan-300/70 to-cyan-300/10" />

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <Monitor className="h-5 w-5 text-violet-300" aria-hidden="true" />
                        <p className="mt-3 text-sm font-bold">Display</p>
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          System output
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <Smartphone className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                        <p className="mt-3 text-sm font-bold">Mobile app</p>
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          Monitor &amp; control
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                    From readings to response
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    One connected model. Everyday home functions.
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    Environmental readings and a fire alarm provide system
                    information. The display shows output on the model, while
                    the custom app offers a way to monitor and remotely control
                    home features.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-white/10">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-300">
                        <Flame className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold">Fire alarm</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-white/10">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                        <House className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold">Servo doors &amp; windows</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-white/10 sm:col-span-2">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-300">
                        <Fan className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold">Fan &amp; light control</span>
                      <Lightbulb className="ml-auto h-4 w-4 text-amber-500" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="architecture" className="mt-24 scroll-mt-28">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                02 / Inside the build
              </p>
              <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                <Cpu className="h-7 w-7 shrink-0 text-cyan-500" aria-hidden="true" />
                Technical architecture
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                A controller connects the prototype&apos;s user interfaces,
                environmental monitoring, and physical home controls.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
                <h3 className="mb-5 text-xl font-bold text-cyan-700 dark:text-cyan-300">
                  Controller &amp; interfaces
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500" aria-hidden="true" />
                    <span>NodeMCU development board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500" aria-hidden="true" />
                    <span>Display for system output</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500" aria-hidden="true" />
                    <span>Custom mobile app for monitoring and control</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
                <h3 className="mb-5 text-xl font-bold text-amber-700 dark:text-amber-300">
                  Sensors &amp; home controls
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>Temperature, humidity, and moisture monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>Fire alarm function</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>Servo-controlled doors and windows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>Fan and light control</span>
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                03 / Everyday home functions
              </p>
              <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                <Award className="h-7 w-7 shrink-0 text-violet-500" aria-hidden="true" />
                Core capabilities
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text, color }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-slate-900/75"
                >
                  <div className={`flex items-center gap-3 font-bold ${color}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <h3>{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <figure className="group relative isolate min-h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10 sm:min-h-[420px]">
              <Image
                src="/images/presentation.webp"
                alt="PHOENIX-F1 science fair presentation and live autonomous navigation demonstration"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  National Science Fest 2025
                </p>
                <p className="mt-2 text-lg font-semibold sm:text-xl">
                  AETHER-H1 and PHOENIX-F1, presented together.
                </p>
              </figcaption>
            </figure>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                04 / Shared showcase
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Two projects, one presentation.
              </h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                I often present AETHER-H1 alongside PHOENIX-F1. At the National
                Science Fest 2025, our team showcased both projects together,
                and they were selected among the Top 10 finalists.
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                The projects explore different ideas—from connected home
                monitoring and control to firefighting robotics—but share the
                same spirit of hands-on engineering.
              </p>
              <Link
                href="/projects/PHOENIX-F1"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 transition hover:gap-3 dark:text-cyan-200"
              >
                Explore PHOENIX-F1
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="mt-24">
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/50 to-sky-500/10 p-7 dark:from-cyan-500/10 dark:via-slate-900/70 dark:to-sky-500/10 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                Project approach
              </p>
              <p className="mt-4 max-w-4xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                Bring home information and everyday controls into one connected
                prototype.
              </p>
              <p className="mt-5 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
                AETHER-H1 was the starting point for my work with embedded
                systems: a first build combining monitoring, a display, a
                custom app, and physical home controls.
              </p>
            </div>
          </section>

          <ProjectAwards project="AETHER-H1" />

          <footer className="mt-20 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>AETHER-H1 · Smart Home IoT Automation</p>
            <p className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
              First project · Smart-home prototype
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
