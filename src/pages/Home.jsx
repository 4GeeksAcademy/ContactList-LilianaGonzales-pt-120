import { use, useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";
import { deleteContact, getListContact } from "../service/contact.js";

export const Home = () => {
  const [data, setData] = useState([])



  const {store, dispatch} =useGlobalReducer()

  const params =useParams();
  localStorage.setItem('nombreUsuario', params.name);
  console.log(params.name);
  
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
  
  
  const eliminarContacto = async(id) =>{
	console.log(id);
	try {
		const result = await deleteContact(params.name,id)
		console.log(result);
		getContact();
		console.log(data);
		
	} catch (error) {
		console.log(error);
		
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
									<div></div>
									<div>
										<div>{item.name}</div>
										<div><i className="fa-solid fa-location-dot"></i>{item.address}</div>
										<div><i className="fa-solid fa-phone-flip"></i>{item.phone}</div>
										<div><i className="fa-solid fa-envelope"></i>{item.email}</div>
									</div> 
									<div>
										<i className="fa-solid fa-pen"></i>
										<i className="fa-solid fa-trash delete" onClick={()=>eliminarContacto(item.id)}></i>
									</div>
									
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