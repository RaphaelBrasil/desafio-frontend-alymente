import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
//import axios from "axios";

interface UserInfo {
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

interface EditableUserInfoCardProps {
	userData: UserInfo;
	onClick: () => void;
}

type ValidUserInfoKeys = keyof UserInfo;

const EditableUserInfoCard: React.FC<EditableUserInfoCardProps> = ({
	userData,
	onClick
}) => {
	const { register, handleSubmit, setValue, reset } = useForm<UserInfo>();
	const [isEditing, setEditing] = useState(false);

	const alternarTipoCampo = () => {
		if (isEditing) {
			const userDataEntries = Object.entries(userData) as Array<
				[ValidUserInfoKeys, any]
			>;

			userDataEntries.forEach(([key, value]) => {
				setValue(key, value);
			});
		} else {
			reset(userData);
		}
	};

	const handleEditar = () => {
		setEditing(true);
		alternarTipoCampo();
	};

	const handleApagar = async () => {
		try {
			//await axios.delete(`minha_url_api/usuarios/${userData.cpf}`);
		} catch (error) {
			//console.error("Erro ao apagar usuário:", error);
		}
	};

	const onSubmit = (data: UserInfo) => {
		console.log("Dados do formulário:", data);

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

		setEditing(false);
	};

	const styleButton =
		" text-white w-[10rem] m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

	return (
		<div className="font-sans text-xs font-bold text-center text-gray-500 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900">
				{userData.nome}
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col items-start">
						<h1 className="font-bold text-gray-900">
							Informações Pessoais:
						</h1>

						<p>
							<span className="font-bold">Idade:</span>{" "}
							{isEditing ? (
								<input {...register("idade")} />
							) : (
								userData.idade
							)}
						</p>
						<p>
							<span className="font-bold">Signo:</span>{" "}
							{isEditing ? (
								<input {...register("signo")} />
							) : (
								userData.signo
							)}
						</p>
						<p>
							<span className="font-bold">CPF:</span>{" "}
							{isEditing ? (
								<input {...register("cpf")} />
							) : (
								userData.cpf
							)}
						</p>
						<p>
							<span className="font-bold">RG:</span>{" "}
							{isEditing ? (
								<input {...register("rg")} />
							) : (
								userData.rg
							)}
						</p>
						<p>
							<span className="font-bold">Mãe:</span>{" "}
							{isEditing ? (
								<input {...register("mae")} />
							) : (
								userData.mae
							)}
						</p>
						<p>
							<span className="font-bold">Pai:</span>{" "}
							{isEditing ? (
								<input {...register("pai")} />
							) : (
								userData.pai
							)}
						</p>
						<br />
					</div>
					<div className="flex flex-col items-start">
						<h1 className="font-bold text-gray-900">Contato:</h1>

						<p>
							<span className="font-bold">Email:</span>{" "}
							{isEditing ? (
								<input {...register("email")} />
							) : (
								userData.email
							)}
						</p>
						<p>
							<span className="font-bold">Senha:</span>{" "}
							{isEditing ? (
								<input {...register("senha")} />
							) : (
								userData.senha
							)}
						</p>
						<p>
							<span className="font-bold">Telefone Fixo:</span>{" "}
							{isEditing ? (
								<input {...register("telefone_fixo")} />
							) : (
								userData.telefone_fixo
							)}
						</p>
						<p>
							<span className="font-bold">Celular:</span>{" "}
							{isEditing ? (
								<input {...register("celular")} />
							) : (
								userData.celular
							)}
						</p>
					</div>
					<br />
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col items-start">
						<h1 className="font-bold text-gray-900">
							Informações Médicas:
						</h1>

						<p>
							<span className="font-bold">
								Data de Nascimento:{" "}
							</span>{" "}
							{isEditing ? (
								<input {...register("data_nasc")} />
							) : (
								userData.data_nasc
							)}
						</p>
						<p>
							<span className="font-bold">Sexo:</span>{" "}
							{isEditing ? (
								<input {...register("sexo")} />
							) : (
								userData.sexo
							)}
						</p>
						<p>
							<span className="font-bold">Tipo Sanguíneo:</span>{" "}
							{isEditing ? (
								<input {...register("tipo_sanguineo")} />
							) : (
								userData.tipo_sanguineo
							)}
						</p>
						<p>
							<span className="font-bold">Peso:</span>{" "}
							{isEditing ? (
								<input {...register("peso")} />
							) : (
								userData.peso + " kg"
							)}
						</p>
						<p>
							<span className="font-bold">Altura:</span>{" "}
							{isEditing ? (
								<input {...register("altura")} />
							) : (
								userData.altura
							)}
						</p>
						<p>
							<span className="font-bold">Cor:</span>{" "}
							{isEditing ? (
								<input {...register("cor")} />
							) : (
								userData.cor
							)}
						</p>
						<br />
					</div>
					<div className="flex flex-col items-start">
						<h1 className="font-bold text-gray-900">
							Localização:
						</h1>

						<p>
							<span className="font-bold">CEP:</span>{" "}
							{isEditing ? (
								<input {...register("cep")} />
							) : (
								userData.cep
							)}
						</p>
						<p>
							<span className="font-bold">Endereço:</span>{" "}
							{isEditing ? (
								<input {...register("endereco")} />
							) : (
								userData.endereco
							)}
						</p>
						<p>
							<span className="font-bold">Número:</span>{" "}
							{isEditing ? (
								<input {...register("numero")} />
							) : (
								userData.numero
							)}
						</p>
						<p>
							<span className="font-bold">Bairro:</span>{" "}
							{isEditing ? (
								<input {...register("bairro")} />
							) : (
								userData.bairro
							)}
						</p>
						<p>
							<span className="font-bold">Cidade:</span>{" "}
							{isEditing ? (
								<input {...register("cidade")} />
							) : (
								userData.cidade
							)}
						</p>
						<p>
							<span className="font-bold">Estado:</span>{" "}
							{isEditing ? (
								<input {...register("estado")} />
							) : (
								userData.estado
							)}
						</p>
						<br />
					</div>
				</div>

				<div className="mt-4">
					{isEditing ? (
						<>
							<button
								type="button"
								onClick={() => setEditing(false)}
								className={
									"bg-gray-500 hover:bg-gray-700 " +
									styleButton
								}
							>
								Cancelar
							</button>
							<button
								type="submit"
								className={
									"bg-green-500 hover:bg-green-700 " +
									styleButton
								}
							>
								Salvar
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								onClick={handleEditar}
								className={
									"bg-yellow-500 hover:bg-yellow-700 " +
									styleButton
								}
							>
								Editar usuário
							</button>
							<button
								type="button"
								onClick={handleApagar}
								className={
									"bg-red-500 hover:bg-red-700 " + styleButton
								}
							>
								Apagar usuário
							</button>
						</>
					)}
				</div>
			</form>
		</div>
	);
};

export default EditableUserInfoCard;
