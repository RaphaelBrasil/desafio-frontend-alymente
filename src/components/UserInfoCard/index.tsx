import React from "react";

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

interface UserInfoCardProps {
	userData: UserInfo;
	onClick: () => void;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ userData, onClick }) => {
	const {
		nome,
		idade,
		cpf,
		rg,
		data_nasc,
		sexo,
		signo,
		mae,
		pai,
		email,
		senha,
		cep,
		endereco,
		numero,
		bairro,
		cidade,
		estado,
		telefone_fixo,
		celular,
		altura,
		peso,
		tipo_sanguineo,
		cor
	} = userData;

	return (
		<div className="font-sans text-xs font-bold text-center text-gray-500 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900">
				{nome}
			</h2>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col items-start">
					<h1 className="font-bold text-gray-900">
						Informações Pessoais:
					</h1>
					<br />
					<p>
						<span className="font-bold">Idade:</span> {idade}
					</p>
					<p>
						<span className="font-bold">Signo:</span> {signo}
					</p>
					<p>
						<span className="font-bold">CPF:</span> {cpf}
					</p>
					<p>
						<span className="font-bold">RG:</span> {rg}
					</p>
					<p>
						<span className="font-bold">Mãe:</span> {mae}
					</p>
					<p>
						<span className="font-bold">Pai:</span> {pai}
					</p>
				</div>
				<div className="flex flex-col items-start">
					<h1 className="font-bold text-gray-900">Contato:</h1>
					<br />
					<p>
						<span className="font-bold">Email:</span> {email}
					</p>
					<p>
						<span className="font-bold">Senha:</span> {senha}
					</p>
					<p>
						<span className="font-bold">Telefone Fixo:</span>
						{telefone_fixo}
					</p>
					<p>
						<span className="font-bold">Celular:</span> {celular}
					</p>
				</div>
			</div>
			<br />
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col items-start">
					<p>
						<h1 className="font-bold text-gray-900">
							Informações Médicas:
						</h1>
					</p>
					<br />
					<p>
						<span className="font-bold">Data de Nascimento: </span>
						{data_nasc}
					</p>
					<p>
						<span className="font-bold">Sexo:</span> {sexo}
					</p>
					<p>
						<span className="font-bold">Tipo Sanguíneo:</span>
						{tipo_sanguineo}
					</p>
					<p>
						<span className="font-bold">Peso:</span> {peso + " kg"}
					</p>
					<p>
						<span className="font-bold">Altura:</span> {altura}
					</p>
					<p>
						<span className="font-bold">Cor:</span> {cor}
					</p>
				</div>
				<div className="flex flex-col items-start">
					<h1 className="font-bold text-gray-900">Localização:</h1>
					<br />
					<p>
						<span className="font-bold">CEP:</span> {cep}
					</p>
					<p>
						<span className="font-bold">Endereço:</span> {endereco}
					</p>
					<p>
						<span className="font-bold">Número:</span> {numero}
					</p>
					<p>
						<span className="font-bold">Bairro:</span> {bairro}
					</p>
					<p>
						<span className="font-bold">Cidade:</span> {cidade}
					</p>
					<p>
						<span className="font-bold">Estado:</span> {estado}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserInfoCard;
