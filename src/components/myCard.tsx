import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import DataManager
    from "@/manager/DataManager";

export default function MyCard() {
    const dataManager = new DataManager();

    const personalData = dataManager.getPersonalData();
    const profileLink = dataManager.getProfileLink();

    return (
        <div>
            <div className="card bg-[#393E46] shadow-xl w-[22em] h-[22rem]">
                <figure>
                    <Image className="" src={personalData[0].image} alt="Profile Image" width={512} height={512} />
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
                        <a href={`tel:${personalData[0].mobile}`} className="btn btn-circle rounded-full w-16 h-16">
                            <Icon icon="fluent-color:phone-32" width="30" height="30" />
                        </a>
                        <a href={`mailto:${personalData[0].email}`} className="btn btn-circle rounded-full w-16 h-16">
                            <Icon icon="skill-icons:gmail-light" width="30" height="30" />
                        </a>
                        <a href={profileLink[1].link} className="btn btn-circle rounded-full w-16 h-16" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" style={{ color: "#6e5494" }} width="40" height="40" />
                        </a>
                        <a href={profileLink[0].link} className="btn btn-circle rounded-full w-16 h-16" target="_blank" rel="noopener noreferrer">
                            <Icon icon="skill-icons:linkedin" width="30" height="30" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}