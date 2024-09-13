"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

// Modal component
function Modal({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const dialog = dialogRef.current;
        if (dialog) {
            dialog.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            if (dialog) {
                dialog.removeEventListener("keydown", handleKeyDown);
            }
        };
    }, [onClose]);

    const handleClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = event.currentTarget;
        const rect = dialog.getBoundingClientRect();
        const isInDialog = 
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!isInDialog) {
            onClose();
        }
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen && dialog) {
            dialog.showModal();
        } else if (dialog) {
            dialog.close();
        }
    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            className="modal"
            onClick={handleClickOutside}
        >
            {/* Prevent event propagation for clicks inside the modal content */}
            <div 
                className="modal-box bg-opacity-80 bg-black relative"
                onClick={(e) => e.stopPropagation()}
            >
                <form method="dialog">
                    <button 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </form>
                {children}
            </div>
        </dialog>
    );
}

interface Experience {
    id: string;
    titile: string;
    organization: string;
    duration: string;
    dur_txt_color: string;
    dur_border_color: string;
    modalTitle: string;
    modalContent: string;
}

const exps: Experience[] = [
    {
        id: "exp1",
        titile: "Research Assistant",
        organization: "Center of Specialty Innovation",
        duration: "Jul 2024 - Currently",
        dur_txt_color: "text-green-400",
        dur_border_color: "border-green-400",
        modalTitle: "Research Assistant (RA)",
        modalContent: "My experience with the Army Air Defense System focused on advanced radar monitoring and threat detection.",
    },
    {
        id: "exp2",
        titile: "Junior Back-End Developer",
        organization: "Center of Specialty Innovation",
        duration: "Jul 2023 - Currently",
        dur_txt_color: "text-green-400",
        dur_border_color: "border-green-400",
        modalTitle: "Back-End Developer",
        modalContent: "This system focuses on real-time aircraft tracking and integrates military-grade radar technology.",
    },
    {
        id: "exp3",
        titile: "Junior Tester",
        organization: "Center of Specialty Innovation",
        duration: "Aug 2023 - Apr 2024",
        dur_txt_color: "text-amber-200",
        dur_border_color: "border-amber-200",
        modalTitle: "Tester",
        modalContent: "A unique radar system built for both defense and civilian use, featuring real-time monitoring and AI integration.",
    },
];

const generateCradContent = (exp: Experience) => (
    <div className="card-body flex flex-col font-bold justify-center items-center">
        <h1 className="py-4">{exp.titile}</h1>
        <div className="badge badge-ms badge-outline font-medium p-4 m-2">
            {exp.organization}
        </div>
        <div className={`badge badge-ms bg-transparent ${exp.dur_border_color} ${exp.dur_txt_color} badge-outline font-medium p-4`}>
            {exp.duration}
        </div>
    </div>
);

const gengerateModalContent = (exp: Experience) => (
    <>
        <h3 className="font-bold text-lg">{exp.modalTitle}</h3>
        <p className="py-4 ">{exp.modalContent}</p>
    </>
);

// Dynamic modal and card data with custom JSX
const modalData = exps.map(exp => ({
    id: exp.id,
    cardContent: generateCradContent(exp),
    modalContent: gengerateModalContent(exp),
}));

export default function ModalCard() {
    const [openModalId, setOpenModalId] = useState<string | null>(null);

    const openModal = (id: string) => {
        setOpenModalId(id);
    };

    const closeModal = () => {
        setOpenModalId(null);
    };

    return (
        <div className="carousel">
            <div className="carousel carousel-item flex flex-row gap-4">
                {modalData.map(({ id, cardContent, modalContent }) => (
                    <div key={id}>
                        {/* Card */}
                        <button
                            className="card glass lg:h-[24rem] md:h-[24rem] hover:bg-transparent justify-center bg-[#393E46] lg:card-side shadow-xl transition-all"
                            //onClick={() => openModal(id)}
                        >
                            {cardContent}
                        </button>

                        {/* Modal */}
                        <Modal isOpen={openModalId === id} onClose={closeModal}>
                            {modalContent}
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    );
}