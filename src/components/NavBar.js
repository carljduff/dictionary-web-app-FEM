import React from "react";
import "../css/nav.css";
import Form from 'react-bootstrap/Form';

const NavBar = () => {
    return(
        <div className="nav-wrapper">
            <div className="left-group">
                <h1>ICON</h1>
            </div>

            <div className="right-group">
                <select>
                    <option>Sans Serif</option>
                    <option>Serif</option>
                    <option>Font Three</option>
                </select>

        <Form className="toggle">
      <Form.Check className="toggle"
        type="switch"
        id="custom-switch"
       
      />
    </Form>
            </div>

        </div>
    )
}

export default NavBar;
