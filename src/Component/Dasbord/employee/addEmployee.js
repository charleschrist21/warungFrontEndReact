import React,{Component} from 'react'
import axios,{post} from 'axios'
import {Form, Button, Image} from 'react-bootstrap'
import './employee'
import user from './add.png'
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
// import {LinkContainer} from "react-router-bootstrap";
// import { runInThisContext } from 'vm';
// import { throwStatement } from '@babel/types';


class MenuEmployeeAdd extends Component{
    constructor(props){
        super(props);
        this.onChangeNama = this.onChangeNama.bind(this)
        this.onChangeAlamat = this.onChangeAlamat.bind(this)
        this.onChangePassword =this.onChangePassword.bind(this)
        this.onChangePosisi = this.onChangePosisi.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.state ={
            uuu: null,
            nama : '',
            password : '',
            alamat : '',
            posisi : '',
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
      fileUpload(imgEmployee){
          const url = 'http://192.168.5.224:5000/api/warung/employee/signup'
          const formData = new FormData();
          formData.append('nama', this.state.nama)
          formData.append('imgEmployee', imgEmployee)
          const config ={
              headers: {
                  'content-type' : 'multipart/form-data',
                  'x-access-token' : localStorage.getItem('a')
                }
          }
          return post(url,formData,config)
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
              alamat : this.state.alamat,   
          };
          axios.post('http://192.168.5.224:5000/api/warung/employee/signup', obj)
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

    render(){
        return(
            <div>
      <div className="box">
      </div>
        <NavBar/>
        <BarMenu/>
      <div className="isi">
            <div className="formAddFood">
                 <img src={user} className="icdrinkEdit"/>
             <div className="saip">
                
         <form className="addF" onSubmit={this.onSubmit}>
             <div >
                 <label className="lblnama">Nama</label>
                 <input 
                 className="inpnama" 
                 type="text" 
                 placeholder="Masukan Nama"
                name ="nama" 
                 required
                 value={this.state.nama}
                 onChange={this.onChangeNama}
                 />
             </div>
             <div>
                 <label className="lblharga">password</label>
                 <input
                 className="inpharga"
                  type="password" 
                  placeholder="Enter Your Password" 
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
             </div>
          
            <div>
             <label className="lblstatus">Status</label>
             <select className="inpstatus" value={this.state.posisi} required onChange={this.onChangePosisi}>
                 <option value="-"> --</option>
                 <option value='Owner' >Owner</option>
                 <option value='Admin' >Admin</option>>
           </select>
          </div>
                        

            
             <div className="form-group">
             <label htmlFor="comment" className="lbldeskripsi">Alamat</label>
             <textarea className="inpdeskripsi" rows="3" name="deskripsi" 
           value={this.state.alamat} 
            required
            onChange={this.onChangeAlamat}></textarea>
            </div>
            <img className="imgadd" src={this.state.uuu} ></img>
            <br/>
            
        
        {/* <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
            </span>
          </div>
          <div >
            <input
            //   value={this.onChangeNama}
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
            {/* <img src={icupload} className="imguploadadd"/> */}
            <input  
            // value={this.onChangeNama}
              onChange={this.handleChange}
              type="file"
              className="custom-file-input"
              aria-describedby="inputGroupFileAddon01"
              multiple id="file" className="inputfile" />
            
            <label id="lblinp" htmlFor="file"> Choose a file</label>
            <button onClick={(e) => { if (window.confirm('Apakah kamu yakin?')) this.onSubmit(e) } } variant="primary" type="submit" className="myButton">
                Submit
            </button>
            </form>
            </div>
        </div>
        </div>
        </div>
        
        )
    }
}
export default MenuEmployeeAdd;