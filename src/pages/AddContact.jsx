import { use, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";
import { createContact } from "../service/contact.js";
import { ContactFormInput } from "../components/ContactFormInput.jsx";

export const AddContact = () => {

    const [values, setValues] = useState({
        nombre:"",
        email:"",
        telefono:"",
        direccion:""
    });
    let nombreUser = localStorage.getItem('nombreUsuario');
    const {store, dispatch} =useGlobalReducer();
    // const idInput1="exampleFormControlInput1"
    const handleChange = (event) => {
        const {name,value} = event.target;
        setValues({
            ...values,[name]:value,
        })
    }

    const agregarContacto = async (e) =>{
        e.preventDefault();
        console.log(values);
        
        const body = {
            name:values.nombre,
            phone:values.telefono,
            email:values.email,
            address:values.direccion
        }
        try {
        const result = await createContact(nombreUser,body);
                console.log(result);
                setValues({nombre:"",
                email:"",
                telefono:"",
                direccion:""})
        } catch (error) {
        
        }

        console.log(values);
        
    }


    return (
         <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="col-lg-8 mt-5">
                    <div>
                            <h1 className="titulo-agregar">Agregar nuevo contacto</h1>
                        </div>
                    <form  action="" onSubmit={agregarContacto}>
                        
                        {/* <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name="nombre" 
                                placeholder="Ingrese nombre"
                                value={values.nombre}
                                onChange= {handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="email" 
                                placeholder="Ingrese email"
                                value={values.email}
                                onChange= {handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Telefono</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="telefono" 
                                placeholder="Ingrese telefono"
                                value={values.telefono}
                                onChange= {handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Direccion</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name="direccion" 
                                placeholder="Ingrese direccion"
                                value={values.direccion}
                                onChange= {handleChange}/>
                        </div> */}
                        <ContactFormInput
                        label="Nombre"
                        idInput="exampleFormControlInput1"
                        name="nombre"
                        placeholder="Ingrese nombre"
                        value={values.nombre}
                        handleChange={handleChange}
                        />
                        <ContactFormInput
                        label="Email"
                        idInput="exampleFormControlInput2"
                        name="email"
                        placeholder="Ingrese email"
                        value={values.email}
                        handleChange={handleChange}
                        />
                         
                         <ContactFormInput
                        label="Telefono"
                        idInput="exampleFormControlInput3"
                        name="telefono"
                        placeholder="Ingrese telefono"
                        value={values.telefono}
                        handleChange={handleChange}
                        />
                         <ContactFormInput
                        label="Direccion"
                        idInput="exampleFormControlInput4"
                        name="direccion"
                        placeholder="Ingrese direccion"
                        value={values.direccion}
                        handleChange={handleChange}
                        />
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit" >Guardar</button>
                        </div>
                    </form>
                    <div style={{marginTop:"10px"}}>
                    <Link to={`/home/${nombreUser}`}>
                    <button className="btn btn-danger">Atras</button>
                    </Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};