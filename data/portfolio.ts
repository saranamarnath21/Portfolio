// Central content source. Every real fact on the site is defined here.
// Do not invent numbers, outcomes or claims that are not present in this file.

export const site = {
  name: "Saran Amarnath",
  role: "Project Engineer · Naval Architecture",
  location: "London, UK",
  email: "saranamarnath21@gmail.com",
  phone: "",
  linkedin: "https://linkedin.com/in/saranamarnath",
  linkedinLabel: "linkedin.com/in/saranamarnath",
  cvPath: "/Chandana_Saran_CV.pdf",
  tagline: "ENGINEERING TODAY. SUSTAINING TOMORROW.",
};

export const nav = [
  { label: "Work", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
];

export const hero = {
  meta: "London, UK · Project Engineer · Naval Architecture",
  headline: [
    "I deliver complex",
    "marine and offshore",
    "work with engineering",
    "discipline.",
  ],
  paragraph:
    "Project Engineer with 2+ years of experience across offshore oil & gas, renewables, shipyard engineering and sustainable shipping. Experience includes Seatrium, PacMaK DB Naval Charterers & Consultants, DRDO NSTL and Hindustan Shipyard Limited. Currently pursuing an MSc in Naval Architecture at University College London.",
  primaryCta: { label: "See My Work", href: "/experience" },
  secondaryCta: { label: "Let's Connect", href: "/about#contact" },
  portrait: "/images/profile/profile.jpg",
};

export const metrics = [
  {
    icon: "user",
    value: "2+ Years",
    label: "Industry experience",
  },
  {
    icon: "dollar",
    value: "USD 100M+",
    label: "Major offshore packages supported",
  },
  {
    icon: "ship",
    value: "Shell Crux · Empire Wind · TenneT 2GW",
    label: "Flagship project exposure",
  },
  {
    icon: "graduation",
    value: "UCL MSc",
    label: "Current academic specialisation",
  },
];

export const positioning = {
  eyebrow: "Not just an engineer.",
  heading: "A delivery-focused problem solver.",
  copy: "My work sits at the intersection of offshore execution, technical coordination and marine engineering. I have supported major offshore energy packages, contributed to shipyard and design-office workflows, explored alternative fuels for decarbonisation, and now analyse underwater radiated noise from ships as part of my UCL dissertation.",
};

export const strengths = [
  {
    icon: "platform",
    title: "Offshore Project Delivery",
    copy: "Strong in planning, execution support, inspections and schedule control across complex offshore packages.",
  },
  {
    icon: "hardhat",
    title: "Shipyard & Design Understanding",
    copy: "Experience in design-to-production coordination, structural checks and fabrication awareness.",
  },
  {
    icon: "leaf",
    title: "Alternative Fuels & Decarbonisation",
    copy: "Researching LNG, methanol, hydrogen and ammonia pathways to support cleaner maritime solutions.",
  },
  {
    icon: "pulse",
    title: "Marine Research & Analysis",
    copy: "Skilled in hydrophone data, AIS data, PSD, RMS SPL and 1/3-octave analysis for underwater noise studies.",
  },
];

export const shellCrux = {
  company: "Shell Crux",
  logoLabel: "Shell Crux",
  logoImage: "/images/projects/shell-crux.jpg",
  image: "/images/projects/shell-crux-rig.jpg",
  tag: "Featured Highlight",
  heading: "Recognised for proactive problem-solving on Shell Crux",
  copy: "Supported site coordination, inspections and work-front control on a high-value offshore package, helping identify cost pressure points and improve execution discipline under demanding schedules.",
  cta: { label: "Ask me about this project", href: "/about#contact" },
};

export type ExperienceEntry = {
  index: string;
  company: string;
  location?: string;
  role: string;
  dates: string;
  meta?: string;
  bullets: string[];
  chips?: string[];
  image: string;
  imageAlt: string;
};

export const experience: ExperienceEntry[] = [
  {
    index: "01",
    company: "Seatrium Ltd, Singapore",
    role: "Engineer",
    dates: "Nov 2023 – Aug 2025",
    meta: "Major projects: Shell Crux, Empire Wind, TenneT 2GW · USD 100M+ packages",
    bullets: [
      "Coordinated planning and execution of offshore mechanical and electrical repair activities across major offshore oil & gas and renewable energy packages.",
      "Managed technical queries, scope changes and variation orders while supporting cost and schedule control.",
      "Worked directly with ABS, DNV and client representatives to satisfy inspection, compliance and documentation requirements.",
      "Supported multidisciplinary field teams, inspections, HSE checks and technical reporting under demanding delivery timelines.",
      "Recognised for proactive problem-solving on Shell Crux, including identifying cost pressure points and improving execution discipline.",
    ],
    chips: ["Large multi-trade site team coordination", "High-pressure schedule delivery"],
    image: "/images/experience/seatrium.jpg",
    imageAlt: "Offshore platform representing Seatrium project work",
  },
  {
    index: "02",
    company: "PacMaK DB Naval Charterers & Consultants (Pte.) Ltd",
    role: "Graduate Naval Architect Intern",
    dates: "Jan 2023 – May 2023",
    bullets: [
      "Researched LNG, methanol, hydrogen and ammonia as marine fuel pathways.",
      "Evaluated green-fuel feasibility, emission reduction potential, cost implications and operational challenges for commercial vessels.",
      "Studied alternative propulsion within the wider maritime decarbonisation transition, with reference to the IMO 2023 GHG Strategy and MARPOL Annex VI measures such as EEXI and CII.",
    ],
    image: "/images/experience/pacmak.jpg",
    imageAlt: "LNG carrier representing alternative marine fuels research",
  },
  {
    index: "03",
    company: "DRDO NSTL, Visakhapatnam",
    role: "Intern",
    dates: "",
    bullets: [
      "Supported hydrodynamic model testing for underwater vehicles and submarines.",
      "Gained exposure to towing tank testing, model evaluation, load-related testing and submarine performance analysis in a major naval research environment. NSTL is home to one of Asia's major towing tank facilities.",
    ],
    image: "/images/experience/drdo.jpg",
    imageAlt: "Underwater vehicle model representing DRDO NSTL testing work",
  },
  {
    index: "04",
    company: "Hindustan Shipyard Limited",
    role: "Intern",
    dates: "",
    bullets: [
      "Worked across both the design office and engineering department, building a practical understanding of how drawings, structural checks, repair packages, fabrication and construction coordination connect from design stage to production stage.",
    ],
    image: "/images/experience/hsl.jpg",
    imageAlt: "Shipyard drafting desk representing Hindustan Shipyard Limited work",
  },
];

export const whatIBring = [
  {
    icon: "platform",
    title: "Offshore planning and execution",
    copy: "Plan, coordinate and deliver complex offshore scopes with clear priorities.",
  },
  {
    icon: "coordination",
    title: "Technical coordination",
    copy: "Bridge between disciplines, vendors, class and clients for smooth delivery.",
  },
  {
    icon: "shield",
    title: "Inspection and class interface",
    copy: "Work with ABS, DNV and clients to meet standards and documentation needs.",
  },
  {
    icon: "chart",
    title: "Cost and schedule awareness",
    copy: "Understand commercial impact and support control throughout the project lifecycle.",
  },
  {
    icon: "pulse",
    title: "Calm delivery under pressure",
    copy: "Stay composed, solve problems and deliver results in demanding environments.",
  },
];

export const researchIntro = {
  heading: "Engineering projects grounded in analysis.",
  copy: "My work combines design, simulation, acoustic analysis and applied problem-solving across shipping, offshore engineering and sustainable maritime systems.",
};

export const featuredResearch = {
  tag: "Featured Project",
  heading: "UCL Dissertation · Underwater Radiated Noise from Ships in Southampton Water",
  copy: "Analysing hydrophone recordings and AIS vessel data from a highly active commercial port environment. The workflow includes synchronising acoustic and vessel timestamps, identifying vessel passages, calculating CPA, range and speed, applying acoustic calibration, generating spectrograms, comparing vessel noise with background noise, and calculating PSD, RMS SPL and 1/3-octave spectra. Results are interpreted with reference to IMO underwater radiated noise guidance and ISO 17208 methodology.",
  workflow: [
    "Hydrophone Data + AIS Data",
    "Synchronise Acoustic and Vessel Timestamps",
    "Identify Individual Vessel Passages",
    "Calculate CPA, Range, Speed and Vessel Type",
    "Apply Acoustic Calibration",
    "Generate Spectrograms",
    "Compare Vessel Noise with Background Noise",
    "Calculate PSD and RMS SPL",
    "Perform 1/3-Octave Band Analysis",
    "Compare Noise Characteristics Across Vessel Types",
    "Assess Influence of Speed, Range and Operating Conditions",
    "Interpret Results with Reference to IMO URN Guidance and ISO 17208 Methodology",
  ],
  chips: ["Hydrophone Data", "Sync & CPA Analysis", "Spectral Analysis", "Underwater Noise Assessment"],
  vesselTypes: [
    { label: "Cargo", color: "#59D2E7" },
    { label: "Tanker", color: "#F2C94C" },
    { label: "Tug", color: "#EB5757" },
    { label: "Pilot", color: "#9B8AFB" },
  ],
  passageSummary: [
    { label: "Passages", value: "65,000" },
    { label: "Avg. CPA (mt)", value: "500" },
    { label: "Avg. Speed (kn)", value: "10.2" },
    { label: "Max. Range (m)", value: "9,540" },
  ],
  dataNotice:
    "Illustrative visualisation — pending real dissertation data. Not measured results.",
};export type ProjectEntry = {
  icon: string;
  title: string;
  copy: string;
  tags: string[];
  image: string;
  imageAlt: string;
  badge?: string;
};

export const projects: ProjectEntry[] = [
  {
    icon: "tanker",
    title: "Design of a 20,000 DWT Oil Tanker Propelled by LNG",
    copy: "Full conceptual design project covering hull form, stability, cargo layout and LNG propulsion integration.",
    tags: ["Concept Design", "LNG Propulsion"],
    image: "/images/research/oil-tanker.jpg",
    imageAlt: "20,000 DWT LNG-propelled oil tanker concept design",
  },
  {
    icon: "sub",
    title: "Drag Prediction of Submarine for Different Nose Shapes",
    copy: "Designed a submarine hull and used hull envelope equations with STAR-CCM+ to compare drag across alternative nose geometries.",
    tags: ["STAR-CCM+", "CFD Analysis"],
    image: "/images/research/submarine-cfd.jpg",
    imageAlt: "Submarine CFD drag prediction across nose geometries",
  },
  {
    icon: "code",
    title: "Smart India Hackathon 2022 · Fuel Monitoring Software for Tugboats",
    copy: "Built a Python-based solution during a 72-hour national hackathon to estimate tugboat fuel demand using bollard pull, power and operating conditions.",
    tags: ["Python", "Data Analytics"],
    image: "/images/research/hackathon.jpg",
    imageAlt: "Tugboat fuel monitoring software dashboard concept",
    badge: "Finalist",
  },
  {
    icon: "presentation",
    title: "National Student Research · Hull-Form Optimisation",
    copy: "Presented how hull-form optimisation can reduce resistance and drag, improve fuel efficiency, and support lower operating cost and emissions.",
    tags: ["Optimisation", "Reduced Resistance"],
    image: "/images/research/hull-optimisation.jpg",
    imageAlt: "Hull-form optimisation resistance analysis",
  },
];

export const tools = [
  "MATLAB",
  "Python",
  "STAR-CCM+",
  "AutoCAD",
  "Maxsurf",
  "Rhinoceros",
  "ANSYS Fluent",
  "Hydrophone + AIS",
  "Spectrograms",
  "PSD",
  "RMS SPL",
  "1/3-Octave Bands",
];

export const about = {
  heading: "The person behind the work.",
  copy: "I started in naval architecture with a strong interest in how marine systems are designed, tested and delivered. Today, I want to build a career at the intersection of offshore project engineering, marine systems, subsea delivery and sustainable shipping.",
  portrait: "/images/profile/profile.jpg",
};

export const education = [
  {
    school: "University College London",
    degree: "MSc Naval Architecture",
    dates: "Sep 2025 – Sep 2026",
    detail: "Dissertation on Underwater Radiated Noise from Ships",
  },
  {
    school: "AMET University",
    degree: "B.E. Naval Architecture and Offshore Engineering",
    dates: "2023",
    detail: "CGPA 9.12",
  },
];

export const events = [
  {
    title: "Seawork 2026",
    location: "Southampton",
    copy: "Attended Europe's commercial marine and workboat exhibition to explore offshore services, workboats, marine technology and industry developments.",
    image: "/images/events/seawork.jpg",
    imageAlt: "Seawork 2026 exhibition, Southampton",
  },
  {
    title: "RINA Dinner Networking",
    copy: "Participated in industry networking with maritime professionals, expanding connections across naval architecture and offshore engineering.",
    image: "/images/events/rina-dinner.jpg",
    imageAlt: "RINA dinner networking event",
  },
  {
    title: "RINA Webinars on Alternative Fuels",
    copy: "Followed technical discussions on maritime decarbonisation, alternative fuels and the transition toward lower-emission shipping.",
    image: "/images/events/rina-fuels.jpg",
    imageAlt: "RINA webinar on alternative fuels",
  },
];

export const leadership = [
  { label: "Co-Organizer", detail: "KNOTS 2022 Naval Symposium" },
  { label: "Director", detail: "AMET Rotaract Club" },
  {
    label: "Training",
    detail:
      "Marine HVAC Systems, Coastal Hydrodynamics & Structures, ICOSE 2021, Design Thinking & Innovation Workshop",
  },
];

export const achievements = [
  { label: "Finalist", detail: "Smart India Hackathon 2022" },
  { label: "Research Presenter", detail: "Anveshan Convention" },
];

export const contact = {
  heading: "Open to the next challenge.",
  copy: "I'm actively exploring opportunities across offshore oil & gas, offshore energy, subsea, offshore wind, naval architecture and marine project engineering.",
  location: "London, United Kingdom",
  availability: "Available for full-time roles and conversations.",
  image: "/images/profile/london.jpg",
};
