import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteUser } from "../service/user.js";
import { useEffect, useState } from "react";



export const Navbar = () => {
	const [nombre, setNombre] = useState('');
	let name = localStorage.getItem('nombreUsuario');
	console.log(name);
	const params =useParams();
	const navigate = useNavigate();
	console.log(params);
	
	const deleteUsers = () =>{
		Swal.fire({
		title: "Estas seguro de eliminar el usuario?",
		// text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		cancelButtonText: "Cancelar",
		confirmButtonText: "Eliminar"
		}).then((result) => {
		if (result.isConfirmed) {
			eliminar()
			Swal.fire({
			title: "Eliminado",
			text: "El Usuario fue eliminado.",
			icon: "success"
			})
			setTimeout(() => {
						navigate('/login')
					}, 1000);
		}
		});
	}
	
	const eliminar = async() =>{
		try {
			const result = await deleteUser(params.name)
			console.log(result);
			setStateUser('')
		} catch (error) {
		
		}
	}
	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container" style={{paddingRight:"0px"}}>
				{/*<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				 <div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}
				{params.name?<h2>Agenda de contactos de {params.name}</h2>:<h2>Agenda de contactos de {name}</h2>}
				<div className="d-flex">
					<div><Link to="/login"><i className="fa-solid fa-arrow-right-from-bracket close-sesion" title="Cerrar Sesion"></i></Link></div>
					<div style={{marginLeft:"20px"}}><i className="fa-solid fa-user-slash delete-user" title="Eliminar usuario" onClick={deleteUsers}></i></div>
				</div>

			</div>
		</nav>
	);
};