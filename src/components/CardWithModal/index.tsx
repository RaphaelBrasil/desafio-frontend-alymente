"use client";
import React, { useState } from "react";
import Card from "../Card";
import Modal from "../Modal";
import UserInfoCard from "../UserInfoCard";

interface dadosProps {
	nome: string;
	idade: number;
	cpf: string;
	rg: string;
	data_nasc: string;
	sexo: string;
	signo: string;
	mae: string;
	pai: string;
	email: string;
	senha: string;
	cep: string;
	endereco: string;
	numero: number;
	bairro: string;
	cidade: string;
	estado: string;
	telefone_fixo: string;
	celular: string;
	altura: string;
	peso: number;
	tipo_sanguineo: string;
	cor: string;
}

interface CardWithModalProps {
	dados: dadosProps;
}

const CardWithModal: React.FC<CardWithModalProps> = ({ dados }) => {
	const [aberto, setAberto] = useState<boolean>(false);

	const handleOnClose = () => setAberto(false);
	const handleOnClick = () => {
		setAberto(true);
	};

	return (
		<div>
			<Card
				hasShadow={true}
				nome={dados.nome}
				celular={dados.celular}
				onClick={handleOnClick}
			/>
			<Modal aberto={aberto} onClose={handleOnClose}>
				{aberto && (
					<UserInfoCard userData={dados} onClick={handleOnClick} />
				)}
			</Modal>
		</div>
	);
};

export default CardWithModal;
