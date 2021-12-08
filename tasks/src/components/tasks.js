import React, { useEffect } from "react";
import axios from "axios";
import { logout } from "./../reducers/login";
import { getAllTasks, addNewTasks } from "./../reducers/task";
import { useDispatch, useSelector } from "react-redux";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Todos = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

  const signOut = () => {
    dispatch(logout({ token: "" }));
  };

  const getTasks = async () => {
    try {
      const result = await axios.get(
        `${BASE_URL }/todo/alltodos`,
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );

      dispatch(getAllTasks(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      const result = await axios.post(
        `${BASE_URL}/todo/todos`,
        { name: "code" },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );

      dispatch(addNewTasks(result.data));
    } catch (error) {
      console.log(error);
    }
  };


  const deletetodo = async (id) => {
    await axios.delete(
      `${BASE_URL}/todo/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

};



  return (
    <div>
      {state.tasksReducer.tasks.length &&
        state.tasksReducer.tasks.map((item) => (
          <h2 key={item._id}>{item.name}</h2>
        ))}
      <button onClick={addTask}>addtasks</button>
      <button onClick={deletetodo}>addtasks</button>
      <button onClick={signOut}>logOut</button>
    </div>
  );
};

export default Todos;
