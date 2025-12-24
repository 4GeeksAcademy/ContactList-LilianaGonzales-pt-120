import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fondo from "../assets/img/fondo1.jpg";

export const Welcome = () => {

// useEffect(()=>{
  
//   localStorage.clear();
//  },[])

    return(
       
        <div className="container-fluid" style={{paddingLeft:"0px",paddingRight:"0px"}}>
            {/* <div className="fondo">
                
               
                    <h1 >Bienvenido a la agenda de liliana, ingresa a la tuya <Link to="/login">click</Link> </h1>
                
            </div> */}

            <div className="card border-0 rounded-0 text-bg-dark">
            <img className="card-img" src={fondo} alt="..."/>
            <div className="card-img-overlay fondo">
                <h1 className="card-title textWelcome">Bienvenido a tu Agenda de Contactos</h1>
                <p className="card-text textWelcome">Porfavor ingresa a tu agenda para ver tus contactos <Link to="/login" className="link">click</Link></p>
                
            </div>
            </div>
            
        </div>
        
        
    )

}