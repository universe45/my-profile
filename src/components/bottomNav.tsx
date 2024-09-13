"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const listItems = [
    { id: "1-AboutMe", label: "A B O U T"},
    { id: "2-Skill", label: "S K I L L S"},
    { id: "3-Experience", label: "E X P E R I E N C E S"},
    { id: "4-Certificate", label: "C E R T I F I C A T E S"},
];

export default function BottomNav() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleItemClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="dropdown dropdown-top dropdown-end right-0">
            <div 
                tabIndex={0} 
                role="button" 
                className="btn w-16 h-16 rounded-full btn-outline hover:bg-gray-100/90 hover:text-black" 
                onClick={toggleDropdown}
            >
                <Icon 
                    icon={isOpen ? "mdi:close" : "mdi:menu"} 
                    className={`w-auto h-12 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} 
                />
            </div>
            <ul 
                tabIndex={0} 
                className={`dropdown-content menu rounded-box outline outline-1 outline-white z-[1000] w-52 p-2 shadow ${isOpen ? 'block' : 'hidden'}`}
            >
                {listItems.map((item) => (
                    <li key={item.id} className="rounded-box text-xs py-2 hover:bg-white hover:text-black">
                        <a href={`#${item.id}`} onClick={handleItemClick}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}