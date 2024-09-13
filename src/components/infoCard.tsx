/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalCard from "@/components/modalExpCard";
import CertCard from "./certCard";

export default function InfoCard() {
    return (
        <div>
            <section id="1-AboutMe" className="flex flex-col h-[75vh] lg:h-screen justify-center lg:py-10 py-5">
                <div className="card glass lg:h-[24rem] md:h-[24rem] justify-center bg-[#393E46] lg:card-side shadow-xl">
                    <figure className="">
                        <img className="object-cover w-[64rem] h-[18rem] lg:h-full lg:w-[24rem]" src="my-profile/nightSky.jpg" alt="Profile Picture" />
                    </figure>
                    <div className="card card-body gap-3">
                        <div className="flex flex-col gap-2">
                            <h2 className="card-title font-bold justify-start">
                                TITIPONG WANNACHAI
                            </h2>
                            <a className="badge badge-warning badge-outline rounded-full p-3 font-normal justify-start">
                                Software & Web Developer
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-5">
                            <a href="tel:+66954819416" className="btn btn-outline">
                                <Icon icon="el:phone-alt" width="30" height="30" />
                            </a>
                            <a href="mailto:ttp.wannachai@gmail.com" className="btn btn-outline">
                                <Icon icon="grommet-icons:mail" width="30" height="30" />
                            </a>
                            <a href="https://github.com/universe45" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                <Icon icon="mdi:github" width="40" height="40" />
                            </a>
                            <a href="https://www.linkedin.com/in/wnncttp" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                <Icon icon="mdi:linkedin" width="40" height="40" />
                            </a>
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="divider"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h1 className="badge badge-lg badge-outline font-bold justify-start p-4">
                                    Education
                                </h1>
                            </div>
                            <div>
                                <a className="card-body p-0 font-bold justify-start">
                                    Bangkok University (2021 - Present)
                                </a>
                                <a className="card-body p-0 font-normal justify-start">
                                    School of Information Technology and Innovation
                                </a>
                                <a className="card-body p-0 font-normal justify-start ">
                                    (Computer Science)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex w-full flex-col">
                <div className="divider"> S K I L L S </div>
            </div>

            <section id="2-Skill" className="flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card bg-[#393E46] shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="text-lg font-bold py-2">
                                        Programming Language
                                    </div>
                                    <div className="flex gap-5">
                                        <Icon icon="logos:typescript-icon-round" width="40" height="40" />
                                        <Icon icon="logos:javascript" width="40" height="40" />
                                        <Icon icon="logos:python" width="40" height="40" />
                                        <Icon icon="devicon:csharp" width="40" height="40" />
                                        <Icon icon="file-icons:nextjs" width="40" height="40" />
                                    </div>
                                </div>

                                <div className="flex w-full flex-col">
                                    <div className="divider"></div>
                                </div>

                                <div className="flex flex-col gap-4 items-center">
                                    <div className="text-lg font-bold py-2">
                                        Framework and Library
                                    </div>
                                    <div className="flex gap-5">
                                        <Icon icon="logos:tailwindcss-icon" width="40" height="40" />
                                        <Icon icon="vscode-icons:file-type-node" width="40" height="40" />
                                        <Icon icon="skill-icons:dotnet" width="40" height="40" />
                                        <Icon icon="logos:react" width="40" height="40" />
                                        <Icon icon="devicon:vuejs" width="40" height="40" />
                                    </div>
                                </div>

                                <div className="flex w-full flex-col">
                                    <div className="divider"></div>
                                </div>

                                <div className="flex flex-col gap-4 items-center">
                                    <div className="text-lg font-bold py-2">
                                        Tools
                                    </div>
                                    <div className="flex gap-5">
                                        <Icon icon="logos:visual-studio-code" width="40" height="40" />
                                        <Icon icon="mdi:github" width="40" height="40" />
                                        <Icon icon="logos:git-icon" width="40" height="40" />
                                        <Icon icon="devicon:notion" width="40" height="40" />
                                        <Icon icon="logos:mysql" width="40" height="40" />
                                        <Icon icon="logos:docker-icon" width="40" height="40" />
                                        <Icon icon="vscode-icons:file-type-postman" width="40" height="40" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex w-full flex-col">
                <div className="divider"> E X P E R I E N C E S </div>
            </div>

            <section id="3-Experience" className="flex flex-row gap-4 h-screen py-10 justify-center items-center">
                <ModalCard />
            </section>

            <div className="flex w-full flex-col">
                <div className="divider"> C E R T I F I C A T E S </div>
            </div>

            <section id="4-Certificate" className="flex flex-row gap-4 h-screen py-10 justify-center items-center">
                <div className="carousel carousel-center carousel-vertical align-middle select-none">
                    <div className="align-middle select-none">
                        <div className="flex w-full flex-row justify-start">
                            <CertCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}