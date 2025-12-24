export const initialStore=()=>{
  return{
   /* message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]*/

      showRegister: false,
      stateUser: "",
      stateListUsers: [],
      stateFilterUsers: [],
      stateListUsersPer: "",

  }


}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    /*case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');*/

      case 'setStateUser':    
          return {...store, stateUser: action.payload}   
      case 'setStateListUsers':
          return {...store, stateListUsers: action.payload}    
      case "setShowRegister":    
          console.log("Has entrado al caso de setShowRegister")
          // return {...store, showRegister : action.payload.show, stateUser: action.payload.user}  
          return {...store, showRegister : action.payload} 
      case "setStateFilterUsers":
          return store    
      case "setStateListUsersPer":
          return {...store, stateListUsersPer: action.payload}    
      default:
          return store

  }    
}

// export const initialStore=()=>{
//    return {
//     showRegister: false,
//     stateUser: "",
//     stateListUsers: [],
//     stateFilterUsers: [],
//     stateListUsersPer: "",
//    }
// }

// export default function storeReducer(store, action ) {
//     switch (action.type) {
//       case "registerUser":
//           return {...store,showRegister:true}
//       case "closeModal":
//           return {...store,showRegister:false}

//       case "handleChange":
//         const event = action.payload;
//           return {...store,stateUser: event.target.value}

//       case "selectInput": 
//         const name = action.payload;
//         return {...store,stateListUsersPer: name.slug,stateFilterUsers:[]}

//       case "onFilter":
//         const user = action.payload;
//         const filtro = stateListUsers.filter(element=>element.slug.toLowerCase().includes(user))
//         if(user = ''){
//           return { ...store, stateFilterUsers:[]}
//         }
//         return {...store,stateFilterUsers: filtro}
      
//       case "handleChangeInput":
//         const input = action.payload;
        
//       default:
//     }
// }