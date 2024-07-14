/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate library

export default function InfoCard() {
    return (
        <div className="carousel carousel-center carousel-vertical align-middle">
            <section id="AboutMe" className="caroseul-item flex flex-col h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card card-side bg-[#191919] shadow-xl">
                        <figure>
                            <Image className="rounded-lg w-48 h-64 object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Titpong Wannachai</h2>
                            <div className="flex flex-row gap-4">
                                <a href="tel:+66954819416" className="btn btn-outline">Call me</a>
                                <a href="mailto:ttp.wannachai@gmail.com" className="btn btn-outline">Email me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Education" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen justify-center">
                    <div className="card bg-[#191919] shadow-xl">
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-4">
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
                                    <time className="font-mono italic">2019 - 2021</time>
                                    <div className="text-lg font-black">Chiang Rai Municipality School 6</div>
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
                                    <time className="font-mono italic">2021 - Present</time>
                                    <div className="text-lg font-black">Bangkok University</div>
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
                    <div className="card card-side bg-[#191919] shadow-xl">
                        <figure>
                            <Image className="rounded-lg w-48 h-64 object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Activity" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen">
                    <div className="flex flex-row gap-10 card-body justify-center bg-[#191919] rounded-lg">
                        <div className="justify-left rounded-full w-32 h-32">
                            <Image className="rounded-lg w-full h-full object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} /> {/* Fix the src attribute */}
                        </div>

                        <div className="flexflex-col justify-right">
                            <h2 className="card-title">Activities</h2>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}