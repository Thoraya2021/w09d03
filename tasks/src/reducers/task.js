const initialState = {

    tasks: [],
  };
  //name of reducer take function with 2 parameters state and action
  const tasksReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "GET_ALL_TASKS":
        return payload; //here will return for me tasks from payload
  
      case "ADD_NEW_TASK": 
    const tasks = [...state.tasks, payload]; //here i take old state and i will change add elements 
        return { tasks }; 


        case "DELETE":
       
          return {tasks};

          
        case "UPDATE":
       
          return {tasks};
    
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  
  export const getAllTasks = (data) => {
    return {
      type: "GET_ALL_TASKS",
      payload: { tasks: data },
    };
  };
  
  export const addNewTasks = (data) => {
    return {
      type: "ADD_NEW_TASK",
      payload: data,
    };
  };

  
  export const DeleteTasks = (data) => {
    return {
      type: "DELETE",
      payload: data,
    };
  };

  
  export const UpdateTasks = (data) => {
    return {
      type: "UPDATE",
      payload: data,
    };
  };