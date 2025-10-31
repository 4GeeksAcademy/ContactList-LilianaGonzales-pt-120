import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const User = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>Agenda de contactos</h1>
            {/* <p>
                <i class="fa-solid fa-user"></i>
            </p> */}
            <div className="row">
              <i className="fa-solid fa-user"></i>  
            </div>
        </div>
    );
};