const instialState = {
    // here define what state i want use global
    token: "" 
  };
  
  const signIn = (state = instialState, action) => {
    const { type, payload } = action;
  //here action for what the user can do in website and i should return data from user
    switch (type) {
      case "":
      
        return ;
  
      case "":
       
        return ;
  
      default:
         return state;
    }
  };
  
  export default signIn;
  