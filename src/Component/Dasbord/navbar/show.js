import React,{Component} from 'react'
import { Navbar, Image } from 'react-bootstrap'
import food from './restaurant.png'
import drink from './coffee-cup.png'
import user from './man-user.png'
import NavBar from './navbar'
import BarMenu from '../barMenu/barMenu'
import './navbar.css'
import {LinkContainer} from "react-router-bootstrap";
import axios from 'axios'
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
import Chart from './Charts'




class Show extends Component{
    constructor(props){
        super(props);
        this.state = {
          persons: [],
          drinks:[],
          employees:[],
          ahh:[]
        }
      }

    componentDidMount() {
      // const aa={
      //   token: localStorage.getItem('a')
      // }
      // axios.get('http://192.168.5.224:5000/api/warung/signin/check',aa)
      // .then(res => {
      //   const ahh = res.data;
      //   this.setState({ ahh : ahh.values })
      //   console.log({ahh})
      // })
        axios.get('http://192.168.5.224:5000/api/warung/food')
          .then(res => {
            const persons = res.data;
            this.setState({ persons : persons.values })
            // console.log({persons})
          })
          axios.get('http://192.168.5.224:5000/api/warung/drink')
          .then(res => {
            const drinks = res.data;
            this.setState({ drinks : drinks.values })
            // console.log({persons})
          })
          axios.get('http://192.168.5.224:5000/api/warung/employee')
          .then(res => {
            const employees = res.data;
            this.setState({ employees : employees.values })
            // console.log({persons})
          })
        
      }
    render(){
            const dasar={
                height: '50px',
                background: '#F44336'
            }
            // console.log(this.state.persons.length)
        return(
          <div>
            
            <div className="box"><div/>
            <Chart/>
            <div>
            <NavBar/>
            <BarMenu/>
            </div>
              {/* <NavBar/> */}
            <div className="isi">
            <div className="homekuy">
            <div className="foodtotal">
            <p id="tfood">TOTAL FOODS</p>
            <LinkContainer to="/food"><p id="tfoodjum">{this.state.persons.length}</p></LinkContainer>
            <LinkContainer to="/food"><img id="fdicon" src={food}/></LinkContainer>
            </div>
            <div className="drinktotal">
            <LinkContainer to="/drink"><img id="dricon" src={drink}/></LinkContainer>
            <p id="tdrink">TOTAL DRINKS</p>
            <LinkContainer to="/drink"><p id="tdrinkjum">{this.state.drinks.length}</p></LinkContainer>
            </div>
            <div className="employeetotal">
            <LinkContainer to="/employee"><img id="usicon" src={user}/></LinkContainer>
            <p id="tuser">TOTAL EMPLOYEES</p>
            <LinkContainer to="/employee"><p id="tuserjum">{this.state.employees.length}</p></LinkContainer>
            </div>
            </div>
            </div>
           
            </div>
            </div>
        )
    }
}
export default Show;