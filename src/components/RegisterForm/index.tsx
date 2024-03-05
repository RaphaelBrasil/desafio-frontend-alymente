import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../Modal";

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
	nomeDigitado: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ nomeDigitado }) => {
	const [dado, setDado] = useState({});
	const [aberto, setAberto] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<dadosProps>();

	const onSubmit: SubmitHandler<dadosProps> = (dadosFormulario) => {
		setAberto(true);
		setDado(dadosFormulario);
		//ENVIO MOCK PARA API DO BANCO, NESSE LOCAL FARIAMOS UM ISERT APÓS O PREENCHIMENTO DO FORMULARIO
		/*
		const adicionarPessoa = async (pessoa) => {
			const novaPessoa = pessoa;
			try {
				const response = await axios.post<Pessoa>(
					"minha_url_da_api",
					novaPessoa
					);
					console.log("Pessoa adicionada com sucesso:", response.data);
				} catch (error) {
					console.error("Erro ao adicionar pessoa:", error);
				}
			};

			adicionarPessoa(valor);
			*/
	};

	const handleOnClose = () => {
		console.log("onclose");
		setAberto(false);
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
			<div className={styleButtonContainer}>
				<div>Todos os campos devem ser preenchidos</div>
			</div>

			{arrayCampos.map((campo: string) => (
				<input
					key={campo}
					{...register(campo as keyof dadosProps, {
						required: "Todos os campos devem ser preenchidos"
					})}
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
			<Modal aberto={aberto} onClose={handleOnClose}>
				<h2 className="w-full text-center text-2xl font-semibold mb-1 text-green-500">
					Cadastro realizado com sucesso!
				</h2>
			</Modal>
		</form>
	);
};

export default RegisterForm;
