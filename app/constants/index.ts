// Skill icons (from public/assets/skills/)
const fusion360Icon = "/images/skills/skill-fusion-360.webp";
const pythonIcon = "/images/skills/skill-python.webp";
const arduinoIcon = "/images/skills/skill-arduino.webp";
const esp32Icon = "/images/skills/skill-esp32.webp";
const raspberrypi = "/images/skills/skill-raspberry-pi.webp";
const robotIcon = "/images/skills/skill-robotics.webp";
const kicadIcon = "/images/skills/skill-kicad.webp";
const proteusIcon = "/images/skills/skill-proteus.webp";
const tinkercadIcon = "/images/skills/skill-tinkercad.webp";
const javascriptIcon = "/images/skills/skill-javascript.webp";
const typescriptIcon = "/images/skills/skill-typescript.webp";
const gitIcon = "/images/skills/skill-git.webp";
const githubIcon = "/images/skills/skill-github.webp";
const latexIcon = "/images/skills/skill-latex.webp";
const matlabIcon = "/images/skills/skill-matlab.webp";
const d71Icon = "/images/skills/skill-demon71.webp";
const robohaatbdIcon = "/images/skills/skill-robo-haat-bd.webp";

// Award logos (from public/assets/awards/)
const WiceLogo = "/images/awards/wice-competition-logo.webp";
const NMSTLogo = "/images/awards/national-museum-science-technology-logo.webp";
const NSFLogo = "/images/awards/national-science-fest-logo.webp";
const BSALogo = "/images/awards/bangladesh-shishu-academy-logo.webp";
const GOBBLogo = "/images/awards/government-bangladesh-logo.webp";
const GOBLogo = "/images/awards/bangladesh-government-logo.webp";
const FIRSO2026Logo = "/images/awards/firso-2026-logo.webp";
const AtlantiaLogo = "/images/awards/atlantia-stem-olympiad-logo.webp";

// Project images (from public/assets/projects/)
const DEMON71 = "/images/experience/team-demon71-system-architecture.webp";
const DEMON712 = "/images/experience/team-demon71-img-2609.webp";
const ROBOHAATBD = "/images/experience/robo-haat-bd-founder-work.webp";
const ROBOHAATBD2 = "/images/experience/robo-haat-bd-founder-profile.webp";
const UBC = "/images/experience/udvaboni-biggan-club-research.webp";
const UBC2 = "/images/experience/udvaboni-biggan-club-research-editor-event.webp";
const UBCB = "/images/experience/udvaboni-club-bahubal-workshop.webp";
const UBCB2 = "/images/experience/udvaboni-club-bahubal-rover-controller.webp";

export const HERO_CONTENT = `I am a multidisciplinary inventor and tech researcher driven by the passion to turn abstract imagination into physical reality. From developing autonomous robotic platforms and training custom AI surveillance models to engineering high-performance web applications, I create systems that bridge the gap between intelligent hardware and software. Proficient across C++, Python, and full-stack web architectures, I don't just write code—I build connected solutions with absolute precision. Let's build something extraordinary together.`;

export const SITE_DESCRIPTION =
  "Tarikur Rahman is a Bangladeshi Robotics Inventor, System Architect, and Tech Researcher specializing in autonomous defense systems, tactical rovers (PHANTOM-X), industrial firefighting robotics (PHOENIX-F1), and embedded IoT ecosystems.";

export const SKILLS = [
  {
    title: "Hardware & Robotics",
    subtitle:
      "I specialize in prototyping autonomous robots, defense rovers, and IoT solutions using ESP32, Arduino, and comprehensive sensor integration to solve real-world problems.",
    icons: [
      { title: "Arduino", icon: arduinoIcon },
      { title: "ESP32", icon: esp32Icon },
      { title: "Raspberry Pi", icon: raspberrypi },
      { title: "Robotics", icon: robotIcon },
    ],
  },
  {
    title: "PCB & 3D Design",
    subtitle:
      "Experienced in end-to-end hardware development, from designing custom PCB layouts in KiCad to modeling 3D mechanical enclosures in Fusion 360 and simulating circuits in Proteus.",
    icons: [
      { title: "KiCad", icon: kicadIcon },
      { title: "Fusion 360", icon: fusion360Icon },
      { title: "Proteus", icon: proteusIcon },
      { title: "Tinkercad", icon: tinkercadIcon },
    ],
  },
  {
    title: "Software & Web Control",
    subtitle:
      "I build responsive web controls and dashboards using JavaScript, TypeScript, HTML/CSS, paired with Python for logic automation and Git/GitHub for version control.",
    icons: [
      { title: "JavaScript", icon: javascriptIcon },
      { title: "TypeScript", icon: typescriptIcon },
      { title: "Python", icon: pythonIcon },
      { title: "Git", icon: gitIcon },
      { title: "GitHub", icon: githubIcon },
    ],
  },
  {
    title: "Research & Leadership",
    subtitle:
      "A proactive leader and tech researcher, focused on writing technical papers with LaTeX, data visualization using MATLAB, and managing engineering projects at Robo Haat BD and Team DEMON71.",
    icons: [
      { title: "LaTeX", icon: latexIcon },
      { title: "MATLAB", icon: matlabIcon },
      { title: "DEMON71", icon: d71Icon },
      { title: "ROBO Haat BD", icon: robohaatbdIcon },
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "April 2026 - Present",
    title: "System Architect",
    subtitle: "Team DEMON71",
    description: `- System Architecture: Engineered the core computational framework and hardware-software integration.\n
- Tactical AI & Vision: Developed YOLO (YOLOv12) algorithms for real-time target tracking and intelligence.\n
- Remote Command: Built secure cross-network remote control protocols via Raspberry Pi.\n
- Web Deployment: Designed and coded the entire interactive dark-tactical web platform.
`,
    technologies: ["C++", "ROS2", "Python", "React", "Tailwind", "Git"],
    image: [DEMON71, DEMON712],
  },
  {
    year: "Dec 2025 - Present",
    title: "Founder",
    subtitle: "Robo Haat BD",
    description: `- Supply various components (Raspberry Pi, Motor Drivers, Arduino, ESP, Multiple Sensors) to help students learn basic to advanced robotics.\n
- Our mission is to make robotics affordable and accessible, inspiring the next generation to get involved in tech.`,
    technologies: ["IoT", "Robotics", "Microcontrollers", "Machine Vision"],
    image: [ROBOHAATBD, ROBOHAATBD2],
  },
  {
    year: "Oct 2025 - Present",
    title: "Club Secretary",
    subtitle: "Udvaboni Biggan Club Bahubal",
    description: `- Conducted 3+ workshops and seminars on Robotics, IoT, Digital Fabrication, and Project Management, impacting over 250+ students.\n
- Mentored students in design thinking and fabrication, guiding them in 3D printing, PCB design, and IoT applications.\n
- Planning and organizing upcoming workshops to further cultivate hands-on engineering skills.
`,
    technologies: [
      "Robotics",
      "IoT",
      "3D Printing",
      "Laser Cutting",
      "Fusion 360",
    ],
    image: [UBCB, UBCB2],
  },
  {
    year: "Feb 2023 - Present",
    title: "Research Editor",
    subtitle: "Udvaboni Biggan Club",
    description: `- Udvaboni Biggan Club is the central science club in Habiganj district, overseeing sub-branches in local upazilas and educational institutions.\n
- Worked to spread an innovation culture in remote regions by organizing annual seminars, workshops, and competitions.\n
- Edited research content and provided guidance on students' innovative projects.
`,
    technologies: ["Research", "Project Management", "Technical Writing", "Mentorship"],
    image: [UBC, UBC2],
  },
];

export const AWARDS: Record<
  string,
  Array<{
    year: string;
    date?: string;
    position: string;
    event: string;
    description: string;
    link: string;
    logo?: string;
    logoDark?: string;
    logoSecondary?: string;
    logos?: string[];
    projectTimelineLogoSize?: number;
    projects?: string[];
    qualification?: string;
    qualificationFlag?: string;
  }>
> = {
  National: [
    {
      year: "2026",
      date: "2026-11-06",
      position: "Gold Medalist",
      event: "ATLÂNTIA International STEM Olympiad 2026",
      description: "As Team DEMON71 from Alif Subhan Chowdhury Government College, we earned the Gold Medal at the ATLÂNTIA International STEM Olympiad 2026 with our PHANTOM-X second-generation defense rover, directly qualifying for the International Round in Turkey. We competed in the Artificial Intelligence segment under the Technology & Innovation category at Leading University, Sylhet on 6 November 2026. The event was organized by General Science Olympiad.",
      link: "#",
      logo: AtlantiaLogo,
      projects: ["PHANTOM-X"],
      qualification: "Qualified for the International Round in Turkey",
      qualificationFlag: "/images/flags/turkey.svg",
    },
    {
      year: "2026",
      date: "2026-05-09",
      position: "Gold Medalist",
      event: "8th World Invention Competition and Exhibition (WICE) 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we earned the Gold Medal at the 8th World Invention Competition and Exhibition (WICE) 2026 with our PHANTOM-X second-generation defense rover, directly qualifying for the International Round in Malaysia. We competed in the IoT & Robotics segment under the Project Display category at Northern University Bangladesh on 9 May 2026. The competition was organized by Dreams of Bangladesh and the Indonesian Young Scientist Association (IYSA).`,
      link: "#",
      logo: WiceLogo,
      projects: ["PHANTOM-X"],
      qualification: "Qualified for the International Round in Malaysia",
      qualificationFlag: "/images/flags/malaysia.svg",
    },
    {
      year: "2026",
      date: "2026-06-14",
      position: "Special 5th Place",
      event: "47th National Science & Technology Week 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved Special 5th Place at the national-level round of the 47th National Science & Technology Week 2026 with our PHANTOM-X second-generation defense rover. We competed at the National Science & Technology Complex, Agargaon, Dhaka from 14–16 June 2026. The event was organized by the National Museum of Science and Technology and the Ministry of Science and Technology, Bangladesh.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
      projects: ["PHANTOM-X"],
    },
    {
      year: "2026",
      date: "2026-09-04",
      position: "Finalist (National Round)",
      event: "Fibonacci International Robot & STEM Olympiad 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we participated in the Fibonacci International Robot & STEM Olympiad 2026 and emerged as Finalists in the National Round with our PHANTOM-X second-generation defense rover. We competed at United International University (UIU), Dhaka on 4 September 2026. The event was organized by General Science Olympiad.`,
      link: "#",
      logo: FIRSO2026Logo,
      projects: ["PHANTOM-X"],
    },
    {
      year: "2025",
      date: "2025-10-11",
      position: "Finalist",
      event: "National Science Fest 2025",
      description: `As a member of Udvaboni Biggan Club, Bahubal, we participated in the National Science Fest 2025 with our AETHER-H1 and PHOENIX-F1 projects. Our projects were selected among the Top 10 finalists in the competition, which took place at the Bangladesh Shishu Academy, Dhaka on 11 October 2025. The event was organized by Phulkuri Ashar in collaboration with the Bangladesh Shishu Academy.`,
      link: "#",
      logo: NSFLogo,
      projectTimelineLogoSize: 80,
      projects: ["AETHER-H1", "PHOENIX-F1"],
    },
  ],
  "Division,District,Upazila": [
    {
      year: "2026",
      date: "2026-05-15",
      position: "1st Place (Divisional Level)",
      event: "47th National Science & Technology Week 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved 1st Place at the Sylhet Divisional Level of the 47th National Science & Technology Week 2026 with our PHANTOM-X second-generation defense rover. We competed at the Mohammad Ali Gymnasium, Rikabibazar, Sylhet from 15–17 May 2026.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
      projects: ["PHANTOM-X"],
    },
    {
      year: "2026",
      date: "2026-04-18",
      position: "1st Place (District Level)",
      event: "47th National Science & Technology Week 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved 1st Place at the Habiganj District Level of the 47th National Science & Technology Week 2026 with our PHANTOM-X second-generation defense rover. We competed at the Zilla Parishad Auditorium, Habiganj from 18–20 April 2026.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
      projects: ["PHANTOM-X"],
    },
    {
      year: "2026",
      date: "2026-04-15",
      position: "1st Place (Upazila Level)",
      event: "47th National Science & Technology Week 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved 1st Place at the Bahubal Upazila Level of the 47th National Science & Technology Week 2026 with our PHANTOM-X second-generation defense rover. We competed at the Upazila Parishad Auditorium, Bahubal on 15 April 2026.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
      projects: ["PHANTOM-X"],
    },
    {
      year: "2024",
      date: "2024-06-24",
      position: "1st Place (Upazila Level)",
      event: "45th National Science & Technology Week 2024",
      description: `Representing Sunshine Model School & College, achieved 1st Place at the Bahubal Upazila Level of the 45th National Science & Technology Week 2024 in the Science Project category on 24 June 2024 at Bahubal, Habiganj. Organized by the National Museum of Science and Technology and the Ministry of Science and Technology, Bangladesh.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
      projectTimelineLogoSize: 80,
      projects: ["PHOENIX-F1"],
    },
    {
      year: "2022",
      position: "1st Place (Upazila Level)",
      event: "National Children's Award Competition 2022",
      description: `Awarded 1st Place in the National Children's Award Competition 2022 (Upazila Level) in the Science Project category on 11 July 2023 at Bahubal, Habiganj, Bangladesh. The competition was organized by the Bangladesh Shishu Academy, Government of the People's Republic of Bangladesh.`,
      link: "#",
      logos: [BSALogo, GOBBLogo],
    },
    {
      year: "2022",
      position: "2nd Place (District Level)",
      event: "National Children's Award Competition 2022",
      description: `Awarded 2nd Place in the National Children's Award Competition 2022 (District Level) in the Science Project category on 16 July 2023 at Habiganj, Bangladesh. The competition was organized by the Bangladesh Shishu Academy, Habiganj, under the Bangladesh Shishu Academy, Government of the People's Republic of Bangladesh.`,
      link: "#",
      logos: [BSALogo, GOBBLogo],
    },
  ],
};

export const UPCOMING_PROJECT_EVENTS: Array<{
  year: string;
  date: string;
  event: string;
  location: string;
  logos: string[];
  project: string;
}> = [];

export const CONTACT = {
  address: "Sylhet, Bangladesh",
  email: "tarikurrahman2008@gmail.com",
  linkedin: "https://linkedin.com/in/tarikurrahmann",
  x: "https://x.com/tarikurrahmann",
  scholar: "https://scholar.google.com/citations?user=YOUR_ID", // এখানে আপনার আসল Google Scholar ID বসাবেন
  facebook: "https://facebook.com/tarikurrahmann",
  tiktok: "https://tiktok.com/@tarikurrahmann",
  github: "https://github.com/tarikurrahmann",
};