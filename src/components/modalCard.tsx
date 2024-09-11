"use client";
import React from "react";

// Modal component
function Modal({ id, children }: { id: string, children: React.ReactNode }) {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                {children}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}

// ModalCard component
export default function ModalCard() {
    const openModal = (id: string) => {
        const modal = document.getElementById(id) as HTMLDialogElement;
        modal?.showModal();
    };

    return (
        <div>
            <button
                className="card glass lg:h-[24rem] md:h-[24rem] justify-center bg-[#393E46] lg:card-side shadow-xl"
                onClick={() => openModal('my_modal_2')}
            >
                <div className="card-body flex felx-col font-bold justify-center items-center">
                    <h1 className="py-4">
                        Armmy Air Defense System
                    </h1>
                    <div className="badge badge-ms badge-outline font-medium p-4 m-2">
                        Center of Specialty Innovation
                    </div>
                    <div className="badge badge-ms badge-warning badge-outline font-medium p-4">
                        Test
                    </div>
                </div>
            </button>
            <Modal id="my_modal_2">
                <h3 className="font-bold text-lg"> Army Air Defense System (AADS)</h3>
                <p className="py-4">My exp ...</p>
            </Modal>
        </div>
    );
}