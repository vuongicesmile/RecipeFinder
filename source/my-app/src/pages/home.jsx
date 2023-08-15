import React from 'react'
import { Header } from '../components/common/header'
import { Button } from 'semantic-ui-react'
import { Link} from 'react-router-dom'

export const Home = () => {
  console.log('vo day');
  return (
  
    <Header title="out receipe" bgClass="bg-image" >
      <Button 
      content="search rececipe..."
      color='primary'
      as={Link}
      to="/receipes"
      size='big'
      />
      
       </Header>
  )
}
