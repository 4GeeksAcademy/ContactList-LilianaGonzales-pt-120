import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ModalRegister = ({show,title,closeModal,createUser,handleChange}) => {

  const {store, dispatch} =useGlobalReducer()
if(!show) return null;
    return (
        <div className="modal" tabIndex='-1'  style={{ display:show? 'block':none}} id="miModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title title">{title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
      </div>
      <div className="modal-body">
        <label style={{paddingRight:"4px"}} for="input1">Nombre de usuario </label>
        <input className="inputName" id="input1" type="text" onChange={handleChange}/>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"onClick={closeModal}>cerrar</button>
        <button type="submit" className="btn btnAgregar" onClick={createUser}>Crear</button>
      </div>
    </div>
  </div>
</div>
    );
};