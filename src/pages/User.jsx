
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import agendaImage3 from "../assets/img/imagen-agenda3.png";
import { useEffect, useState } from "react";
import { ModalRegister } from "../components/ModalRegister.jsx";
import { createUser } from "../service/user.js";
import { getListUsers } from "../service/user.js";
import { Link, useNavigate } from "react-router-dom";

export const User = () => {
  const [stateFilterUsers, setStateFilterUsers] = useState([]);
  const navigate = useNavigate();
  const {store, dispatch} =useGlobalReducer()

 useEffect(()=>{
  getusers();
  localStorage.clear();
 },[])

  const registerUser = () =>{
    dispatch({type:"setShowRegister", payload:true})
  }

  const agregarUsuario = async (e) =>{
    e.preventDefault();
    dispatch({type:"setShowRegister", payload:false})
    try {
      const result = await createUser(store.stateUser);
      console.log(result);
      getusers();
      dispatch({type:"setStateUser", payload:''})
    } catch (error) {
      
    }
  }

  const closeModal = () =>{
    dispatch({type:"setShowRegister", payload:false})
  }

  const handleChange = (e) =>{
    dispatch({type:"setStateUser", payload:e.target.value})
  }

  const handleChangeInput = (e) =>{
    dispatch({type:"setStateListUsersPer", payload:e.target.value})
    onFilter(e.target.value)
  }

  const onFilter = async (user) => {
    const filtro = store.stateListUsers.filter(element=>element.slug.toLowerCase().includes(user))
    setStateFilterUsers(filtro);
    if(user=== ''){
      setStateFilterUsers([])
    }
  }

  const getusers = async() =>{
  const result = await getListUsers();
    //dispatch({type:"setStateListUsers", payload:Array.isArray(result) ? result : []})
    dispatch({type:"setStateListUsers", payload:result})
  }
  
  const selectInput = (name) =>{
    dispatch({type:"setStateListUsersPer", payload:name.slug})
    setStateFilterUsers([])
  }
  const inicioSesion = () =>{
    navigate(`/home/${store.stateListUsersPer}`)
    dispatch({type:"setStateListUsersPer", payload:''})
    
  }

    return (
        <div className="text-center mt-5">
            <p>
                <img className="imagen" src={agendaImage3} />
            </p>
            <form>
              <div className="row d-flex">
                <div><input className="inputName" id="inputName" type="text" onChange={handleChangeInput} value={store.stateListUsersPer} placeholder="Usuario"/></div>
                
                <div>
                  {stateFilterUsers.map((element,index)=>(<div key={index} onClick={()=>selectInput(element)}>{element.slug}</div>))}
                </div>
                <div>
                  {
                    store.stateListUsers?.some(user => user.slug === store.stateListUsersPer)?
                    <button className="btn btn-login" onClick={inicioSesion}>Iniciar sesion</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-login">Iniciar sesion</button>
                    </Link>
                  }
                </div>
              </div>
            </form>
                <div style={{marginTop:"2%"}}>
                <label>¿No tienes una cuenta?&nbsp;<a style={{cursor: "pointer",color:"#e6516b", fontWeight:"500"}} onClick={registerUser}>Regístrate.</a></label>
              </div>
            <ModalRegister 
              show={store.showRegister} 
              title="Registro de Usuario" 
              closeModal={closeModal} 
              createUser={agregarUsuario}
              handleChange={handleChange}/>
        </div>
    );
};