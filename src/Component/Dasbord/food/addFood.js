import React,{Component} from 'react'
import axios,{post} from 'axios'
import {Form, Button, Image} from 'react-bootstrap'
import './food.css'
import food from './turkey.png'
import plus from './plus.png'
import photo from './photo.png'
import icupload from './upload.png'
import BarMenu from '../barMenu/barMenu'
import NavBar from '../navbar/navbar'
// import {LinkContainer} from "react-router-bootstrap";
// import { runInThisContext } from 'vm';


class MenuFoodAdd extends Component{
    constructor(props){
        super(props);
        this.onChangeNama = this.onChangeNama.bind(this)
        this.onChangeDeskripsi = this.onChangeDeskripsi.bind(this)
        this.onChangeHarga = this.onChangeHarga.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.state ={
            uuu: null,
            nama : '',
            deskripsi : '',
            harga : '',
            status : '',
            imgMakanan : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        this.setState({
          uuu      : URL.createObjectURL(e.target.files[0]),
          imgMakanan : e.target.files[0]
        });
      }
      onChangeNama(e){
          this.setState({
              nama: e.target.value
          })
      }
      onChangeDeskripsi(e){
          this.setState({
              deskripsi: e.target.value
          })
      }
      onChangeHarga(e){
          this.setState({
              harga: e.target.value
          })
      }
      onChangeStatus(e){
          this.setState({
              status: e.target.value
          })
      }
      fileUpload(imgMakanan){
          const url = 'http://192.168.5.224:5000/api/warung/food'
          const formData = new FormData();
          formData.append('nama', this.state.nama)
          formData.append('imgMakanan', imgMakanan)
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
          this.fileUpload(this.state.imgMakanan).then((response)=>{
              console.log(response.data)
          })
          const obj ={
              token : localStorage.getItem('a'),
              imgMakanan: this.state.nama,
              nama : this.state.nama,
              harga : this.state.harga,
              deskripsi : this.state.deskripsi,
              status : this.state.status
          };
          axios.post('http://192.168.5.224:5000/api/warung/food', obj)
          .then(res => console.log(res.data));

          this.setState({
              nama: '',
              harga: '',
              deskripsi: '',
              status : '',
              uuu: null,
              imgMakanan: ''
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
                 <div className="saip">
                    <img className="imgaddfd" src={food}/>
                    <img className="imgplusfd" src={plus}/>
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
                     <label className="lblharga">Harga</label>
                     <input
                     className="inpharga"
                      type="number" 
                      placeholder="0" 
                      name="harga"
                      required
                      value={this.state.harga}
                      onChange={this.onChangeHarga}
                      />
                 </div>
              
                <div>
                 <label className="lblstatus">Status</label>
                 <select className="inpstatus" value={this.state.status} required onChange={this.onChangeStatus}>
                     <option value="-"> --</option>
                     <option value='Ready' >Ready</option>
                     <option value='Kosong' >Kosong</option>
                     <option value='PesanDulu' >Pesan Dulu</option>
               </select>
              </div>
                            

                
                 <div className="form-group">
                 <label htmlFor="comment" className="lbldeskripsi">Deskripsi</label>
                 <textarea className="inpdeskripsi" rows="3" name="deskripsi" 
               value={this.state.deskripsi} 
                required
                onChange={this.onChangeDeskripsi}></textarea>
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
export default MenuFoodAdd;