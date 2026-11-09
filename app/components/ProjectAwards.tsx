"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Globe } from "lucide-react";
import { AWARDS, UPCOMING_PROJECT_EVENTS } from "../constants";

type ProjectName = "AETHER-H1" | "PHANTOM-X" | "PHOENIX-F1";
type Recognition = {
  year: string;
  date?: string;
  position: string;
  level: string;
};
type ProjectTimelineItem = {
  year: string;
  date?: string;
  event: string;
  logos: string[];
  qualification?: string;
  qualificationFlag?: string;
  location?: string;
  status: "award" | "upcoming";
  recognitions: Recognition[];
};

const groupedEvent = "47th National Science & Technology Week 2026";

function formatDate(date?: string, year?: string) {
  if (!date) return year ?? "";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getRecognitionStyle(position: string) {
  if (position.includes("Gold Medalist") || position.includes("1st Place") || position === "Champion") {
    return "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200";
  }
  if (position.includes("Finalist")) {
    return "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200";
  }
  if (position.includes("5th Place")) {
    return "border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-200";
  }
  return "border-slate-300 bg-slate-50 text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200";
}

export default function ProjectAwards({ project }: { project: ProjectName }) {
  const reduceMotion = useReducedMotion();
  const awards: ProjectTimelineItem[] = Object.entries(AWARDS).flatMap(([category, entries]) =>
    entries
      .filter((award) => award.projects?.includes(project))
      .map((award) => ({
        year: award.year,
        date: award.date,
        event: award.event,
        logos: [award.logo, ...(award.logos ?? []), award.logoSecondary].filter(
          (logo): logo is string => Boolean(logo)
        ),
        qualification: award.qualification,
        qualificationFlag: award.qualificationFlag,
        status: "award" as const,
        recognitions: [
          {
            year: award.year,
            date: award.date,
            position: award.position,
            level: award.position.match(/\(([^)]+)\)/)?.[1] ?? category,
          },
        ],
      }))
  );

  const groupedAwards = awards.reduce<ProjectTimelineItem[]>((items, award) => {
    const existing = award.event === groupedEvent
      ? items.find((item) => item.event === groupedEvent && item.status === "award")
      : undefined;

    if (existing) {
      existing.recognitions.push(...award.recognitions);
      existing.logos = [...new Set([...existing.logos, ...award.logos])];
      existing.recognitions.sort((first, second) =>
        (second.date ?? `${second.year}-01-01`).localeCompare(first.date ?? `${first.year}-01-01`)
      );
      existing.date = existing.recognitions[0].date;
    } else {
      items.push(award);
    }

    return items;
  }, []);

  const projectAwards: ProjectTimelineItem[] = [
    ...groupedAwards,
    ...UPCOMING_PROJECT_EVENTS.filter((event) => event.project === project).map((event) => ({
      year: event.year,
      date: event.date,
      event: event.event,
      logos: [...event.logos],
      location: event.location,
      status: "upcoming" as const,
      recognitions: [
        {
          year: event.year,
          date: event.date,
          position: "Next up",
          level: "Upcoming",
        },
      ],
    })),
  ].sort((first, second) => {
    const priority = (award: ProjectTimelineItem) => {
      if (award.event === "ATLÂNTIA International STEM Olympiad 2026") return 0;
      if (award.recognitions.some((recognition) => recognition.position.includes("Gold Medalist"))) return 1;
      if (award.event === groupedEvent) return 2;
      return 3;
    };
    const priorityDifference = priority(first) - priority(second);

    if (priorityDifference !== 0) return priorityDifference;

    return (second.date ?? `${second.year}-01-01`).localeCompare(first.date ?? `${first.year}-01-01`);
  });

  if (projectAwards.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 sm:mt-20 lg:mt-24" aria-labelledby={`${project}-awards-heading`}>
      <div className="mb-6 sm:mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300 sm:mb-3">
          Project achievements
        </p>
        <h2
          id={`${project}-awards-heading`}
          className="scroll-mt-28 flex items-center gap-2 text-2xl font-extrabold tracking-tight sm:gap-3 sm:text-4xl"
        >
          <Award className="h-6 w-6 shrink-0 text-amber-500 sm:h-7 sm:w-7" aria-hidden="true" />
          Competition Achievements
        </h2>
      </div>

      <ol className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5">
        {projectAwards.map((award, index) => {
          const isFeatured = award.event === "ATLÂNTIA International STEM Olympiad 2026";
          const isGroupedEvent = award.event === groupedEvent;
          const nationalRecognition = isGroupedEvent
            ? award.recognitions.find((recognition) => recognition.level === "National")
            : undefined;
          const levelProgression = isGroupedEvent
            ? award.recognitions
                .filter((recognition) =>
                  ["Upazila Level", "District Level", "Divisional Level"].includes(recognition.level)
                )
                .sort((first, second) =>
                  (first.date ?? "").localeCompare(second.date ?? "")
                )
            : [];

          return (
            <li key={`${award.status}-${award.date}-${award.event}`}>
              <motion.article
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.3),
                  ease: "easeOut",
                }}
                className={`rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-slate-900/90 sm:p-5 ${
                  isFeatured
                    ? "border-amber-300 bg-linear-to-br from-amber-50/90 to-white shadow-amber-900/5 dark:border-amber-400/30 dark:from-amber-400/10 dark:to-slate-900"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center">
                  {award.logos.length > 0 && (
                    <div className="flex min-h-14 items-center justify-center gap-4 sm:min-h-16 sm:gap-5" aria-label={`${award.event} logos`}>
                      {award.logos.map((logo, logoIndex) => (
                        <Image
                          key={logo}
                          src={logo}
                          alt={`${award.event} logo ${logoIndex + 1}`}
                          width={160}
                          height={64}
                          className="h-12 w-auto max-w-32 object-contain sm:h-14 sm:max-w-40"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="mt-2 text-center text-base font-bold leading-snug text-slate-900 dark:text-slate-100 sm:text-lg">
                  {award.event}
                </h3>

                {award.qualification && (
                  <div className="mt-3 flex flex-col items-center gap-2 rounded-xl border border-amber-200/80 bg-linear-to-r from-amber-50 via-yellow-50 to-white px-3 py-3 text-center text-amber-950 shadow-sm dark:border-amber-300/20 dark:from-amber-300/10 dark:via-yellow-300/5 dark:to-white/[0.03] dark:text-amber-100">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-amber-300/70 bg-amber-100 text-amber-700 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-200">
                      {award.qualificationFlag ? (
                        <Image
                          src={award.qualificationFlag}
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full object-cover shadow-sm"
                        />
                      ) : (
                        <Globe className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
                        International qualification
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold leading-snug">
                        {award.qualification}
                      </span>
                    </span>
                  </div>
                )}

                {isGroupedEvent ? (
                  <div className="mt-4">
                    {nationalRecognition && (
                      <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-orange-200/80 bg-linear-to-r from-orange-50 to-amber-50 px-3 py-2.5 dark:border-orange-300/15 dark:from-orange-400/10 dark:to-amber-300/5">
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-200">
                          National
                        </span>
                        <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${getRecognitionStyle(nationalRecognition.position)}`}>
                          {nationalRecognition.position}
                        </span>
                        <time
                          className="text-xs text-slate-500 dark:text-slate-400"
                          dateTime={nationalRecognition.date ?? nationalRecognition.year}
                        >
                          {formatDate(nationalRecognition.date, nationalRecognition.year)}
                        </time>
                      </div>
                    )}

                    {levelProgression.length > 0 && (
                      <div className="mt-4">
                        <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                          First-place progression
                        </p>
                        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                          {levelProgression.map((recognition) => (
                            <li
                              key={`${recognition.date}-${recognition.level}`}
                              className="relative flex items-center justify-between gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03] sm:flex-col sm:justify-center sm:gap-1.5 sm:px-2 sm:text-center"
                            >
                              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                                {recognition.level.replace(" Level", "")}
                              </span>
                              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${getRecognitionStyle(recognition.position)}`}>
                                1st Place
                              </span>
                              <time
                                className="text-[10px] text-slate-500 dark:text-slate-400"
                                dateTime={recognition.date ?? recognition.year}
                              >
                                {formatDate(recognition.date, recognition.year)}
                              </time>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ) : award.recognitions.length > 1 ? (
                  <ol className="mt-3 divide-y divide-slate-200 dark:divide-white/10">
                    {award.recognitions.map((recognition) => (
                      <li
                        key={`${recognition.date}-${recognition.level}`}
                        className="flex flex-col items-center gap-1 py-2 text-center first:pt-0 last:pb-0 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2.5"
                      >
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${getRecognitionStyle(recognition.position)}`}>
                            {recognition.position.replace(/\s*\([^)]*\)/, "")}
                          </span>
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {recognition.level}
                          </span>
                        </div>
                        <time
                          className="text-xs text-slate-500 dark:text-slate-400"
                          dateTime={recognition.date ?? recognition.year}
                        >
                          {formatDate(recognition.date, recognition.year)}
                        </time>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-center">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${getRecognitionStyle(award.recognitions[0].position)}`}>
                      {award.recognitions[0].position.replace(/\s*\([^)]*\)/, "")}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {award.location ?? award.recognitions[0].level}
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <time
                      className="text-sm text-slate-500 dark:text-slate-400"
                      dateTime={award.date ?? award.year}
                    >
                      {formatDate(award.date, award.year)}
                    </time>
                  </div>
                )}
              </motion.article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
