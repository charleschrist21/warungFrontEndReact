import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios'
import { LinkContainer } from "react-router-bootstrap";
import error404 from './error.png'


class Error extends Component {
  
    
  render() {
      const aa={
          marginLeft: '300px'
      }
      const bb={
          marginLeft: '50px',
          width:'1100px',
          height: '500px',
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          marginBottom: '50px'
      }
    return (
      <div style={bb}>
          <img style={aa} src={error404}/>
      </div>
    )
  }
}
export default Error 