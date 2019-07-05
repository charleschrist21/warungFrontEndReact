import React,{Component} from 'react'
import './login.css'
import laptop from './laptop.png'
import idcard from './id-card.png'
import lock from './lock.png'
import axios from 'axios'
import {LinkContainer} from "react-router-bootstrap";
// import admin from './admin.png'
class Login extends Component{
    constructor(props){
        super(props);
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            id: '',
            password :''
        }
    }
    

      onChangeId(e){
          this.setState({
              id: e.target.value
          })
      }
      onChangePassword(e){
          this.setState({
              password: e.target.value
          })
      }
      onSubmit(e){
          e.preventDefault();
          
          
          const obj ={
            //   id: 8,
            //   password: 'aku'
              id: this.state.id,
              password: this.state.password
          };
          axios.post('http://192.168.5.224:5000/api/warung/signin', obj)
          .then(res => localStorage.setItem('a', res.data.token), window.location.reload());
 
        } 
    render(){
        return(
            <div className="bg">
                <div className="frmlgn">
                <form className="formlgn" onSubmit={this.onSubmit}>
                <button type="submit" className="btnlogin"> submit</button>
                    <img src={idcard} className="lgidcard"/>
                    <img src={lock} className="lglock"/>
                    <h2 className="ahsiapp">Login Karyawan</h2>
                    <img className="src" src={laptop}/>
                    <input 
                    value={this.state.id}
                    onChange={this.onChangeId}
                    type="text" 
                    name="id"
                    placeholder="ID" 
                    className="a123"
                    required/>
                    <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    className="aiueop"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    required/>
                    
                    <p className="txtlupaah">Forgot <strong>Username/Password?</strong></p>
                </form>
                </div>
            </div>
        )
    }
}

export default Login;