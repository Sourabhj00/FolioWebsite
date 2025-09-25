export interface Project { name: string; blurb: string; github?: string; }

export const PROFILE = {
  name: "Sourabh Jain",
  role: "Angular Developer",
  summary: "Short summary goes here.",
  skills: ["Angular", ".NET 8", "RxJS", "TypeScript", "C#", "Tailwind"],
  projects: <Project[]>[
    { name: "Project Alpha", blurb: "One-liner value prop.", github: "https://github.com/your/repo" },
    { name: "Project Beta", blurb: "Something cool you built." }
  ],
  education: [{ text: "Degree, Institution — Year" }]
};
