import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB } from '../pages/home/constants'

// 1 .init state
export const initState = {
  job: {
    description: '',
    status: 'Show'
  },
  jobs: [],
};


// 3.Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [
          ...state.jobs,
          action.payload
        ]
      }
    case EDIT_JOB:
      const currentJob = [...state.jobs];
      currentJob[action.payload.index] = {
        description : action.payload.description, 
        status :action.payload.status 
      }
      return {
        ...state,
        jobs : currentJob,
      }
     
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Invalid action type')
  }
};


export default reducer