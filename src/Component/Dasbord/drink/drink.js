import React, { Component } from 'react'
import { Button, Form, } from 'react-bootstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios'
import { LinkContainer } from "react-router-bootstrap";
import './drink.css'
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
import Edit from './edit.png'
import Delete from './trash.png'
// import { First } from 'react-bootstrap/PageItem';


class MenuDrink extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [],
      id : '',
    }
  }
  onChange(e){
    this.setState({
        id: e.target.value
    });
  }
  
  componentDidMount() {
    axios.get('http://192.168.5.224:5000/api/warung/Drink')
      .then(res => {
        const persons = res.data;
        this.setState({ persons : persons.values })
      })
    
  }
  onDelete=(e)=>{
    console.log(this.state.id)
    // e.preventDefault();
    axios.delete(`http://192.168.5.224:5000/api/warung/drink/${e}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
  }


  onSubmit(e){
    e.preventDefault();
    console.log(this.state.id) 
    axios.delete(`http://192.168.5.224:5000/api/warung/food/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
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
        <Form >
        <table className="tabledrink">
          <thead>
          <tr className="judul">
            <td>ID</td>
            <td>Nama</td>
            <td>Harga</td>
            <td>Status</td>
            <td>Images</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          </thead>
          <tbody>
          
        
            {/* {console.log(this.state.persons.v)} */}
            {this.state.persons.map(persons => 
            <tr key={persons.id} >
              <td name="id" value={this.state.id} onChange={this.onChange}>
               {persons.id}
              </td>
              <td>
                {persons.nama}
              </td>
              <td>
                {persons.harga}
              </td>
              <td>
                {persons.status}
              </td>
              <td>
                <img alt="img" className="imgtbl" src=
                {persons.imgMinuman}/>
              </td>
              <td>
                <LinkContainer to={`/drink/edit/${persons.id}`}><img variant="success" src={Edit} className="btnEdit"/></LinkContainer>
              </td>
              <td>
              <img  src={Delete} className="aou" onClick={() => { if (window.confirm('Apakah kamu yakin?')) this.onDelete(persons.id) } } variant="danger"/>
              </td>
            </tr>)}
            </tbody>
        </table>
        
          <LinkContainer to="/drink/tambah/"><button className="btnAddDrink">Tambah Baru</button></LinkContainer>
          </Form>
      </div>
      </div>
    )
  }
}
export default MenuDrink 