import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import ProjectAwards from '../../components/ProjectAwards';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle,
  Code,
  Cpu,
  Flame,
  ShieldAlert,
} from 'lucide-react';

const projectUrl = 'https://yourtarikur.vercel.app/projects/PHOENIX-F1';
const projectTitle = 'PHOENIX-F1 | Firefighting Defense Rover';
const projectDescription = 'Official project specifications of PHOENIX-F1, an autonomous firefighting defense rover designed for hazardous operations by Tarikur Rahman.';

export const metadata: Metadata = {
  title: projectTitle,
  description: projectDescription,
  keywords: [
    'PHOENIX-F1',
    'Firefighting Defense Rover',
    'Tarikur Rahman PHOENIX-F1',
    'Firefighting Robotics',
    'Robotics Bangladesh',
  ],
  alternates: {
    canonical: projectUrl,
  },
  openGraph: {
    title: projectTitle,
    description: projectDescription,
    url: projectUrl,
    siteName: 'Tarikur Rahman',
    type: 'website',
    images: [
      {
        url: 'https://yourtarikur.vercel.app/images/projects/phoenix-f1-rover-circuit.webp',
        alt: projectTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: projectTitle,
    description: projectDescription,
    images: ['https://yourtarikur.vercel.app/images/projects/phoenix-f1-rover-circuit.webp'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'PHOENIX-F1',
  description: projectDescription,
  creator: {
    '@type': 'Person',
    name: 'Tarikur Rahman',
    url: 'https://github.com/tarikurrahmann',
  },
  keywords: [
    'PHOENIX-F1',
    'Firefighting Defense Rover',
    'Tarikur Rahman PHOENIX-F1',
    'Firefighting Robotics',
    'Robotics Bangladesh',
  ],
  url: projectUrl,
  about: 'Autonomous firefighting defense rover designed for hazardous emergency operations.',
};

export default function PhoenixF1Page() {
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                <Flame className="h-4 w-4" aria-hidden="true" />
                Autonomous Robotics
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Fire-response robotics
              </p>
              <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                PHOENIX
                <span className="ml-2 text-emerald-600 dark:text-emerald-400">-F1</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-2xl">
                Firefighting Defense Rover
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Designed to extinguish fires autonomously in high-risk zones,
                eliminating the need to put firefighters&apos; lives in direct
                danger.
              </p>
              <a
                href="#architecture"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
              >
                Explore the build
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <figure className="group relative isolate min-h-[340px] overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl shadow-slate-950/20 sm:min-h-[440px]">
              <Image
                src="/images/projects/phoenix-f1-rover-circuit.webp"
                alt="PHOENIX-F1 autonomous firefighting rover prototype with water-spraying arm"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Functional prototype
                </span>
                <p className="max-w-md text-lg font-semibold leading-snug text-white sm:text-xl">
                  Built to bring robotic response closer to the people who need
                  it.
                </p>
              </figcaption>
              <div className="absolute right-5 top-5 rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Project
                </p>
                <p className="text-xl font-black">F1</p>
              </div>
            </figure>
          </section>

          <section
            aria-label="Project overview"
            className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:grid-cols-3"
          >
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:border-b-0 sm:border-r">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                <Code className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">My role</p>
                <p className="mt-1 font-bold">Lead Coder</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Core programming logic</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:border-b-0 sm:border-r">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-300">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Timeline</p>
                <p className="mt-1 font-bold">Dec 2023 – Feb 2024</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Research &amp; development</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</p>
                <p className="mt-1 font-bold">Functional prototype</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Tested &amp; validated</p>
              </div>
            </div>
          </section>

        {/* 2. THE PROBLEM & MOTIVATION */}
        <section className="mt-24">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="h-8 w-8 text-rose-500" />
              <h2 className="text-2xl sm:text-3xl font-bold">The Problem & Real-World Challenge</h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                According to the annual report of the Fire Service and Civil Defense, a staggering <strong className="text-rose-500 font-semibold">26,595 fire incidents</strong> occurred in Bangladesh in 2024—averaging roughly 73 incidents per day. These disasters resulted in at least 140 fatalities and 341 injuries. Tragically, 2 firefighter lives were lost and 37 were injured while fulfilling their professional duties.
              </p>
              
              <div className="mt-6 border-l-4 border-rose-500/80 rounded-r-lg bg-rose-500/5 p-4">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">The Catalyst Incident</h4>
                <p className="text-sm">
                  A specific catalyst for this project was the devastating fire at the Bangladesh Secretariat on December 25, 2024. While battling the midnight blaze in Building No. 7, firefighter <strong>Md. Sohanur Zaman Nayan</strong> was fatally injured while carrying a water hose across the road. Witnessing such preventable tragedies inspired the creation of PHOENIX-F1 to keep frontline responders out of harm&apos;s way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE PHILOSOPHY */}
        <section className="mt-16">
          <blockquote className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-white/50 to-amber-500/10 p-7 dark:from-emerald-500/10 dark:via-slate-900/70 dark:to-amber-500/10 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Project mission
            </p>
            <p className="mt-4 max-w-4xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              &ldquo;Saving human lives by substituting high-risk human intervention with autonomous machinery.&rdquo;
            </p>
            <footer className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
              PHOENIX-F1 Mission Philosophy
            </footer>
          </blockquote>
        </section>

        {/* 4. TECH STACK & ARCHITECTURE */}
        <section id="architecture" className="mt-24 scroll-mt-28">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              02 / Inside the build
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              <Cpu className="h-7 w-7 text-emerald-500" /> Technical Architecture
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Embedded control, sensing, and mobility hardware come together in a functional firefighting prototype.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Hardware & Microcontrollers</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Arduino Microcontroller</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> L293D Motor Driver</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> 5V Relay Module</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> SG90 Servo Motor</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> 4-Wheel Chassis Kit (3-6V Gear Motors)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
              <h3 className="text-xl font-bold mb-4 text-amber-700 dark:text-amber-300">Software & Programming</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Python</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Arduino IDE (C/C++)</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Custom Sensor Signal Processing Logic</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Motor Control & Steering Logic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CORE CAPABILITIES & RESULTS */}
        <section className="mt-24">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
              03 / What it is designed to do
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              <Award className="h-7 w-7 text-violet-500" /> Capabilities &amp; Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-slate-900/75">
              <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Autonomous Suppression</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Navigates hazardous zones independently to extinguish fires without requiring firefighters in the danger area.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-slate-900/75">
              <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Risk Reduction</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Directly reduces operational casualties by sending mechanical payloads into dangerous, flame-prone environments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-slate-900/75">
              <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Precision Response</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Handles early-stage critical fire targets safely using precise automated triggers and sensor evaluation.
              </p>
            </div>
          </div>
        </section>

        <section id="exhibition" className="mt-24 scroll-mt-28">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
              04 / Out in the field
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Exhibition Highlights
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Showcasing PHOENIX-F1 in front of peers and judges with live demos
              and technical explanation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.25fr_0.75fr]">
            <figure className="group relative isolate min-h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10 sm:min-h-[440px]">
              <Image
                src="/images/presentation.webp"
                alt="PHOENIX-F1 science fair presentation and live autonomous navigation demonstration"
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Science fair presentation
                </p>
                <p className="mt-2 text-lg font-semibold sm:text-2xl">
                  Live demonstration of autonomous navigation.
                </p>
              </figcaption>
            </figure>

            <figure className="group relative isolate min-h-[260px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10 sm:min-h-[440px]">
              <Image
                src="/images/booth.webp"
                alt="PHOENIX-F1 robotics project showcased at a science fair booth"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Project showcase
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Robotics and safety innovations on display.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <ProjectAwards project="PHOENIX-F1" />

        <footer className="mt-20 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>PHOENIX-F1 · Firefighting Defense Rover</p>
          <p className="inline-flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            Functional prototype · Tested &amp; validated
          </p>
        </footer>

      </main>
    </div>
    </>
  );
}