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

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
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
      institution: "University Name",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2013",
      endDate: "2017",
      achievements: [
        "Dean's List - 4 semesters",
        "Senior project: Built a machine learning recommendation system",
      ],
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: ["TypeScript", "JavaScript"],
    },
    {
      name: "Frontend",
      skills: ["React", "HTML/CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "GraphQL"],
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "CI/CD"],
    },
  ],
};
