export const createContact = async(user,body)=>{
    try {
        const request = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts`,{
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
        });
        const response = await request.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getListContact = async(user) =>{
    try {
        const request = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts`,{
           method: "GET",
           headers: {
                "accept": "application/json"
           }
        })
        const response = await request.json();
        console.log(response);
        
        return response
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteContact = async (user,idContact)=>{
    try {
        const request = fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${idContact}`,{
          method:"DELETE",
          headers: {
                "accept": "application/json"
            }
        })
        // const response = await request.json();
        // console.log(response);
         return request
    } catch (error) {
        console.log(error);
    }
}

export const updateContact = async(user,id,body)=>{
    try {
        const request = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`,{
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
        });
        const response = await request.json();
        return response
    } catch (error) {
        console.log(error);
    }
}