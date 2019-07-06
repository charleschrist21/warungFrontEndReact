import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios'
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
import { LinkContainer } from "react-router-bootstrap";
import './food.css'
import Modal from './delete'
import Edit from './edit.png'
import Delete from './trash.png'

// import { First } from 'react-bootstrap/PageItem';

// function imageFormatter(cell, row) {
//   return "<img width='30px' height='30px' src='" + cell + "'/>";
// }

class MenuFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      id: '',
    }
  }
  onChange(e) {
    this.setState({
      id: e.target.value
    });
  }
  show() {
    this.setState({ visible: true })
  }
  hide() {
    this.setState({ visible: false })
  }
  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }) // true/false toggle
  }

  componentDidMount() {
    axios.get('http://192.168.5.224:5000/api/warung/food')
      .then(res => {
        const persons = res.data;
        this.setState({ persons: persons.values })
        console.log({ persons })
      })

  }
  onDelete = (e) => {
    console.log(this.state.id)
    // e.preventDefault();
    const config ={
      headers: {
          'x-access-token' : localStorage.getItem('a')
      }
  }
    axios.delete(`http://192.168.5.224:5000/api/warung/food/${e}`, config)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload()  
      })

  }

  //   onSubmit(e){
  //     e.preventDefault();
  //     console.log(this.state.id) 
  //     axios.delete(`http://192.168.5.224:5000/api/warung/food/${this.state.id}`)
  //       .then(res => {
  //         console.log(res);
  //         console.log(res.data);
  //       })
  // }

  render() {
    // console.log(this.)
    return (
      <div>
        <div className="box">
        </div>
        <BarMenu />
        <NavBar />



        <div className="isi">
          <table className="table-line">
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
                <tr key={persons.id}>
                  <td value={this.state.id}>
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
                      {persons.imgMakanan} />
                  </td>
                  <td className="iu">
                    <LinkContainer to={`/food/edit/${persons.id}`} id={persons.id}><img src={Edit} variant="success" className="btnEdit" /></LinkContainer>
                  </td>
                  <td className="iu">

                    <img id={persons.id} className="aou" id={this.state.id} src={Delete} onClick={() => { if (window.confirm('Apakah kamu yakin?')) this.onDelete(persons.id) }} />
                    {/* <Modal 
                 displayModal={this.state.modal}
                 closeModal={this.selectModal} 
                 props={this.props}
                 id={persons.id}
                 />
                 */}
                  </td>
                </tr>)}
            </tbody>
          </table>

          <LinkContainer to="/food/tambah"><button className="btn-add-food">Tambah Baru</button>
          </LinkContainer>


        </div>
      </div>
    )
  }
}
export default MenuFood 