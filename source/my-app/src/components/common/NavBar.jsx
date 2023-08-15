import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import { Link} from 'react-router-dom'

export const NavBar = () => {
  return (
   <Menu borderless fixed='top' >
     <MenuItem name="Home" as={Link} to="/" />
     <MenuItem name="Receipe" as={Link} to="/receipes" />
   </Menu>
  )
}
