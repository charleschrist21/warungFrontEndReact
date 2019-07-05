import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios'
import { LinkContainer } from "react-router-bootstrap";
import './employee.css'
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
import Edit from './edit.png'
import Delete from './trash.png'
// import { First } from 'react-bootstrap/PageItem';



class MenuEmployee extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [],
      id : '',
    }
  }
  onDelete=(e)=>{
    console.log(this.state.id)
    // e.preventDefault();
    axios.delete(`http://192.168.5.224:5000/api/warung/employee/${e}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
  }

  onChange(e){
    this.setState({
        id: e.target.value
    });
  }
  
  componentDidMount() {
    axios.get('http://192.168.5.224:5000/api/warung/employee')
      .then(res => {
        const persons = res.data;
        this.setState({ persons : persons.values })
      })
    
  }

  render() {
    return (
      <div>
      <div className="box">
      </div>
        <NavBar/>
        <BarMenu/>
      <div className="isi">
        <table className="tableemployee">
          <thead>
          <tr className="judul">
            <td>ID</td>
            <td>Nama</td>
            <td>Alamat</td>
            <td>Posisi</td>
            <td>Images</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          </thead>
          <tbody>
        
            {/* {console.log(this.state.persons.v)} */}
            {this.state.persons.map(persons => 
            <tr key={persons.id}>
              <td name="id" value={this.state.id} onChange={this.onChange}>
               {persons.id}
              </td>
              <td>
                {persons.nama}
              </td>
              <td>
                {persons.alamat}
              </td>
              <td>
                {persons.posisi}
              </td>
              <td>
                <img alt="img" className="imgtbl" src=
                {persons.imgEmployee}/>
              </td>
              <td>
                <LinkContainer to={`/employee/edit/${persons.id}`}><img variant="success" src={Edit} className="btnEdit"/></LinkContainer>
              </td>
              <td>
              <img  src={Delete} onClick={() => { if (window.confirm('Apakah kamu yakin?')) this.onDelete(persons.id) } } className="aou" variant="danger"/>
              </td>
            </tr>)}
            </tbody>
        </table>
        
          <LinkContainer to="/employee/tambah"><button className="btnAddEmployee">Tambah Baru</button>
          </LinkContainer>
          
      </div>
      </div>
    )
  }
}
export default MenuEmployee