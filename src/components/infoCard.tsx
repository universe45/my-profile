"use client";
import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate library

export default function InfoCard() {
    return (
        <div className="carousel carousel-center carousel-vertical align-middle">
            <section id="AboutMe" className="caroseul-item flex flex-col gap-\
             h-screen py-10">
                <div className="card h-screen">
                    <div className="flex flex-row gap-10 card-body justify-center bg-[#191919] rounded-lg">
                        <div className="justify-left rounded-full w-64 h-64">
                            <Image className="rounded-lg w-full h-full object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} /> {/* Fix the src attribute */}
                        </div>
                        
                        <div className="flexflex-col justify-right">
                            <h2 className="card-title">About Me</h2>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Education" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen">
                    <div className="flex flex-row gap-10 card-body justify-center bg-[#191919] rounded-lg">
                        <div className="justify-left rounded-full w-32 h-32">
                            <Image className="rounded-lg w-full h-full object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} /> {/* Fix the src attribute */}
                        </div>
                        
                        <div className="flexflex-col justify-right">
                            <h2 className="card-title">About Me</h2>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Experience" className="caroseul-item flex flex-col gap-4 h-screen py-10">
                <div className="card h-screen">
                    <div className="flex flex-row gap-10 card-body justify-center bg-[#191919] rounded-lg">
                        <div className="justify-left rounded-full w-32 h-32">
                            <Image className="rounded-lg w-full h-full object-cover" src="/profile.jpg" alt="Profile Picture" width={1080} height={1920} /> {/* Fix the src attribute */}
                        </div>
                        
                        <div className="flexflex-col justify-right">
                            <h2 className="card-title">About Me</h2>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
                            <p className="card-text">I am a student at the University of Toronto studying Computer Science.</p>
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