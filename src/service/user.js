export const getListUsers = async() =>{
    try {
        const request = await fetch(`https://playground.4geeks.com/contact/agendas?offset=0&limit=100`,{
           method: "GET",
           headers: {
                "accept": "application/json"
           }
        })
        const response = await request.json();
        console.log(response.agendas);
        
        return response.agendas
    } catch (error) {
        console.log(error);
        
    }
}
export const createUser = async (user,obj) =>{
    try {
        const request = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`,{
            method: "POST",
            headers: {
                "accept": "application/json"
            },
            body:obj,
        });
        const result = await request.json();
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
 }
export const deleteUser = async (user)=>{
    try {
        const request = fetch(`https://playground.4geeks.com/contact/agendas/${user}?tags=Agenda%20operations&summary=Delete%20Agenda.&description=Deletes%20a%20specific%20agenda%20from%20the%20database.`,{
          method:"DELETE",
          headers: {
                "accept": "application/json"
            }
        })
        const result = await request.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}