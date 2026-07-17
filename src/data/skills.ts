export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SkillsData {
  skills: SkillCategory[];
  otherActivities: string[];
}

export const skillsData: SkillsData = {
  skills: [
    {
      category: "Programming",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "Bootstrap", "Tailwind"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Flask", "FastAPI", "REST APIs"]
    },
    {
      category: "AI / ML",
      skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Linux", "Docker", "Git", "Bash", "Postman", "Vercel", "Render"]
    }
  ],
  otherActivities: [
    "Innovation Day Winner — 3rd Place",
    "Organizer for Film Workshop 2025 (70+ participants)",
    "Joint Secretary — Cultural Club (2025–26)",
    "Interests: football, art & poster designing"
  ]
};
