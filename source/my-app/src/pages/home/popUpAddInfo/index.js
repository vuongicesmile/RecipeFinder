import React, { useContext } from 'react'
import { Button, Modal, Input, Dropdown } from 'semantic-ui-react'
import { StoreContext } from '../../../store'
import { addJob, setJob , editJob} from '../actions';
import { useEffect } from 'react';
import { useRef } from 'react';

function PopUpAdd({ open, setOpen }) {
  const [state, dispatch] = useContext(StoreContext);
  const { job } = state; // destructuring state

  const options = [
    { key: 1, text: 'Show', value: 'Show' },
    { key: 2, text: 'Hide', value: 'Hide' },
  ]
  const inputRef = useRef();

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Todos</Button>}
      size={"mini"}
    >
      <Modal.Header>Add Todo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Todo Name
          </p>
          <Input
            ref={inputRef}
            defaultValue={job.description}
            value={job.description}
            onChange={(e) => dispatch(setJob({
              ...job,
              description: e.target.value
            }))}
          ></Input>
          <p>
            Status
          </p>
          <Dropdown
            value={job.status}
            onChange={(e) => dispatch(setJob({
              ...job,
              status: e.target.innerText
            }))}

            placeholder='select' fluid selection
            options={options}
          ></Dropdown>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Add"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {
            (job.index != null) ?
              dispatch(editJob(job)) :
              dispatch(addJob(job))
            dispatch(setJob({
              description: '',
              status: 'Show'
            }))
            setOpen(false)
          }
          }
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default PopUpAdd