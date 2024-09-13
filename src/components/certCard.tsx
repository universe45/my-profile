/* eslint-disable @next/next/no-img-element */
import { title } from "process";
import React, { useRef, useState, useEffect } from "react";

interface CertCardProps {
    imageSrc: string;
    altText: string;
    title: string;
    link: string;
}

const CertCard: React.FC<CertCardProps> = ({ imageSrc, altText, title, link }) => (
    <a href={link} className="no-underline" target="_blank" rel="noopener noreferrer">
        <div className="card bg-transparent w-auto shadow-sm gap-5 items-center my-10 transform transition-transform hover:scale-110">
            <figure className="pt-10">
                <img
                    src={imageSrc}
                    alt={altText}
                    width={400}
                    className="rounded-lg"
                />
            </figure>
            <div className="badge badge-outline text-center p-4">
                <div className="card-title text-sm">
                    {title}
                </div>
            </div>
        </div>
    </a>
);

const cardData = [
    {
        imageSrc: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
        altText:"Fundamentals of Deep Learning",
        title:"NVIDIA",
        link:"https://learn.nvidia.com/certificates?id=eb3f610f34ce4582b5780abd66d3f42f"
    },
    {
        imageSrc: "https://cdn.qwiklabs.com/XtN9bsXRPu16Qi8rfkEKllJLdLJW1cCFACu6NgEjkGk%3D",
        altText: "Analyzing Speech and Language with Google APIs",
        title: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/63e5b97c-fa72-4e4e-9f58-cdca46e7aab7/badges/9321994"
    },
    {
        imageSrc: "https://cdn.qwiklabs.com/IogaVGLwAz%2Bd%2FnGGV%2BpJLZ%2BunvPScnYCL0FwVWLT%2FY0%3D",
        altText: "Classify Images with TensorFlow on Google Cloud",
        title: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/63e5b97c-fa72-4e4e-9f58-cdca46e7aab7/badges/9370781"
    },
    {
        imageSrc: "https://cdn.qwiklabs.com/AX%2B9jIITVd7mqWAfNhSREi4FP5ep%2Fv9%2BZvrGnZEbQd0%3D",
        altText: "Perform Predictive Data Analysis in BigQuery",
        title: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/63e5b97c-fa72-4e4e-9f58-cdca46e7aab7/badges/9371579"
    },
    {
        imageSrc: "https://cdn.qwiklabs.com/zf4W09BpF8ntvKRBqeH3VntMFtb%2Bz8Itfc9FSCiAlL0%3D",
        altText: "Analyze Images with the Cloud Vision API",
        title: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/63e5b97c-fa72-4e4e-9f58-cdca46e7aab7/badges/9380368"
    },
    {
        imageSrc: "https://cdn.qwiklabs.com/zi3%2BgR5zKO1uBWS3fnr%2BD%2FXCkCJYliqvBAH3F8Ex6ko%3D",
        altText: "Monitor and Manage Google Cloud Resources",
        title: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/63e5b97c-fa72-4e4e-9f58-cdca46e7aab7/badges/9382760"
    },
    {
        imageSrc: "https://cdn.qwiklabs.com/%2BlsBsryVyG0kEn7y2kgNUoCJxiq4mL%2BFeCfysb3Cw%2BI%3D",
        altText: "Manage Kubernetes in Google Cloud",
        title: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/63e5b97c-fa72-4e4e-9f58-cdca46e7aab7/badges/9385111"
    },
];

const App: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndicatorClick = (index: number) => {
        setActiveIndex(index);
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.scrollWidth / cardData.length;
            carouselRef.current.scrollTo({
                left: scrollAmount * index,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const ref = carouselRef.current;

        const handleScroll = () => {
            if (ref) {
                const scrollAmount = ref.scrollWidth / cardData.length;
                const newIndex = Math.round(ref.scrollLeft / scrollAmount);
                setActiveIndex(newIndex);
            }
        };

        if (ref) {
            ref.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (ref) {
                ref.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="relative no-scrollbar">
            <div ref={carouselRef} className="flex overflow-x-auto gap-4 overflow-visible">
                {cardData.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <CertCard
                            imageSrc={card.imageSrc}
                            altText={card.altText}
                            title={card.title}
                            link={card.link}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-2">
                {cardData.map((_, index) => (
                    <button
                        key={index}
                        className={`mx-2 p-2 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;