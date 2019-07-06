import React,{Component} from 'react'
import { Navbar, Image } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";
import logout from './logout.png'
import './navbar.css'
class NavBar extends Component{
        constructor(props){
            super(props);
            this.onLogout = this.onLogout.bind(this)
        }
        onLogout(e){
            localStorage.removeItem('b')
            localStorage.removeItem('a')
            window.location.reload()
        }
        componentDidMount(){
            
            console.log(this)
        }
    render(){
            const dasar={
                height: '50px',
                background: '#F44336'
            }

        return(
            <div>
                <div className="nn">
                    <p id="nj">Warung</p>
                </div>
            <div className="ahh">
                <div className="aa">
                    <p className="ttotal">HOME</p>
                </div>
            </div>
            <div className="dropdown">
                <img  className="dropbtn" src={localStorage.getItem('b')}/>
                <div className="dropdown-content">
                    <LinkContainer to="/"><a href="">HOME</a></LinkContainer>
                    <a href="" onClick={this.onLogout}>Logout</a>
                </div>
                </div>
           {/* <button onClick={this.onLogout} id="btnlgt">logout</button> */}
            

            {/* <div>
            <div className="foodtotal">
            <p id="tfood">TOTAL FOOD</p>
            <p id="tfoodjum">420</p>
            <img id="fdicon" src={food}/>
            </div>
            <div className="drinktotal">
            <img id="dricon" src={drink}/>
            <p id="tdrink">TOTAL FOOD</p>
            <p id="tdrinkjum">420</p>
            </div>
            <div className="employeetotal">
            <img id="usicon" src={user}/>
            <p id="tuser">TOTAL FOOD</p>
            <p id="tuserjum">420</p>
            </div>
            </div> */}
            </div>
        )
    }
}
export default NavBar;