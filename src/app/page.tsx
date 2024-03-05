"use client";
import { useState } from "react";
import { Plus } from "react-feather";
import Modal from "@/components/Modal";
import RegisterForm from "@/components/RegisterForm";
import CardWithModal from "@/components/CardWithModal";
import dados from "@/../public/dados.json";

export default function Home() {
	const [filtroNome, setFiltroNome] = useState("");
	const [nomeDigitado, setNomeDigitado] = useState("");
	const [aberto, setAberto] = useState<boolean>(false);
	const [novoDado, setNovoDado] = useState({});

	const handleOnClose = () => setAberto(false);
	const handleOnClick = () => {
		setAberto(true);
		setNomeDigitado(filtroNome);
	};

	const receberDadoFilho = async (valor: any) => {
		setNovoDado(valor);
		// TODO: Enviar novo objeto para o 'BD' (Para o campo de alteração, deve-se apagar o objeto antigo, e adicionar o novo refeito)
		console.log("VALOR RECEBIDO DO FORMULARIO:");
		console.log(valor);
	};

	const dadosFiltrados = dados.filter((pessoa) =>
		pessoa.nome.toLowerCase().includes(filtroNome.toLowerCase())
	);

	const styleInput =
		"shadow appearance-none border max-w-[26rem] h-10 rounded-xl py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

	return (
		<>
			<div className="flex items-center justify-center gap-4 m-1">
				<input
					type="text"
					id="filtroNome"
					className={styleInput}
					value={filtroNome}
					placeholder="Filtrar por Nome:"
					onChange={(e) => setFiltroNome(e.target.value)}
				/>
				<button
					className={
						styleInput +
						"flex items-center px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-white hover:bg-gray-100 active:bg-gray-200/20"
					}
					type="button"
					onClick={handleOnClick}
				>
					Adicionar usuário
				</button>
			</div>
			<div className="flex flex-wrap justify-center">
				{dadosFiltrados.map((pessoa) => (
					<CardWithModal key={pessoa.cpf} dados={pessoa} />
				))}
			</div>
			<Modal aberto={aberto} onClose={handleOnClose}>
				<RegisterForm
					enviarDadoPai={receberDadoFilho}
					nomeDigitado={nomeDigitado}
				/>
			</Modal>
		</>
	);
}
