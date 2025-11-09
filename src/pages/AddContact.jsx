import { use } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";

export const AddContact = () => {

let nombre = localStorage.getItem('nombreUsuario');
console.log(nombre);

  const {store, dispatch} =useGlobalReducer()

//   const params =useParams();
//   console.log(params);
    

    return (
         <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="col-lg-8 mt-5">
                    <form>
                        <div>
                            <h1 className="titulo-agregar">Add new contact</h1>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit" >Save</button>
                        </div>
                    </form>
                    <div style={{marginTop:"10px"}}>
                    <Link to={`/home/${nombre}`}>
                    <button className="btn btn-danger">Atras</button>
                    </Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};