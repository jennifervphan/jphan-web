// Resume Data - Edit this file to customize your website content

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
}

export const resumeData: ResumeData = {
  name: "Jennifer Phan",
  title: "Software Engineer",
  tagline: "Building scalable web and mobile applications with clean, maintainable code",
  about: `Fullstack software engineer with 6+ years of experience. Passionate about clean code, testing, and developer productivity. In my free time, I develop games and create game assets.`,
  email: "kp.j.phan@gmail.com",
  phone: "+491789117824",
  location: "Zaandam, Netherlands",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/jennifervphan",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/j-v-phan/",
      icon: "linkedin",
    },
    {
      name: "itch.io",
      url: "https://irregular-medusa.itch.io/",
      icon: "itchio",
    },
  ],
  experience: [
    {
      company: "Shell EV Charging Solutions",
      role: "Tech Lead",
      location: "Amsterdam, Netherlands",
      startDate: "June 2024",
      endDate: "Present",
      description: [
        "Led a team of 4 engineers", "Mentored junior developers and onboarded new team members", "Drove technical architecture decisions and sprint planning",
      ],
    },
    {
      company: "Shell EV Charging Solutions",
      role: "Software Engineer",
      location: "Amsterdam, Netherlands",
      startDate: "Dec 2019",
      endDate: "May 2024",
      description: [
        "Built and maintained RESTful APIs serving 1M+ daily requests",
        "Developed and maintained internal React application for managing charge point installations",
        "Introduced unit and end-to-end tests as well as CI/CD pipelines, improving code quality and deployment speed",
        "Collaborated with product and design teams to deliver features on schedule",
      ],
    }
  ],
  education: [
    {
      institution: "Rhein Waal University of Applied Sciences",
      degree: "Bachelor of Science  ",
      field: "Environment and Energy Management",
      startDate: "2012",
      endDate: "2018",
      achievements: [
        "Thesis: Developed a testing method for quality and performance evaluation of Nickel Metal Hydride batteries",
        "Senior project: Introduced Fairtrade products into Rhein Waal University of Applied Sciences",
      ],
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: [
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "GraphQL", level: 70 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ],
  projects: [
    {
      title: "Zen Zombie Zoo",
      description: "An idle game where you collect zombies to expand your zoo. Built with React and Vite for a smooth, responsive gaming experience.",
      tags: ["React", "Vite", "Game Dev", "Idle Game"],
      link: "https://zzz.jphan.org/",
      github: "https://github.com/zen-zombie-zoo/zzz-web"

    },
    {
      title: "Mummy escape",
      description: "A pixel art game where you play as a mummy trying to escape a pyramid. Created with Aseprite and built with Phaser.js.",
      tags: ["Phaser", "Pixel Art", "Aseprite"],
      link: "https://irregular-medusa.itch.io/",
      github: "https://github.com/NiklasEi/mummy-escape"
    },
    {
      title: "Personal Portfolio",
      description: "This website! Built with React and TypeScript, featuring a custom design and responsive layout.",
      tags: ["React", "TypeScript", "CSS"],
      github: "https://github.com/jennifervphan",
    },
  ],
};
