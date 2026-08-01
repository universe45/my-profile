import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InfoCard() {
    return (
        <div>
            <div className="card lg:h-[24rem] md:h-[24rem] bg-[#393E46]/60 backdrop-blur-md border border-white/10 lg:card-side shadow-2xl overflow-hidden">
                {/* Glassmorphism avatar panel */}
                <figure className="lg:w-56 shrink-0 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-600/10" />
                    <div className="relative flex flex-col items-center gap-3 py-8 px-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg ring-4 ring-white/10">
                            <span className="text-3xl font-bold text-white select-none tracking-wide">TW</span>
                        </div>
                        <span className="text-xs font-medium text-yellow-400/80 uppercase tracking-widest select-none">Software Eng.</span>
                    </div>
                </figure>

                {/* Info panel */}
                <div className="card card-body gap-4 justify-center">
                    <div className="flex flex-col gap-1">
                        <h2 className="card-title font-bold text-xl tracking-tight">
                            TITIPONG WANNACHAI
                        </h2>
                        <span className="badge badge-warning badge-outline rounded-full px-3 py-2 text-xs font-normal select-none w-fit">
                            Software Engineer
                        </span>
                    </div>

                    {/* Contact rows */}
                    <div className="flex flex-col gap-2 text-sm text-base-content/70">
                        <a href="tel:+66954819416" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                            <Icon icon="fluent-color:phone-32" width="18" height="18" />
                            <span>+66 95 481 9416</span>
                        </a>
                        <a href="mailto:ttp.wannachai@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                            <Icon icon="skill-icons:gmail-light" width="18" height="18" />
                            <span>ttp.wannachai@gmail.com</span>
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-3 pt-1 select-none">
                        <a href="https://github.com/universe45" className="btn btn-sm btn-ghost gap-2 px-3 border border-white/10 hover:border-white/30 hover:bg-white/5" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" style={{ color: "#9d7fe0" }} width="18" height="18" />
                            <span className="text-xs">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/wnncttp" className="btn btn-sm btn-ghost gap-2 px-3 border border-white/10 hover:border-white/30 hover:bg-white/5" target="_blank" rel="noopener noreferrer">
                            <Icon icon="skill-icons:linkedin" width="18" height="18" />
                            <span className="text-xs">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
