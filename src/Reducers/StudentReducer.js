export const StudentReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {...state, contador: state.contador + 1};
      case 'decrement':
        return {...state, contador: state.contador - 1};
      case 'otro':
        return {...state, nombre: "Marcopolo Ramos Peña"}
      default:
        throw new Error();    
  }  
}