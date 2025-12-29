import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Contact() {
    return (
        <section className="container py-24">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 uppercase">
                    Contact <span className="text-[#ff0033]">Me</span>
                </h2>
                <div className="h-1 w-20 bg-[#ff0033] rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">

                {/* WhatsApp Card */}
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-[#25D366] transition-colors group">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4 pt-10">
                        <div className="p-4 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                            {/* WhatsApp SVG - Lucide doesn't have it, so using inline SVG */}
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 h-8 fill-[#25D366]"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold">WhatsApp</h3>
                        <p className="text-muted-foreground text-sm">
                            Chat available 24/7
                        </p>
                        <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                            <a
                                href="https://wa.me/2348145096342"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Send Message
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-[#ff0033] transition-colors group">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4 pt-10">
                        <div className="p-4 rounded-full bg-[#ff0033]/10 group-hover:bg-[#ff0033]/20 transition-colors">
                            <Mail className="w-8 h-8 text-[#ff0033]" />
                        </div>
                        <h3 className="text-xl font-bold">Email</h3>
                        <p className="text-muted-foreground text-sm">
                            Get in touch via email
                        </p>
                        <Button className="w-full bg-[#ff0033] hover:bg-[#cc0029] text-white" asChild>
                            <a href="mailto:ibrahimabdulosama@gmail.com">
                                Send Email
                            </a>
                        </Button>
                    </CardContent>
                </Card>

            </div>
        </section>
    );
}
