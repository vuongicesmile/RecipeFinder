import {SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

export const setJob = (payload) => {
  console.log('payload', payload);
  return {
    type : SET_JOB,
    payload : payload
  }
}
export const addJob = (payload) => {
  console.log(payload);
  return {
    type : ADD_JOB,
    payload
  }
 }
export  const deleteJob = (payload) => {
  console.log(payload);
  return {
    type : DELETE_JOB,
    payload
  }
 } 

