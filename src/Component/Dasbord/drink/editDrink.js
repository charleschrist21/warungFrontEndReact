import React, { Component } from 'react'
import axios, { post } from 'axios'
import { Form, Button, Image} from 'react-bootstrap'
import './drink.css'
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
import drink from './coffee.png'
import edit from './edit.png'
import { LinkContainer } from "react-router-bootstrap";
// import { runInThisContext } from 'vm';


class MenuDrinkEdit extends Component {
    constructor(props) {
        super(props);
        this.onChangeNama = this.onChangeNama.bind(this)
        this.onChangeDeskripsi = this.onChangeDeskripsi.bind(this)
        this.onChangeHarga = this.onChangeHarga.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.state = {
            persons: [],
            uuu: null,
            nama: '',
            deskripsi: '',
            harga: '',
            status: '',
            imgMinuman: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            uuu: URL.createObjectURL(e.target.files[0]),
            imgMinuman: e.target.files[0]
        });
    }
    onChangeNama(e) {
        this.setState({
            nama: e.target.value
        })
    }
    onChangeDeskripsi(e) {
        this.setState({
            deskripsi: e.target.value
        })
    }
    onChangeHarga(e) {
        this.setState({
            harga: e.target.value
        })
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }
    onChangeId(e) {
        this.setState({
            id: e.target.value
        })
    }
    fileUpload(imgMinuman) {
        const url = 'http://192.168.5.224:5000/api/warung/drink'
        const formData = new FormData();
        formData.append('nama', this.state.nama)
        formData.append('imgMinuman', imgMinuman)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'x-access-token' : localStorage.getItem('a')
            }
        }
        return post(url, formData, config)
    }
    onSubmit(e) {
        e.preventDefault();
        this.fileUpload(this.state.imgMinuman).then((response) => {
            console.log(response.data)
        })
        const obj = {
            token : localStorage.getItem('a'),
            imgMinuman: this.state.nama,
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
            status: this.state.status,

        };
        axios.put(`http://192.168.5.224:5000/api/warung/drink/${this.props.props.match.params.id}`, obj)
            .then(res => console.log(res.data));

        this.setState({
            nama: '',
            harga: '',
            deskripsi: '',
            status: '-',
            imgMinuman: '',
            uuu: null,
            imgMakanan: ''
        })
    }

    componentDidMount() {
        console.log(this.props.props.match.params.id)
        axios.get(`http://192.168.5.224:5000/api/warung/drink/${this.props.props.match.params.id}`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons: persons.values })
            })

    }

    render() {
        return (
            <div>
            <div className="box">
                </div>
                <div >
                <NavBar/>
                <BarMenu/>
                </div>
            <div className="isi">
            <div className="formEditFood">
            <div className="addF">
            <img src={edit} className="uhhuuhaa"/>
                <div className="saip">
                <img src={drink} className="icdrinkEdit2"/>
                
              {this.state.persons.map(persons =>
            <form  key={persons.id} className="addF" onSubmit={this.onSubmit}>
                <img className="imgaddEdit" src={this.state.uuu}/>
                <input  
                // value={this.onChangeNama}
                  onChange={this.handleChange}
                  type="file"
                  className="custom-file-input"
                  aria-describedby="inputGroupFileAddon01"
                  multiple id="fileEdit" className="inputfileEdit" />
                
                <label id="lblinp" htmlFor="fileEdit"> Choose a file</label>
                <div>
                    <label className="lblId">ID</label>
                    <input
                    className="inpDisId"
                    disabled 
                    type="text" 
                    name ="id"
                    value={persons.id}
                    required
                    onChange={this.onChangeId}
                    />
               </div>
                <div >
                    <label className="lblnamaEdit">Nama</label>
                    <br/>
                    <input
                    className="inpnamaEdit"
                    type="text" 
                    placeholder={persons.nama}
                    required
                    name ="nama" 
                    onChange={this.onChangeNama}
                    value={this.state.nama}
                    />
                </div>
                <div>
                    <label className="lblhargaEdit">Harga</label>
                    <br/>
                    <input
                     className="inphargaEdit"
                     type="number" 
                     placeholder={persons.harga} 
                     name="harga"
                     value={this.state.harga}
                    //  value={this.state.harga}
                     onChange={this.onChangeHarga}
                     />
                </div>
                
                
                <div >
                <label className="lblstatusEdit">Status</label>
                <br/>
                <select className="inpstatusEdit" value={this.state.status} onChange={this.onChangeStatus}>
                    <option value="-"> --</option>
                    <option value='Ready' >Ready</option>
                    <option value='Kosong' >Kosong</option>
                    <option value='PesanDulu' >Pesan Dulu</option>
                </select>
                </div>
                            

                
                <div className="form-group">
                <label className="lbldeskripsiEdit" hmtlfor="comment">Deskripsi</label>
                <br/>
                <textarea className="inpndeskripsiEdit" rows="5" name="deskripsi"
                placeholder={persons.deskripsi} 
                value={this.state.deskripsi} 
                // value={this.state.deskripsi}
                onChange={this.onChangeDeskripsi}
                >

                </textarea>
                </div>
                
                <br/>
                
                
            {/* <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div >
                <input
                  // value={this.onChangeNama}
                  onChange={this.handleChange}

                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  multiple
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01" >
                </label>
              </div>
            </div> */}
            
            <LinkContainer to="/food"><button onClick={(e) => { if (window.confirm('Apakah kamu yakin dengan perubahanya?')) this.onSubmit(e) } } variant="primary" type="submit" className="myButton2">
                    Submit
                </button></LinkContainer>
                
                </form>
                )}
            </div>
            </div>
            </div>
            </div>
            </div>


        )
    }
}
export default MenuDrinkEdit;