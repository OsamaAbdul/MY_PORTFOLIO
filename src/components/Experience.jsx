import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        role: "Software Engineer and Lab Facilatator",
        company: "02innovationsLab Lafia, Nasarawa State, Nigeria",
        period: "2025 - Present",
        responsibilities: [
            "Handle software Development",
            "Takes Special classes on Software engineering"
        ]
    },
    {
        role: "Asst. Computer Analyst",
        company: "NITDA, Gombe State University, Nigeria",
        period: "2024 - 2025",
        responsibilities: [
            "Developed a fully functional Staff Management System with latest technologies",
            "Fixing students Remita related payments issues in the school portal",
            "Registration of newly admitted students"
        ]
    },
    {
        role: "Web Development Class Instructor",
        company: "Yahaya Ahmed Model School, Gombe State, Nigeria",
        period: "Oct 2024",
        responsibilities: [
            "Trained Secondary schoolstudents on web development",
            "Instruct and Monitor students"
        ]
    },
    {
        role: "Web Development Instructor",
        company: "Ta’al Model E-library Lafia, Nasarawa State, Nigeria",
        period: "2022 - 2023",
        responsibilities: [
            "Trained 50 students in Front-end Programming language and Problem solving skills",
            "Conducted and supervise students projects on programming"
        ]
    }
];

export default function Experience() {
    return (
        <section className="container py-24">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-serif">
                    Work <span className="text-[#ff0033]">Experience</span>
                </h2>
                <div className="h-1 w-20 bg-[#ff0033] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto relative border-l border-border/50 ml-4 md:ml-auto space-y-12">
                {experienceData.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[#ff0033] ring-4 ring-background" />

                        <div className="grid md:grid-cols-5 gap-8">
                            {/* Date Section - Left on desktop */}
                            <div className="md:col-span-1 md:text-right pt-1">
                                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="md:col-span-4">
                                <Card className="bg-card/50 backdrop-blur border-muted transition-all hover:border-[#ff0033]/50 hover:shadow-lg">
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <CardTitle className="text-xl text-white font-serif">{exp.role}</CardTitle>
                                            <Badge variant="secondary" className="w-fit text-xs font-normal">
                                                <Briefcase className="w-3 h-3 mr-1" />
                                                {exp.company}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="leading-relaxed">
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
