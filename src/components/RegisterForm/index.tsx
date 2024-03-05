import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as fs from "fs";
import dados from "@/../public/dados.json";

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

interface RegisterFormProps {
	enviarDadoPai: (valor: any) => void;
	nomeDigitado: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
	enviarDadoPai,
	nomeDigitado
}) => {
	const [dado, setDado] = useState({});

	const { register, handleSubmit, setValue } = useForm<dadosProps>();

	const onSubmit: SubmitHandler<dadosProps> = (dadosFormulario) => {
		setDado(dadosFormulario);
		enviarDadoPai(dadosFormulario);
	};

	const arrayCampos = [
		"Nome",
		"Idade",
		"CPF",
		"RG",
		"Data de Nascimento",
		"Sexo",
		"Signo",
		"Mãe",
		"Pai",
		"Email",
		"Senha",
		"CEP",
		"Endereço",
		"Número",
		"Bairro",
		"Cidade",
		"Estado",
		"Telefone Fixo",
		"Celular",
		"Altura",
		"Peso",
		"Tipo Sanguíneo",
		"Cor"
	];

	const styleButtonContainer = "w-full flex justify-center items-center mt-4";

	const styleForm =
		"flex flex-wrap justify-center items-center w-full h-full rounded-xl text-gray-700 m-1";

	const styleInput =
		"w-[12rem] shadow appearance-none border rounded py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2";

	const styleButton =
		"bg-blue-500 hover:bg-blue-700 text-white m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styleForm}>
			<h2 className="w-full text-center text-2xl font-semibold mb-1">
				Cadastro de Novo Usuário
			</h2>
			{arrayCampos.map((campo: string) => (
				<input
					key={campo}
					{...register(campo as keyof dadosProps)}
					placeholder={campo}
					defaultValue={campo === "Nome" ? nomeDigitado : ""}
					className={styleInput}
				/>
			))}
			<div className={styleButtonContainer}>
				<button type="submit" className={styleButton}>
					Enviar
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;
