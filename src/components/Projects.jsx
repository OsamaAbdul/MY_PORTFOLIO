import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    name: "EduSparkz",
    description: "An innovative web app that transforms learning into an interactive and personalized experience — powered by state-of-the-art AI APIs. Upload your PDFs, .docx and images auto-generate quizzes, evaluate answers in real-time, and get smarter feedback instantly.Whether you're a student, teacher, or lifelong learner — this tool is your smart study partner.",
    technologies: ["React", "Gemini API", "TailwindCss", 'NodeJs', "ExpressJS", "JWT", "e.t.c"],
    link: "https://github.com/Osamaabdul/EduSparkz",
    image: "/images/eduspark.png",
    live: "https://edu-sparkz.vercel.app/"
  },
  {
    name: 'Token Based Attendance System',
    description: 'Built a full-stack web attendance application which uses tokens to sign attendance. Features include authentication, dashboards, token generation, marking attendance and CRUD operations.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://github.com/OsamaAbdul/token-based-attendance-system',
    image: '/images/tokenbased.jpg',
    live: 'https://token-based-classroom-attendance.netlify.app'
  },
  {
    name: 'My Personal Portfolio',
    description: 'Built a personal portfolio while learning the power of React components.',
    technologies: ['React', 'Bootstrap', 'Ajax', 'Material UI'],
    link: 'https://github.com/OsamaAbdul/MY_PORTFOLIO',
    image: '/images/portfolio.jpg',
    live: 'https://osamaabdul-portfolio.netlify.app'
  },
  {
    name: 'Book List Manager App',
    description: 'Built a web app that keeps records of book authors and their books.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'MongoDB', 'ExpressJS'],
    link: 'https://github.com/OsamaAbdul/booklist',
    image: '/images/booklist.jpg',
  },
  {
    name: "React Jobs Api",
    description: 'React Jobs API, a sleek and modern job listing application built with React and Vite! 🌟 Explore a curated collection of job opportunities, dive into detailed job descriptions, and manage listings with ease. Whether you are a job seeker or an employer, this app delivers a seamless and responsive experience powered by a static JSON API.',
    technologies: ['React', 'Vite', 'CSS', 'HTML', 'Tailwindcss'],
    link: 'https://github.com/OsamaAbdul/React-Jobs-Api',
    image: '/images/react-jobs-api.png',
    live: 'https://react-jobs-api.vercel.app/',
  },
  {
    name: "AI Powered Recipe Recommendation App",
    description: "AI-powered Recipe Wizard — your intelligent kitchen assistant that suggests mouth-watering recipes based on your cravings, available ingredients, or dietary preferences. Built with ⚛️ React and 💨 Tailwind CSS, this modern web app blends clean UI with the smart magic of artificial intelligence.",
    technologies: ["React", "GEMINI API", "TailwindCss"],
    link: "https://github.com/OsamaAbdul/AI-RECIPE-RECOMMENDATOR",
    image: "/images/recipe.png",
    live: 'https://ai-recipe-recommendation.vercel.app/'
  },
  {
    name: "Farmer Sales App",
    description: "Connect Farmers to Buyers and Top Agro-Companies to get verified seeds, herbicides, fertilizers, grants and machineries for easy farming experience. Also Used Grok AI APi to fetch all agric trends on popular social network app like X formerly Known as Twitter for the farmers.",
    technologies: ["React", "Grok API", "TailwindCss", 'NodeJs', "ExpressJS", "JWT", "e.t.c"],
    link: "https://github.com/OsamaAbdul/Farmer_Sales_App",
    image: "/images/farmer.png"
  },
];

const Projects = () => {
  return (
    <section className="container py-24">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 uppercase">
          PRO<span className="text-[#ff0033]">JECTS</span>
        </h2>
        <div className="h-1 w-20 bg-[#ff0033] rounded-full" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={index} className="flex justify-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;