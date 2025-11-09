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
export const createUser = async (user) =>{
    try {
        const request = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`,{
            method: "POST",
            headers: {
                "accept": "application/json"
            },
            body:'',
        });
        const result = await request.json();
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
 }
// export const deleteUser = async ()=>{
//     try {
//         const request = fetch(``,{
//           method:"DELETE",

//         })
        
//     } catch (error) {
        
//     }
// }