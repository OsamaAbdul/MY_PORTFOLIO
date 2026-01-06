const projectData = [
    {
        name: "Xandeum Analytics",
        description: "A comprehensive analytics platform for Xandeum pNodes, built for the Xandeum Superteam Bounty. This dashboard allows you to monitor the status, uptime, and version distribution of pNodes in the network via direct pRPC connection.",
        technologies: ["React", "TailwindCss", "Supabase", "SQL", "Shadcn UI"],
        link: "https://github.com/Osamaabdul/Xandeum-Analytics",
        image: "/images/xandium.png",
        live: "https://xandeum-pnode-monitor.vercel.app/"
    },
    {
        name: "EduSparkz",
        description: "An innovative web app that transforms learning into an interactive and personalized experience — powered by state-of-the-art AI APIs. Upload your PDFs, .docx and images auto-generate quizzes, evaluate answers in real-time, and get smarter feedback instantly.Whether you're a student, teacher, or lifelong learner — this tool is your smart study partner.",
        technologies: ["React", "Gemini API", "TailwindCss", 'NodeJs', "ExpressJS", "JWT", "e.t.c"],
        link: "https://github.com/Osamaabdul/EduSparkz",
        image: "/images/edu-sparkz.png",
        live: "https://scrolly-airdrop-catcher.vercel.app/"
    },
    {
        name: "Airdrop Catcher",
        description: "Airdrop Catcher is a fast-paced, high-stakes arcade game built on Solana and Next.js. Test your reflexes as you scramble to collect valuable tokens like SOL, BONK, and JUP while frantically avoiding scams, rugs, and wallet drainers.",
        technologies: ["NextJs", "Typescript", "JavaScript", "e.t.c"],
        link: "https://github.com/OsamaAbdul/scrolly-airdrop-catcher",
        image: "/images/scrolly.png",
        live: "https://scrolly-airdrop-catcher.vercel.app/"
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
        image: '/images/portfolio-site.png',
        live: 'https://osamaabdul-portfolio.netlify.app'
    },
    {
        name: 'AI-Powered Face Tracking Attendance System ',
        description: 'A modern, AI-powered attendance tracking application that leverages facial recognition and geolocation technology to ensure accurate and secure attendance verification at designated hubs.',
        technologies: ['React', 'Gemini API', 'Typescript', 'TailwindCss', 'Supabase', 'Edge Functions', 'Shadcn UI', 'SQL', 'Google Maps API', 'e.t.c'],
        link: 'https://github.com/OsamaAbdul/attendance-system',
        image: '/images/attendance.png',
        live: 'https://02innovationslab-tvet-attendance-sy.vercel.app/'
    },
    {
        name: 'BlockDaG Charity App',
        description: 'BlockDaG Charity App is a decentralized web application designed to facilitate secure and transparent charitable donations on the BlockDAG network. Users can browse registered charities, make donations using BDAG tokens, and track their contributions in real-time',
        technologies: ['React', 'Gemini API', 'Typescript', 'TailwindCss', 'Supabase', 'Edge Functions', 'Shadcn UI', 'SQL', 'Google Maps API', 'e.t.c'],
        link: 'https://github.com/OsamaAbdul/blockdag-charity-app',
        image: '/images/bdagcharity.png',
        live: 'https://bdagcharity-app.vercel.app'
    },
    {
        name: 'AGILE Tracker',
        description: 'The AGILE (Adolescent Girls Initiative for Learning and Empowerment) Tracker is a specialized digital monitoring and evaluation platform developed for Nasarawa State Ministry of Education.',
        technologies: ['React', 'Supabase', 'TailwindCss', 'Edge Functions', 'Shadcn UI', 'SQL', 'Typescript'],
        link: 'https://github.com/OsamaAbdul/agile-tracker',
        image: '/images/agile.png',
        live: 'https://agile-tracker-psi.vercel.app/auth'
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
        name: "NAYFLI",
        description: ' NAYFLI (Nasarawa Young Female Leadership Initiative) is a transformative leadership fellowship designed exclusively for young women in Nasarawa State. We believe every girl carries a voice that can reshape her community and through empowerment, mentorship, and sisterhood, NAYFLI helps that voice rise.',
        technologies: ['React', 'Vite', 'SQL', 'Tailwindcss', 'Supabase', 'Edge Functions', 'Shadcn UI', 'Typescript', 'e.t.c'],
        image: '/images/nayfli.png',
        live: 'https://www.nayfli.org/',
    },
    {
        name: "memeX",
        description: 'MemeX is a high-fidelity, production-ready memecoin launchpad built on the MultiversX blockchain. It leverages the power of Google Gemini AI to orchestrate the entire creation process from naming and branding to security audits and blockchain deployment with just a single prompt.',
        technologies: ['React', 'Vite', 'SQL', 'Tailwindcss', 'Supabase', 'Edge Functions', 'Shadcn UI', 'Rust', 'Typescript', 'Gemini API', 'MultiversX', 'e.t.c'],
        image: '/images/memex.png',
        live: 'https://memex-blush.vercel.app/',
        link: 'https://github.com/OsamaAbdul/memeX',
    },

    {
        name: "NFC Talents",
        description: "NFC Talents is a modern web application designed to connect aspiring individuals from Northern Nigeria with mentors, investors, and opportunities that empower growth and innovation",
        technologies: ['React', 'Vite', 'SQL', 'Tailwindcss', 'Supabase', 'Edge Functions', 'Shadcn UI', 'Typescript', 'e.t.c'],
        image: "/images/nfc.png",
        live: 'https://nfc-talent.vercel.app/'
    },
    {
        name: "Farmer Sales App",
        description: "Connect Farmers to Buyers and Top Agro-Companies to get verified seeds, herbicides, fertilizers, grants and machineries for easy farming experience. Also Used Grok AI APi to fetch all agric trends on popular social network app like X formerly Known as Twitter for the farmers.",
        technologies: ["React", "Grok API", "TailwindCss", 'NodeJs', "ExpressJS", "JWT", "e.t.c"],
        link: "https://github.com/OsamaAbdul/Farmer_Sales_App",
        image: "/images/farmer.png"
    },
];

export default projectData;