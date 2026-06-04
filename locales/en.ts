import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Yunuo Wu | Academic Homepage",
    description:
      "Academic homepage of Yunuo Wu, doctoral student in spatial informatics, urban decline analysis, and building-level spatio-temporal modeling.",
  },
  nav: {
    about: "About",
    research: "Research",
    education: "Education",
    awards: "Awards",
    skills: "Skills",
    activities: "Extracurricular Activities",
    materials: "Materials",
    contact: "Contact",
  },
  hero: {
    name: "Yunuo Wu",
    localName: "吴雨诺 / 呉雨諾",
    role: [
      "Doctoral Student",
      "Department of Socio-Cultural Environmental Studies",
      "Graduate School of Frontier Sciences",
      "The University of Tokyo",
    ],
    affiliationLabel: "Affiliation",
    affiliation: "The University of Tokyo",
    labLabel: "Laboratory",
    lab: "Sekimoto & Nakai Laboratory",
    directions: [
      "Spatial Informatics",
      "Urban Decline Analysis",
      "Building-level Spatio-temporal Modeling",
      "Machine Learning",
      "Deep Learning",
      "Remote Sensing",
      "GIS",
    ],
    emailLabel: "Email",
    emails: ["w.yunuo0424@gmail.com", "wuyunuo@g.ecc.u-tokyo.ac.jp"],
    primaryAction: "View Research",
    secondaryAction: "Research Materials",
  },
  about: {
    title: "About",
    body: [
      "I am a doctoral student at The University of Tokyo with an interdisciplinary background in architecture, urban planning, landscape architecture, and spatial informatics.",
      "My master’s research estimated the number of vacant houses by integrating satellite-derived features, municipal survey data, and administrative boundary data with deep learning methods.",
      "In my doctoral research, I focus on automated building-level spatio-temporal modeling using spatial information, with the aim of understanding housing change and urban decline at a finer resolution.",
    ],
  },
  research: {
    title: "Research",
    intro:
      "My work connects spatial data, AI, remote sensing, and urban studies to model how cities change over time.",
    items: [
      {
        title: "Estimating Vacant Houses Using Deep Learning with Satellite Imagery",
        description: "Master’s Research",
        points: [
          "Used satellite-derived features, municipal survey data, and administrative boundary data.",
          "Built deep learning models to estimate the number of vacant houses.",
          "Designed and implemented the pipeline for data collection, preprocessing, spatial joins, model adjustment, training, and evaluation.",
        ],
        keywords: [
          "Vacant House Estimation",
          "Satellite Imagery",
          "Deep Learning",
          "GIS",
          "Japan",
        ],
      },
      {
        title: "Building-level Spatio-temporal Modeling for Understanding Urban Decline",
        description: "Doctoral Research",
        points: [
          "Focuses on building-level change, ID inheritance, spatio-temporal modeling, and urban decline analysis.",
          "Uses spatial information, building data, remote sensing data, and AI methods.",
          "Aims to understand residential change and urban decline processes with finer spatial detail.",
        ],
        keywords: [
          "Spatial Informatics",
          "Building-level Modeling",
          "Urban Decline",
          "Spatio-temporal Data",
          "AI",
        ],
      },
      {
        title:
          "Nationwide Vacant House Analysis Using AI Foundation Models and Multiple Data Sources",
        description: "Grant / Project",
        points: [
          "Supported by The University of Tokyo AI Center Interdisciplinary Research Promotion Grant, FY2024.",
          "Analyzes vacant houses across Japan using AI foundation models and multiple data sources.",
          "Includes nationwide mapping and trend analysis of vacant house conditions.",
        ],
        keywords: [
          "AI Foundation Models",
          "Multiple Data Sources",
          "Vacant Houses",
          "Mapping",
          "Trend Analysis",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "The University of Tokyo",
        program:
          "Graduate School of Frontier Sciences, Department of Socio-Cultural Environmental Studies, Doctoral Program",
        period: "2026.04-2029.03 expected",
      },
      {
        institution: "The University of Tokyo",
        program:
          "Graduate School of Frontier Sciences, Department of Socio-Cultural Environmental Studies, Master’s Program",
        period: "2024.04-2026.03",
      },
      {
        institution: "Beijing University of Civil Engineering and Architecture",
        program: "Architecture and Urban Planning / Landscape Architecture",
        period: "2018.09-2023.07",
        details: ["GPA: 3.84/4.0", "Major Rank: 1/58"],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { title: "Programming Languages", items: ["Python", "SQL"] },
      { title: "Development Tools", items: ["PyTorch", "Linux", "LaTeX", "Git"] },
      {
        title: "Design Tools",
        items: ["Photoshop", "Illustrator", "InDesign", "SketchUp", "Rhino"],
      },
      {
        title: "Spatial Informatics",
        items: ["ArcGIS", "QGIS", "ArcScene", "Fragstats"],
      },
      {
        title: "Languages",
        items: [
          "Japanese business level / JLPT N1",
          "English business level / TOEFL 92",
          "Chinese native",
        ],
      },
    ],
  },
  awards: {
    title: "Awards",
    items: [
      "Beijing University of Civil Engineering and Architecture Outstanding Student Award, 3 times",
      "Beijing University of Civil Engineering and Architecture Scholarship, 6 times",
      "Outstanding Graduate of Beijing University of Civil Engineering and Architecture, top 1%",
      "Outstanding Graduation Design Award, top 1%",
      "Beijing Outstanding Graduate, top 5%",
      "NECCS Third Prize",
      "Finalist Award, International Architecture Competition “Challenge to Navigli Canal”, Milan",
    ],
  },
  activities: {
    title: "Extracurricular Activities",
    items: [
      {
        institution:
          "Student Union of School of Architecture and Urban Planning, Beijing University of Civil Engineering and Architecture",
        program: "President",
        period: "2020.09-2021.06",
      },
      {
        institution:
          "Chinese Students and Scholars Association at the University of Tokyo",
        program: "Planning Department Director",
        period: "2025.04-present",
      },
      {
        institution: "Event Planning",
        program:
          "May Festival xiaolongbao project, Beijing talent exchange event, and University of Tokyo visit program for Shanghai high school students",
        period: "Selected experience",
      },
      {
        institution: "Singing Competition",
        program: "Champion",
        period: "Cultural activities",
      },
      {
        institution: "Women’s Basketball",
        program: "Team sports and athletic activities",
        period: "Personal interests",
      },
    ],
  },
  materials: {
    title: "Research Materials",
    cardTitle: "Master Thesis Defense Slides",
    description:
      "You can view my master’s thesis defense slides to better understand my research background and methodology.",
    view: "View Slides",
    filePath: "/files/修士研究.pdf",
    previewImagePath: "/files/master_thesis_preview.png",
    previewFallback:
      "The slides file is available from the View Slides button.",
  },
  contact: {
    title: "Contact",
    description:
      "For research collaboration, academic exchange, long-term internships, career opportunities, or related inquiries, please contact me by email.",
    emails: ["w.yunuo0424@gmail.com", "wuyunuo@g.ecc.u-tokyo.ac.jp"],
  },
  footer: "Yunuo Wu. Academic homepage.",
};
