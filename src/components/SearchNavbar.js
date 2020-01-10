import React, { useState } from 'react';
import { Collapse, Navbar,Button, NavbarBrand, Nav, NavItem, FormGroup, Input } from 'reactstrap';
import {Link} from "react-router-dom";
import Isotipo from '../img/isotiposodimac.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const SearchNavbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="primary" dark>
      <Link to="/Login">
      <NavbarBrand className="mr-auto">
          <img src= { Isotipo } width="50" height="30" alt="isotipoSodimac" className="d-inline-block align-top"></img>
     </NavbarBrand>
      </Link>
      <Button  color="primary" onClick={toggleNavbar} className="btnSearch r-2"><FontAwesomeIcon icon={faSearch} /></Button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <FormGroup>
            <Input type="search" name="search" id="searchId" placeholder="¿Que estas buscando?" />
          </FormGroup>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default SearchNavbar;