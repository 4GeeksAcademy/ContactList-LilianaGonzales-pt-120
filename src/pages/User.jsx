import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import agendaImage from "../assets/img/imagen-agenda1.jpg";
import { useEffect, useState } from "react";
import { ModalRegister } from "../components/ModalRegister.jsx";
import { createUser } from "../service/user.js";
import { getListUsers } from "../service/user.js";
import { Link } from "react-router-dom";

export const User = () => {
  const [showRegister,setShowRegister] = useState(false);
  const [stateUser,setStateUser] = useState('');
  const [stateListUsers, setStateListUsers] = useState([]);
  const [stateFilterUsers, setStateFilterUsers] = useState([]);
  const [stateListUsersPer, setStateListaUsersPer] = useState('');

  const {store, dispatch} =useGlobalReducer()

 useEffect(()=>{
  getusers();
  localStorage.clear();
 },[])

  const registerUser = () =>{
    setShowRegister(true);
  }

  const agregarUsuario = async (e) =>{
    e.preventDefault();
    setShowRegister(false);
    try {
      const result = await createUser(stateUser);
      console.log(result);
      getusers();
      setStateUser('')
    } catch (error) {
      
    }
  }

  const closeModal = () =>{
    setShowRegister(false)
  }

  const handleChange = (e) =>{
    setStateUser(e.target.value)
  }

  const handleChangeInput = (e) =>{
    setStateListaUsersPer(e.target.value)
    onFilter(e.target.value)
  }

  const onFilter = async (user) => {
    const filtro = stateListUsers.filter(element=>element.slug.toLowerCase().includes(user))
    setStateFilterUsers(filtro);
    if(user=== ''){
      setStateFilterUsers([])
    }
  }

  const getusers = async() =>{
  const result = await getListUsers();
    setStateListUsers(result)
  }
  
  const selectInput = (name) =>{
    setStateListaUsersPer(name.slug)
    setStateFilterUsers([])
  }

    return (
        <div className="text-center mt-5">
            <h1>Agenda de contactos</h1>
            <p>
                <img src={agendaImage} />
            </p>
            <form>
              <div className="row d-flex">
                <div><input type="text" onChange={handleChangeInput} value={stateListUsersPer} placeholder="Usuario"/></div>
                
                <div>
                  {stateFilterUsers.map((element,index)=>(<div key={index} onClick={()=>selectInput(element)}>{element.slug}</div>))}
                </div>
                <div>
                  {
                    stateListUsers.some(producto => producto.slug === stateListUsersPer)?
                    <Link to={`/home/${stateListUsersPer}`}>
                    <button className="btn btn-login">Iniciar sesion</button>
                    </Link>:
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
              show={showRegister} 
              title="Registro de Usuario" 
              closeModal={closeModal} 
              createUser={agregarUsuario}
              handleChange={handleChange}/>
        </div>
    );
};