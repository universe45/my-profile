import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import DataManager from "@/manager/DataManager";

export default function MyCard() {
    const dataManager = new DataManager();

    const personalData = dataManager.getPersonalData();
    const profileLink = dataManager.getProfileLink();



    return (
        <div>
            <div className="card bg-[#393E46] shadow-xl w-[22em] h-[22rem]">
                <figure className="relative flex items-center justify-center h-40 shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-white/10" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-white flex items-center justify-center shadow-lg ring-4 ring-white/10">
                        <span className="text-4xl font-bold text-pink-600 select-none">⌘</span>
                    </div>
                </figure>
                <div className="card card-body gap-5 justify-center">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="card-title font-bold">
                            {personalData[0].name}
                        </h2>
                        <a className="badge badge-warning badge-outline rounded-full p-3 font-normal select-none">
                            {personalData[0].position}
                        </a>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-4 gap-5 justify-items-center select-none">
                        <a href={`tel:${personalData[0].mobile}`} title="Phone no." className="btn btn-circle rounded-full w-16 h-16">
                            <Icon icon="fluent-color:phone-32" width="30" height="30" />
                        </a>
                        <a href={`mailto:${personalData[0].email}`} title="G-Mail" className="btn btn-circle rounded-full w-16 h-16">
                            <Icon icon="skill-icons:gmail-light" width="30" height="30" />
                        </a>
                        <a href={profileLink[1].link} title="GitHub" className="btn btn-circle rounded-full w-16 h-16" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" style={{ color: "#6e5494" }} width="40" height="40" />
                        </a>
                        <a href={profileLink[0].link} title="LinkedIn" className="btn btn-circle rounded-full w-16 h-16" target="_blank" rel="noopener noreferrer">
                            <Icon icon="skill-icons:linkedin" width="30" height="30" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
