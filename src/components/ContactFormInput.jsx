export const ContactFormInput = ({value,handleChange,label,name,placeholder,idInput}) => (

                        <div className="mb-3">
                            <label for={idInput} className="form-label">{label}</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id={idInput}
                                name={name} 
                                placeholder={placeholder}
                                value={value}
                                onChange= {handleChange}/>
                        </div>              
);