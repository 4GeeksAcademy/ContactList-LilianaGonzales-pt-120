import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import agendaImage from "../assets/img/imagen-agenda1.jpg";
import { useEffect, useState } from "react";
import { ModalRegister } from "../components/ModalRegister.jsx";
import { createUser } from "../service/user.js";
import { getListUsers } from "../service/user.js";

export const Login = () => {
  const [showRegister,setShowRegister] = useState(false);
  const [stateUser,setStateUser] = useState('');
  const [stateListUsers, setStateListUsers] = useState([]);
  const [stateFilterUsers, setStateFilterUsers] = useState([]);
  const [stateListUsersPer, setStateListaUsersPer] = useState('');

  const {store, dispatch} =useGlobalReducer()

 useEffect(()=>{
  getusers();
 },[])

  const registerUser = () =>{
    console.log("hola modal crear user");
    setShowRegister(true);
  }

  const agregarUsuario = async (e) =>{
    console.log("clic en agregar");
    console.log(stateUser);
    
    e.preventDefault();
    setShowRegister(false);
    try {
      const result = await createUser(stateUser);
      console.log(result);
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
    console.log(e.target.value);
    
    setStateListaUsersPer(e.target.value)
    onFilter(stateListUsersPer)
  }
  const onFilter = async (user) => {
    const filtro = stateListUsers.filter(element=>element.slug.includes(user))
setStateFilterUsers(filtro);
console.log(user);
console.log(stateListUsersPer);
    if(user=== ''){
      console.log('ingreso ccuando limpio input');
      
      setStateFilterUsers([])}
  }
  const getusers = async() =>{
    const result = await getListUsers();
    console.log(result);
    
     setStateListUsers(result)
  }
    return (
        <div className="text-center mt-5">
            <h1>Agenda de contactos</h1>
            <p>
                <img src={agendaImage} />
            </p>
            <form>
              <div className="row d-flex">
                <div><label>usuario</label></div>
                <div><input type="text" onChange={handleChangeInput}/></div>
                <div>
                  {stateFilterUsers.map((element,index)=>(<div key={index}>{element.slug}</div>))}
                </div>
              </div>
            </form>
                <div>
                <label>¿No tienes una cuenta?&nbsp;<a style={{cursor: "pointer"}} onClick={registerUser}>Regístrate.</a></label>
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