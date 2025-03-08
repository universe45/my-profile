/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InfoCard() {
    return (
        <div>
            <div className="card lg:h-[24rem] md:h-[24rem] bg-[#393E46] lg:card-side shadow-xl">
                <figure>
                    <img className="object-cover w-[64rem] h-[18rem] lg:h-full lg:w-[24rem]" src="my-profile/nightSky.jpg" alt="Profile Picture" />
                </figure>
                <div className="card card-body gap-5 justify-center">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="card-title font-bold">
                            TITIPONG WANNACHAI
                        </h2>
                        <a className="badge badge-warning badge-outline rounded-full p-3 font-normal select-none">
                            Software Engineer
                        </a>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-4 gap-5 justify-items-center select-none">
                        <a href="tel:+66954819416" className="btn btn-circle rounded-full w-16 h-16">
                            <Icon icon="fluent-color:phone-32" width="30" height="30" />
                        </a>
                        <a href="mailto:ttp.wannachai@gmail.com" className="btn btn-circle rounded-full w-16 h-16">
                            <Icon icon="skill-icons:gmail-light" width="30" height="30" />
                        </a>
                        <a href="https://github.com/universe45" className="btn btn-circle rounded-full w-16 h-16" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" style={{ color: "#6e5494" }} width="40" height="40" />
                        </a>
                        <a href="https://www.linkedin.com/in/wnncttp" className="btn btn-circle rounded-full w-16 h-16" target="_blank" rel="noopener noreferrer">
                            <Icon icon="skill-icons:linkedin" width="30" height="30" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}