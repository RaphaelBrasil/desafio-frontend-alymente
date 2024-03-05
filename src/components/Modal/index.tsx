"use client";

import { X } from "react-feather";
import React from "react";

interface ModalProps {
	aberto: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ aberto, onClose, children }) => {
	return (
		<div
			onClick={onClose}
			className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${aberto ? "visible bg-black/20 z-10" : "invisible"}
      `}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white rounded-xl shadow p-4 transition-all overflow-hidden"
			>
				<button
					onClick={onClose}
					className="absolute top-2 right-2 p-1 rounded-lg text-red-400 bg-white hover:bg-gray-50 hover:text-red-600"
				>
					<X />
				</button>
				<div className="max-h-[calc(75vh-2rem)] max-w-[calc(70vw-2rem)]">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
