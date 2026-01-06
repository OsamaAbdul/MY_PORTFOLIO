import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Education({ education }) {
  return (
    <section id="education" className="container py-24 scroll-mt-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 uppercase">
          Edu<span className="text-[#ff0033]">cation</span>
        </h2>
        <div className="h-1 w-20 bg-[#ff0033] rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur border-muted transition-colors hover:border-primary/50">
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start gap-4">
                <Badge variant="outline" className="text-xs font-normal">
                  {edu.type}
                </Badge>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              <CardTitle className="text-xl mt-2">{edu.institution}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-primary mb-2 text-lg">{edu.course}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}