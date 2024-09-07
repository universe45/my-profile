"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

const barItems = [
    { id: "1-AboutMe", label: "About Me", icon: "mdi:about-circle-outline" },
    { id: "2-Education", label: "Education", icon: "mdi:school-outline" },
    { id: "3-Experience", label: "Experience", icon: "ic:outline-work-history" },
    { id: "4-Activity", label: "Activity", icon: "lucide:square-activity" },
];

export default function Navbar() {
    const [selectedBarItem, setSelectedBarItem] = useState("1-AboutMe");

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSelectedBarItem(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        });

        barItems.forEach(step => {
            const section = document.getElementById(step.id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            barItems.forEach(step => {
                const section = document.getElementById(step.id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string): void => {
        e.preventDefault();
        setSelectedBarItem(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const buttonStyle = {
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    };

    return (
        <div className="flex flex-col">
            <div className="btm-nav relative rounded-box flex w-full justify-center items-center px-4 gap-[70px] lg:hidden ">
                {barItems.map(item => (
                    <button
                        key={item.id}
                        style={buttonStyle}
                        className={selectedBarItem === item.id ? "active" : ""}
                        onClick={(e) => handleClick(e, item.id)}
                    >
                        <Icon icon={item.icon} width="30" height="30" />
                    </button>
                ))}
            </div>
            <div className="px-14 py-4 text-center bg-base-100 w-full font-sans text-sm">
                © {new Date().getFullYear()} UNIVERSE. All rights reserved.
            </div>
        </div>
    );
}