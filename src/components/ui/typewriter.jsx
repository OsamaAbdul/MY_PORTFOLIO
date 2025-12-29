import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Typewriter = ({ texts, speed = 100, pause = 1000 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect independent of typing
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    useEffect(() => {
        if (index === texts.length) return;

        if (subIndex === texts[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pause);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, texts, speed, pause]);

    useEffect(() => {
        setDisplayedText(texts[index].substring(0, subIndex));
    }, [subIndex, index, texts]);

    return (
        <span className="font-mono text-foreground text-lg md:text-xl tracking-wide">
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-5 ml-1 bg-[#ff0033] align-middle"
            />
        </span>
    );
};

export default Typewriter;
