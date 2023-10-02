import React, { useReducer, useRef } from "react";
import { Button , Input } from "semantic-ui-react";
import { initState } from '../../store/reducer'
import { Link } from "react-router-dom";
import "./home.scss";
import reducer from "../../store/reducer";
import { setJob, addJob , deleteJob } from "./actions";
import { useContext } from "react";
import { StoreContext } from "../../store";


export const Home = () => {
  const [state, dispatch] = useContext(StoreContext);
  const {job,jobs } = state; // destructuring state

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))
    inputRef.current.focus()
  }

  return (
    <div className="home-container">
      <h3>TODO</h3>
      <div className="todo-header">
        <Input 
        ref={inputRef}
        placehoder="Enter todos"
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
        ></Input>
        <Button
        onClick={handleSubmit}
        >Add</Button>
      </div>
      <div className="todo-content">
      <ul>
        {jobs?.map((job,index) =>  (
          <li key={index}>{job} 
          <span onClick={() => {
            dispatch(deleteJob(index))
          }}>&times;</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};
