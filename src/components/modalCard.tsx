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

// Dynamic modal and card data with custom JSX
const modalData = [
    {
        id: "exp1",
        // Card content (custom JSX)
        cardContent: (
            <div className="card-body flex flex-col font-bold justify-center items-center">
                <h1 className="py-4">Research Assistant</h1>
                <div className="badge badge-ms badge-outline font-medium p-4 m-2">
                    Center of Specialty Innovation
                </div>
                <div className="badge badge-ms badge-accent badge-outline font-medium p-4">
                    Jul 2024 - Currently
                </div>
            </div>
        ),
        // Modal content (custom JSX)
        modalContent: (
            <>
                <h3 className="font-bold text-lg">Army Air Defense System (AADS)</h3>
                <p className="py-4">
                    My experience with the Army Air Defense System focused on advanced
                    radar monitoring and threat detection.
                </p>
            </>
        ),
    },
    {
        id: "exp2",
        cardContent: (
            <div className="card-body flex flex-col font-bold justify-center items-center">
                <h1 className="py-4">Junior Back-End Developer</h1>
                <div className="badge badge-ms badge-outline font-medium p-4 m-2">
                    Center of Specialty Innovation
                </div>
                <div className="badge badge-ms badge-accent badge-outline font-medium p-4">
                    Jul 2023 - Currently
                </div>
            </div>
        ),
        modalContent: (
            <>
                <h3 className="font-bold text-lg">Junior Tester</h3>
                <p className="py-4">
                    This system focuses on real-time aircraft tracking and integrates
                    military-grade radar technology.
                </p>
            </>
        ),
    },
    {
        id: "exp3",
        cardContent: (
            <div className="card-body flex flex-col font-bold justify-center items-center">
                <h1 className="py-4">Junior Tester</h1>
                <div className="badge badge-ms badge-outline font-medium p-4 m-2">
                    Center of Specialty Innovation
                </div>
                <div className="badge badge-ms badge-warning badge-outline font-medium p-4">
                    Aug 2023 - Apr 2024
                </div>
            </div>
        ),
        modalContent: (
            <>
                <h3 className="font-bold text-lg">Custom Radar System</h3>
                <p className="py-4">
                    A unique radar system built for both defense and civilian use,
                    featuring real-time monitoring and AI integration.
                </p>
            </>
        ),
    },
];

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
                            className="card glass lg:h-[24rem] md:h-[24rem] justify-center bg-[#393E46] lg:card-side shadow-xl"
                            onClick={() => openModal(id)}
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