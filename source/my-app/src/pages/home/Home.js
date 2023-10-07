import React, { useRef } from "react";
import { Button, Input, Segment, Form, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./home.scss";
import { setJob, addJob, deleteJob, editJob } from "./actions";
import { useContext } from "react";
import { StoreContext } from "../../store";
import { Table, Dropdown, Modal } from 'semantic-ui-react'
import { useState } from "react";
import PopUpAdd from "./popUpAddInfo/index";


export const Home = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const { job, jobs } = state; // destructuring state
  const [searchTerm, setSearchTerm] = useState('');



  const options = [
    { key: 'page', text: 'This Page', value: 'page' },
    { key: 'org', text: 'This Organization', value: 'org' },
    { key: 'site', text: 'Entire Site', value: 'site' },
  ]

  const sortSearch = [
    { key: 'page', text: 'This Page', value: 'page' },
    { key: 'az', text: 'A - Z', value: 'az' },
    { key: 'za', text: 'Z - A', value: 'za' },
  ]


  return (
    <div className="home-container">
      <h3>TODO</h3>
      <div className="todo-header">
        <Input
          action={
            <Dropdown button basic floating options={sortSearch} defaultValue='page'
            onChange={(e) => {
console.log(e);
            }}
            />
          }
          icon='search'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          iconPosition='left'
          placeholder='Search...'
        />
        <div style={{ width: '150px' }}>
          <PopUpAdd
            open={open}
            setOpen={setOpen}
          />
        </div>

      </div>
      <div className="todo-content">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan='1'>STT</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>ID</Table.HeaderCell>
              <Table.HeaderCell rowSpan='6'>Description</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Status</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign='center'></Table.Cell>
              <Table.Cell textAlign='center'></Table.Cell>
              <Table.Cell textAlign='center'>
                <Input
                  action={
                    <Dropdown button basic floating options={options} defaultValue='page' />
                  }
                  icon='search'
                  iconPosition='left'
                  placeholder='Search...'
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </Table.Cell>
              <Table.Cell textAlign='center'>
              </Table.Cell>
              <Table.Cell textAlign='center'>

              </Table.Cell>
            </Table.Row>
            {jobs.filter(x => {
              return searchTerm == '' ? x : x.description.toLowerCase().includes(searchTerm)
            })?.map((job, index) => (
              <Table.Row key={index}>
                <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                <Table.Cell textAlign='center'>{index + 1}</Table.Cell>
                <Table.Cell textAlign='center' >{job.description}</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button color={`${job.status == 'Hide' ? 'red' : 'green'}  `}>{job.status}</Button>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button color='orange'
                    onClick={() => {
                      setOpen(true)
                      dispatch(setJob({
                        ...job,
                        index: index
                      }))

                    }}
                  >Edit</Button>
                  <Button color='red'
                    onClick={() => dispatch(deleteJob(index))}
                  >Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
