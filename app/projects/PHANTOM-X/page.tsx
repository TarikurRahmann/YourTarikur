import type { Metadata } from 'next';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle,
  Cpu,
  Eye,
  Radar,
  Radio,
  ShieldAlert,
  Target,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import ProjectAwards from '../../components/ProjectAwards';

const projectUrl = 'https://yourtarikur.vercel.app/projects/PHANTOM-X';
const projectTitle = 'PHANTOM-X | Tactical Defense Rover';
const projectDescription = 'Detailed project overview of PHANTOM-X, an advanced tactical defense and autonomous field rover engineered by Tarikur Rahman.';

export const metadata: Metadata = {
  title: projectTitle,
  description: projectDescription,
  keywords: [
    'PHANTOM-X',
    'Tactical Defense Rover',
    'Tarikur Rahman PHANTOM-X',
    'Autonomous Rover',
    'Robotics Research Bangladesh',
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
        url: 'https://yourtarikur.vercel.app/images/projects/phantom-x-rover-hero.webp',
        alt: projectTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: projectTitle,
    description: projectDescription,
    images: ['https://yourtarikur.vercel.app/images/projects/phantom-x-rover-hero.webp'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'PHANTOM-X',
  description: projectDescription,
  creator: {
    '@type': 'Person',
    name: 'Tarikur Rahman',
    url: 'https://github.com/tarikurrahmann',
  },
  keywords: [
    'PHANTOM-X',
    'Tactical Defense Rover',
    'Tarikur Rahman PHANTOM-X',
    'Autonomous Rover',
    'Robotics Research Bangladesh',
  ],
  url: projectUrl,
  about: 'Advanced tactical defense and autonomous field rover built for high-risk reconnaissance and field operations.',
};

const capabilities = [
  {
    icon: Zap,
    title: 'Remote EOD handling',
    text: 'The precision robotic arm is designed for remote payload handling in hazardous environments.',
    color: 'text-emerald-600 dark:text-emerald-300',
  },
  {
    icon: Eye,
    title: 'Surveillance & vision',
    text: 'Computer vision supports real-time observation, threat detection, and reconnaissance.',
    color: 'text-sky-600 dark:text-sky-300',
  },
  {
    icon: Radar,
    title: 'Subterranean sensing',
    text: 'A dedicated sensor payload is designed to detect and map hidden landmines and IEDs.',
    color: 'text-violet-600 dark:text-violet-300',
  },
  {
    icon: Radio,
    title: 'Electronic warfare',
    text: 'The integrated module is designed to disrupt communications and RF signals within an 80–100m radius.',
    color: 'text-amber-600 dark:text-amber-300',
  },
  {
    icon: Target,
    title: 'Smart pathfinding',
    text: 'Sensor data helps assess terrain in real time to support safer navigation.',
    color: 'text-cyan-600 dark:text-cyan-300',
  },
  {
    icon: ShieldAlert,
    title: 'Autonomous failsafe',
    text: 'A planned self-neutralization payload is intended to prevent capture and unauthorized reverse-engineering.',
    color: 'text-rose-600 dark:text-rose-300',
  },
];

const futureEnhancements = [
  {
    number: 'A',
    title: 'DEMON71 drone integration',
    description: 'Aerial companion drone integration for extended flight, mapping, and surveillance.',
  },
  {
    number: 'B',
    title: 'AI aim bot system',
    description: 'Automated threat acquisition and target-locking via computer vision.',
  },
  {
    number: 'C',
    title: 'Advanced optics upgrade',
    description: 'Upgrading thermal and night-vision range for extended fidelity.',
  },
];

const hardwareSpecs = [
  'Premium aluminum & sheet metal hybrid chassis',
  'Heavy-duty 4WD & off-road suspension',
  'High-torque 2-DOF robotic arm (40KG base / 35KG elbow)',
  'Precision tactical end-effector gripper',
];

const processingSpecs = [
  'Raspberry Pi 4 (8GB RAM) central computer',
  'Dual night-vision & thermal tactical cameras',
  'Global low-latency telemetry network',
  'High-capacity 12V 5200mAh battery pack',
];

const projectImages = [
  {
    src: '/images/projects/phantom-x-project-showcase.webp',
    alt: 'PHANTOM-X rover displayed during a project exhibition',
    caption: 'Prototype showcase',
    description: 'The team presents the PHANTOM-X prototype and its onboard hardware at an exhibition.',
  },
  {
    src: '/images/projects/phantom-x-outdoor-field-test.webp',
    alt: 'PHANTOM-X rover and operator during an outdoor field test',
    caption: 'Outdoor field test',
    description: 'An outdoor demonstration of the rover alongside its remote operator.',
  },
];

export default function PhantomXPage() {
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                <Radar className="h-4 w-4" aria-hidden="true" />
                Next-gen tactical defense
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Autonomous field systems
              </p>
              <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                PHANTOM<span className="text-violet-600 dark:text-violet-400">-X</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-2xl">
                Tactical Defense Rover
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Designed for high-risk reconnaissance, subterranean threat detection, and remote
                response—keeping people farther from hazardous environments.
              </p>
              <a
                href="#architecture"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-900/15 transition hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
              >
                Explore the system
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <figure className="group relative isolate min-h-[340px] overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl shadow-slate-950/20 sm:min-h-[440px]">
              <Image
                src="/images/projects/phantom-x-rover-hero.webp"
                alt="PHANTOM-X four-wheel tactical rover with a robotic manipulator arm"
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
                  Remote capability for missions where human exposure is not an option.
                </p>
              </figcaption>
              <div className="absolute right-5 top-5 rounded-2xl border border-white/20 bg-slate-950/50 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">System</p>
                <p className="text-xl font-black">PX</p>
              </div>
            </figure>
          </section>

          <section
            aria-label="Project overview"
            className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:grid-cols-3"
          >
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:border-b-0 sm:border-r">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">My role</p>
                <p className="mt-1 font-bold">System Architect &amp; Developer</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Architecture &amp; final execution</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:border-b-0 sm:border-r">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-300">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Timeline</p>
                <p className="mt-1 font-bold">Sep 2025 – May 2026</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Research to development</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Field test status</p>
                <p className="mt-1 font-bold">Functional prototype</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Tested &amp; validated</p>
              </div>
            </div>
          </section>

          <section className="mt-24 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">01 / The challenge</p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Respond to danger without sending people into it.
              </h2>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                During national defense exhibitions like{' '}
                <strong className="text-violet-600 dark:text-violet-300">&ldquo;Onirban&rdquo;</strong>,
                the absence of indigenous high-tech robotics tailored for tactical intelligence
                operations becomes apparent. Bomb blasts and landmine explosions continue to cause
                tragic casualties.
              </p>
              <div className="mt-7 rounded-2xl border-l-4 border-violet-500 bg-violet-500/5 p-5">
                <h3 className="font-bold">Subterranean threat factor</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hidden landmines and abandoned explosives threaten civilian lives and personnel.
                  PHANTOM-X is designed to reduce danger for human teams by enabling remote
                  response in hazardous zones.
                </p>
              </div>
            </div>
            <figure className="group relative isolate min-h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10 sm:min-h-[420px]">
              <Image
                src="/images/projects/phantom-x-exhibition-demo.webp"
                alt="PHANTOM-X prototype demonstrated at an indoor exhibition"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-6 pt-16 text-sm font-medium text-white">
                PHANTOM-X exhibition · Prototype demonstration
              </figcaption>
            </figure>
          </section>

          <section className="mt-20">
            <blockquote className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-white/50 to-indigo-500/10 p-7 dark:from-violet-500/10 dark:via-slate-900/70 dark:to-indigo-500/10 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                Project philosophy
              </p>
              <p className="mt-4 max-w-4xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                &ldquo;Human life is more valuable than any machine.&rdquo;
              </p>
              <footer className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                PHANTOM-X Tactical Philosophy
              </footer>
            </blockquote>
          </section>

          <section id="architecture" className="mt-24 scroll-mt-28">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                02 / Inside the build
              </p>
              <h2 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                <Cpu className="h-7 w-7 shrink-0 text-emerald-500" aria-hidden="true" />
                Technical architecture
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
                <h3 className="mb-5 text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  Hardware &amp; mechanics
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  {hardwareSpecs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
                <h3 className="mb-5 text-xl font-bold text-amber-700 dark:text-amber-300">
                  Processing, vision &amp; communications
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  {processingSpecs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                03 / Mission capabilities
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
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                04 / In development
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                System architecture &amp; development
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                Engineered by Tarikur Rahman as System Architect &amp; Developer. Research and
                planning ran from September to March, followed by execution from April to May.
              </p>
            </div>
            <figure className="group relative isolate min-h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10 sm:min-h-[460px]">
              <Image
                src="/images/projects/phantom-x-team-exhibition.webp"
                alt="Tarikur Rahman and his team presenting their rover at an exhibition"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Built for high-risk environments
                </p>
                <p className="mt-2 max-w-2xl text-xl font-semibold sm:text-2xl">
                  &ldquo;Even if a 4 to 5 lakh BDT unit is completely destroyed, saving a single
                  life represents total success.&rdquo;
                </p>
              </figcaption>
            </figure>
          </section>

          <section className="mt-24 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-7 dark:bg-violet-500/5 sm:p-10">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                05 / What comes next
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Future enhancements
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {futureEnhancements.map(({ number, title, description }) => (
                <article
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-900/75"
                >
                  <p className="text-sm font-black tracking-[0.18em] text-violet-600 dark:text-violet-300">
                    {number}
                  </p>
                  <h3 className="mt-3 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="project-gallery-title" className="mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
                PHANTOM-X in action
              </p>
              <h2 id="project-gallery-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Project gallery
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                From presenting the prototype at an exhibition to testing it outdoors, these
                moments show PHANTOM-X moving from a built system to real-world demonstrations.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {projectImages.map(({ src, alt, caption, description }) => (
                <figure
                  key={src}
                  className="group relative isolate aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 pb-5 pt-16 text-white">
                    <p className="text-sm font-bold">{caption}</p>
                    <p className="mt-1 max-w-lg text-xs leading-5 text-white/80 sm:text-sm">
                      {description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <ProjectAwards project="PHANTOM-X" />

          <footer className="mt-20 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>PHANTOM-X · Tactical Defense Rover</p>
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
