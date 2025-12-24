import { Outlet } from "react-router-dom/dist"  
import { useNavigate, useParams } from "react-router-dom"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const PrivateLayout = () => {
    const navigate= useNavigate()
    const name= localStorage.getItem('nombreUsuario')
    const params =useParams();
    if(!name)
    {
        navigate('/')
    }

    
    return (
            <><h1 style={{paddingLeft:"112px",paddingTop:"20px", fontFamily:"serif"}}> Hola {params.name ?? name}</h1>
                <Outlet />
                </>
          
    )
}