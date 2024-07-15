"use client";
import React, { useEffect, useState } from "react";

const steps = [
    { id: "1-AboutMe", label: "About Me" },
    { id: "2-Education", label: "Education" },
    { id: "3-Experience", label: "Experience" },
    { id: "4-Activity", label: "Activity" },
];

export default function StepNav() {
    const [selectedStep, setSelectedStep] = useState<string>("1-AboutMe");

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSelectedStep(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        });

        steps.forEach(step => {
            const section = document.getElementById(step.id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            steps.forEach(step => {
                const section = document.getElementById(step.id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // Prevent default anchor behavior
        setSelectedStep(id);

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ul className="fixed steps steps-vertical w-fit h-screen px-4">
            {steps.map((step) => (
                <li key={step.id} data-content="" className={`step ${selectedStep === step.id ? 'step-accent' : ''}`}>
                    <a
                        href={`#${step.id}`}
                        className={`h-fit w-fit btn ${selectedStep === step.id ? 'btn-outline' : 'btn-ghost'}`}
                        onClick={(e) => handleClick(e, step.id)}
                    >
                        {step.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}