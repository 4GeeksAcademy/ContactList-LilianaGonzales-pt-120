import { use, useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";
import { deleteContact, getListContact, updateContact } from "../service/contact.js";
import { ContactFormInput } from "../components/ContactFormInput.jsx";
import Swal from "sweetalert2";

export const Home = () => {
  const [data, setData] = useState([])
  const [id, setId] = useState('')
  const [valores,setValores] = useState({
		nombre:"",
        email:"",
        telefono:"",
        direccion:""
  })



  const {store, dispatch} =useGlobalReducer()

  const params =useParams();
  localStorage.setItem('nombreUsuario', params.name);
  
  const getContact = async() => {
	try {
		const lista = await getListContact(params.name);
		console.log(lista.contacts);
		setData(lista.contacts)
	} catch (error) {
		
	}
  }


  useEffect(()=>{
	getContact();
  },[])
  
  const deleteContacto = (id) =>{
		Swal.fire({
		title: "Estas seguro de eliminar al contacto?",
		// text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		cancelButtonText: "Cancelar",
		confirmButtonText: "Eliminar"
		}).then((result) => {
		if (result.isConfirmed) {
			eliminarContacto(id)
			Swal.fire({
			title: "Eliminado",
			text: "El contacto fue eliminado.",
			icon: "success"
			})
			// setTimeout(() => {
			// 			navigate('/login')
			// 		}, 1000);
		}
		});
	}

  const eliminarContacto = async(ident) =>{
	console.log(ident);
	try {
		const result = await deleteContact(params.name,ident)
		console.log(result);
		getContact();
		console.log(data);
		
	} catch (error) {
		console.log(error);
		
	}
  }

  const editarContacto = (item) =>{
	console.log(item);
	setValores({
		nombre:item.name,
        email:item.email,
        telefono:item.phone,
        direccion:item.address
		}
	)
	setId(item.id)
  }

	const handleChange = (event) => {
        const {name,value} = event.target;
        setValores({
            ...valores,[name]:value,
        })
    }

	const updateContacto = async (e) =>{
		e.preventDefault();
		console.log(valores);
		const body = {
			name:valores.nombre,
            phone:valores.telefono,
            email:valores.email,
            address:valores.direccion
		}
		try {
			const result = await updateContact(params.name,id,body);
					console.log(result);
					setId('')
					getContact();
		} catch (error) {
			
		}
		
		
	}

	return (
		<div className="text-center mt-5">
			<div>
				<Link to="/home/contact">
				{/* <Link to={`/home/${params}/contact`}> */}
				<button className="btn btn-success">Add new contact</button>
				</Link>
				<div style={{marginTop:"20px"}}>
				<ul>
							{data.map((item, index) => (
							// <li key={index}>{item.task} <i className="fa-duotone fa-solid fa-xmark img" onClick={()=>eliminarTarea(item.id)}></i></li>
								<li key={index} className="lista">
									{
									id!==item.id?
									<div className="d-flex justify-content-between">
										<div>
											imagen
										</div>
										<div >
											<div>{item.name}</div>
											<div><i className="fa-solid fa-location-dot"></i>{item.address}</div>
											<div><i className="fa-solid fa-phone-flip"></i>{item.phone}</div>
											<div><i className="fa-solid fa-envelope"></i>{item.email}</div>
										</div> 
										<div className="operacion">
											<i className="fa-solid fa-pen editar" onClick={()=>editarContacto(item)} title="editar"></i>
											<i className="fa-solid fa-trash delete" onClick={()=>deleteContacto(item.id)} title="eliminar"></i>
										</div>
									</div>:
									<div className="d-flex justify-content-center">
										<form  action="" onSubmit={updateContacto} style={{width:"70%"}}>
											<ContactFormInput
																	label="Nombre"
																	idInput="exampleFormControlInput1"
																	name="nombre"
																	placeholder="Ingrese nombre"
																	value={valores.nombre}
																	handleChange={handleChange}
																	/>
											<ContactFormInput
																	label="Email"
																	idInput="exampleFormControlInput2"
																	name="email"
																	placeholder="Ingrese email"
																	value={valores.email}
																	handleChange={handleChange}
																	/>
                         
											<ContactFormInput
																	label="Telefono"
																	idInput="exampleFormControlInput3"
																	name="telefono"
																	placeholder="Ingrese telefono"
																	value={valores.telefono}
																	handleChange={handleChange}
																	/>
											<ContactFormInput
																	label="Direccion"
																	idInput="exampleFormControlInput4"
																	name="direccion"
																	placeholder="Ingrese direccion"
																	value={valores.direccion}
																	handleChange={handleChange}
																	/>
											{/* <div className="d-grid gap-2"> */}
												<button className="btn btn-primary" type="submit" >Actualizar</button>
											{/* </div> */}
										</form>
									</div>
									}

									{/* <div className="delete" onClick={()=>eliminarTarea(item.id)} >
										<i className="fa-duotone fa-solid fa-xmark img"></i>
									</div> */}
									
								</li>

							))}
				</ul>
				</div>
			</div>
		</div>
	);
}; 