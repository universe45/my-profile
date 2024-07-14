"use client";
import React, { useEffect, useState } from "react";

const steps = [
    { id: "AboutMe", label: "About Me" },
    { id: "Education", label: "Education" },
    { id: "Experience", label: "Experience" },
    { id: "Activity", label: "Activity" },
];

export default function StepNav() {
    const [selectedStep, setSelectedStep] = useState<string>("AboutMe");

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

    return (
        <ul className="fixed steps steps-vertical w-fit h-screen px-4">
            {steps.map((step) => (
                <li key={step.id} data-content="" className="step step-neutral">
                    <a
                        href={`#${step.id}`}
                        className={`h-fit w-fit btn ${selectedStep === step.id ? 'btn-accent' : 'btn-outline'}`}
                        onClick={() => setSelectedStep(step.id)}
                    >
                        {step.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}