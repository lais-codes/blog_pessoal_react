import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import { api } from "../../services/Service"

function Perfil() {

	const navigate = useNavigate()
	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			ToastAlerta("Você precisa estar logado", "erro")
			navigate("/")
		}
	}, [usuario.token])

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
				<img
					className="w-full h-72 object-cover border-b-8 border-white"
					src="https://i.imgur.com/ZZFAmzo.jpg"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full w-36 h-36 mx-auto -mt-20 border-6 border-white object-cover relative z-10"
					alt="Foto de perfil"
				/>

				<div
					className="relative mt-[-6rem] pt-26 pb-24 flex flex-col gap-6 
                    bg-cyan-800 text-white items-center">

					<p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
						{usuario.nome}
					</p>

					<p className="text-x1">
						{usuario.usuario}
					</p>
				</div>
			</div>
		</div>
	)
}
export default Perfil
