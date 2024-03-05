import React from "react";
import { User, ArrowRight } from "react-feather";

interface CardProps {
	hasShadow: boolean;
	nome: string;
	celular: string;
	onClick: () => void;
}

const Card: React.FC<CardProps> = ({ hasShadow, nome, celular, onClick }) => {
	return (
		<div
			className={`flex flex-col flex-shrink-0 w-[26rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:bg-gray-100 m-1`}
		>
			<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden bg-white-700 text-gray-700 shadow-none rounded-xl bg-clip-border">
				<User className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center ml-4" />
				<div className="flex w-full flex-col gap-0.5">
					<div className="flex items-center justify-between">
						<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							{nome}
						</h5>
					</div>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
						{celular}
					</p>
				</div>
			</div>
			<div className="p-6 pt-0">
				<button
					className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
					type="button"
					onClick={onClick}
				>
					Mais informações
					<ArrowRight size={16} />
				</button>
			</div>
		</div>
	);
};

export default Card;
