import React, { useEffect } from "react";
import axios from "axios";
import { logout } from "./../reducers/login";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllTasks,
  addNewTasks,
  DeleteTasks,
  UpdateTasks,
} from "./../reducers/task";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Todos = () => {
  const state = useSelector((state) => {
    return state;
  });
  console.log(state, "state");
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

  const signOut = () => {
    dispatch(logout({ token: "" }));
  };

  const getTasks = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/todo/alltodos`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });
      console.log(result);

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
    try {
      const result = await axios.delete(`${BASE_URL}/todo/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });

      dispatch(DeleteTasks(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id) => {
    try {
      const result = await axios.put(`${BASE_URL}/todo/todos${id}`, {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      });

      dispatch(UpdateTasks(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className ="task">
      {state.tasksReducer.tasks.length &&
        state.tasksReducer.tasks.map((item) => (
          <h2 key={item._id}>{item.name}</h2>
        ))}
      <button onClick={addTask}>addtasks</button>
      <br />
      <button onClick={deletetodo}>delete tasks</button>
      <br />
      <button onClick={updateTask}>update tasks</button>
      <br />
      <button onClick={signOut}>logOut</button>
      <br />
    </div>
  );
};

export default Todos;
