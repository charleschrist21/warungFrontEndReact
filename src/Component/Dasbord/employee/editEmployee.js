import React,{Component} from 'react'
import axios,{post} from 'axios'
import {Form, Button, Image} from 'react-bootstrap'
import './employee.css'
import {LinkContainer} from "react-router-bootstrap";
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
// import { runInThisContext } from 'vm';
import user from './user.png'


class MenuEmployeeEdit extends Component{
  constructor(props){
    super(props);
    this.onChangeNama = this.onChangeNama.bind(this)
    this.onChangeAlamat = this.onChangeAlamat.bind(this)
    this.onChangePassword =this.onChangePassword.bind(this)
    this.onChangePosisi = this.onChangePosisi.bind(this)
    this.onChangeId = this.onChangeId.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.state ={
        persons:[],
        uuu: null,
        nama : '',
        password: '',
        deskripsi : '',
        poisi : '',
        alamat:'',
        imgEmployee : ''
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(e){
    this.setState({
      uuu      : URL.createObjectURL(e.target.files[0]),
      imgEmployee : e.target.files[0]
    });
  }
  onChangeNama(e){
    this.setState({
        nama: e.target.value
    })
}
  onChangePosisi(e){
      this.setState({
          posisi: e.target.value
      })
  }
  onChangeAlamat(e){
      this.setState({
          alamat: e.target.value
      })
  }
  onChangePassword(e){
      this.setState({
          password: e.target.value
      })
  }
  onChangeId(e){
    this.setState({
        id: e.target.value
    })
}
fileUpload(imgEmployee) {
    const url = 'http://192.168.5.224:5000/api/warung/employee/signup'
    const formData = new FormData();
    formData.append('nama', this.state.nama)
    formData.append('imgEmployee', imgEmployee)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'x-access-token' : localStorage.getItem('a')
        }
    }
    return post(url, formData, config)
}
  onSubmit(e){
      e.preventDefault();
      this.fileUpload(this.state.imgEmployee).then((response)=>{
          console.log(response.data)
      })
      const obj ={
        token : localStorage.getItem('a'),
        imgEmployee: this.state.nama,
        nama : this.state.nama,
        password : this.state.password,
        posisi : this.state.posisi,
        alamat : this.state.alamat

      };
      axios.put(`http://192.168.5.224:5000/api/warung/employee/${this.props.props.match.params.id}`, obj)
      .then(res => console.log(res.data));

      this.setState({
        uuu: null,
        nama : '',
        password : '',
        alamat : '',
        posisi : '',
        imgEmployee : ''
      })
  }
  
  componentDidMount() {
    console.log(this.props.props.match.params.id)
    axios.get(`http://192.168.5.224:5000/api/warung/employee/${this.props.props.match.params.id}`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons : persons.values}) 
      })
    
  }

    render(){
        return(
          <div>
          <div className="box">
          </div>
            <NavBar/>
            <BarMenu/>
          <div className="isi">
          <div className="formEditFood">
            <div className="addF">
              <img src={user} className="icEditEmployee"/>
            {/* <img src={edit} className="uhhuuhaa"/> */}
                <div className="saip">
                {/* <img src={drink} className="icdrinkEdit2"/> */}
                
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
                    <label className="lblhargaEdit">Password</label>
                    <br/>
                    <input
                     className="inphargaEdit"
                     type="password" 
                     placeholder={persons.password} 
                     name="harga"
                     value={this.state.password}
                    //  value={this.state.harga}
                     onChange={this.onChangePassword}
                     />
                </div>
                
                
                <div >
                <label className="lblstatusEdit">Posisi</label>
                <br/>
                <select className="inpstatusEdit" value={this.state.poisi} onChange={this.onChangePosisi}>
                    <option value="-"> --</option>
                    <option value='Ready' >Ready</option>
                    <option value='Kosong' >Kosong</option>
                    <option value='PesanDulu' >Pesan Dulu</option>
                </select>
                </div>
                            

                
                <div className="form-group">
                <label className="lbldeskripsiEdit" hmtlfor="comment">Alamat</label>
                <br/>
                <textarea className="inpndeskripsiEdit" rows="5" name="alamat"
                placeholder={persons.alamat} 
                value={this.state.alamat} 
                // value={this.state.deskripsi}
                onChange={this.onChangeAlamat}
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
export default MenuEmployeeEdit;