import { use } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";

export const Home = () => {

	

  const {store, dispatch} =useGlobalReducer()

  const params =useParams();
  console.log(params);
  localStorage.setItem('nombreUsuario', params.name);

	return (
		<div className="text-center mt-5">
			<div>
				<Link to="/home/contact">
				{/* <Link to={`/home/${params}/contact`}> */}
				<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</div>
	);
}; 