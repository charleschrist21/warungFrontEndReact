import React,{Component} from 'react'
import { LineChart, PieChart, AreaChart } from 'react-chartkick'
import 'chart.js'
import axios from 'axios'

class Charts extends Component{
    constructor(props){
        super(props);
        this.state = {
          persons: [],
          drinks:[],
          employees:[]
        }
      }

    componentDidMount() {
      
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
        return(
            <div>
            <div>
            {/* <AreaChart id="chartasik" data={[["Food", this.state.persons.length], ["Drink", this.state.drinks.length],["Employees", this.state.employees.length]]} /> */}
            <PieChart id="chartasik2" data={[["Food", this.state.persons.length], ["Drink", this.state.drinks.length],["Employees", this.state.employees.length]]} />
            </div>
            </div>
        )
    }
}
export default Charts