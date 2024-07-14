/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate library
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InfoCard() {
    return (
        <div className="carousel carousel-center carousel-vertical align-middle">
            <section id="AboutMe" className="caroseul-item flex flex-col h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card card-side bg-[#191919] shadow-xl">
                        <figure className="w-fit h-fit">
                            <Image className="rounded-lg object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title py-2">Titpong Wannachai</h2>
                            <div className="flex flex-col gap-10">
                                <div>
                                    Hello, I'm a student at Bangkok University majoring in Computer Science (Data Science & Cybersecurity).
                                    Interested in programming and if you have any opportunities, please contact to me.
                                </div>
                                <div className="flex flex-row gap-4">
                                    <a href="tel:+66954819416" className="btn btn-outline">Call</a>
                                    <a href="mailto:ttp.wannachai@gmail.com" className="btn btn-outline">Email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Education" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card bg-[#191919] shadow-xl">
                        <ul className="timeline timeline-snap-icon w-fit max-md:timeline-compact timeline-vertical py-4">
                            <li>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-mono italic rounded-box bg-base-100 px-2 py-2">2019 - 2021</time>
                                    <div className="text-lg font-black py-2">
                                        Chiang Rai Municipality School 6
                                    </div>
                                    <div>
                                        Secondary School ●
                                    </div>
                                    <div>
                                        Engineering and Applied Sciences Program ●
                                    </div>
                                </div>
                                <hr />
                            </li>

                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end">
                                    <time className="font-mono italic rounded-box bg-base-100 px-2 py-2">2021 - Present</time>
                                    <div className="text-lg font-black py-2">
                                        Bangkok University
                                    </div>
                                    <div>
                                        ● Bachelor Degree
                                    </div>
                                    <div>
                                        ● School of Information Technology and Innovation
                                    </div>
                                    <div>
                                        ● Major in Computer Science (Data Science & Cybersecurity)
                                    </div>
                                </div>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="Experience" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card card-side h-max bg-[#191919] shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-lg font-bold">Center of Spacialty Innovation</h2>
                                <div>
                                    <div className="text-lg font-bold">Position:</div>
                                    <div>Software and Web Development</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold">Period:</div>
                                    <div>2023 - Present</div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Project:</h4>
                                    <p>● Radar DR-172 ADV</p>
                                    <p>● Arny Air Defense System (AADS)</p>
                                    <p>● VR-DARTS</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="text-lg font-bold"> Tech stacks</div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <Icon icon="logos:typescript-icon-round" width="40" height="40" />
                                        <Icon icon="file-icons:nextjs" width="40" height="40" />
                                        <Icon icon="devicon:csharp" width="40" height="40" />
                                        <Icon icon="logos:python" width="40" height="40" /> 
                                        <Icon icon="logos:mysql" width="40" height="40" />
                                        <Icon icon="logos:docker-icon" width="40" height="40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Activity" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card card-side bg-[#191919] shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-col gap-6">
                                    <p>● SEC GIRL 2023 work shop</p>
                                    <p>● Control roon staff of BUxKAIT Internship Program</p>
                                    <p>● Final Pitching BAMxBU Unicorn Battle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}