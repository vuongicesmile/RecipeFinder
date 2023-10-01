import React, { useReducer, useRef } from "react";
import { Header } from "../components/common/header";
import { Button , Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./home.scss";

// 1 .init state
const initState = {
  job: "",
  jobs: [],
};
//2 .action .
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  console.log('payload', payload);
  return {
    type : SET_JOB,
    payload : payload
  }
}
const addJob = (payload) => {
  console.log(payload);
  return {
    type : ADD_JOB,
    payload
  }
 }
 const deleteJob = (payload) => {
  console.log(payload);
  return {
    type : DELETE_JOB,
    payload
  }
 } 


// 3.Reducer
const reducer = (state, action) => {
  console.log('action',action);
  console.log('Prev state',state);

  let newState
  switch (action.type) {
      case SET_JOB:
        newState = {
          ...state,
          job : action.payload
        }
        break;
      case ADD_JOB :
        newState = {
          ...state,
          jobs : [
            ...state.jobs,
            action.payload
          ]
         }
        break;
      case DELETE_JOB : 
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload,1)
      newState = {
        ...state,
        jobs : newJobs
      }   
      break;
        default:
          throw new Error('Invalid action type')
   }
   console.log("New State",newState);
   return newState

};

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  
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
        { jobs?.map((job,index) =>  (
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
