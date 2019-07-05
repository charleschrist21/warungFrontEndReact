import React,{Component} from 'react';
// import logo from './logo.svg';
import {Route,Switch,BrowserRouter} from  'react-router-dom'
import './App.css';
import BarMenu from './Component/Dasbord/barMenu/barMenu'

import NavBar from './Component/Dasbord/navbar/navbar'
import { Row,Col } from 'react-bootstrap';
import MenuDrink from '../src/Component/Dasbord/drink/drink'
import MenuDrinkAdd from '../src/Component/Dasbord/drink/addDrink'
import MenuDrinkEdit from '../src/Component/Dasbord/drink/editDrink'
import MenuFood from '../src/Component/Dasbord/food/food'
import MenuFoodAdd from '../src/Component/Dasbord/food/addFood'
import MenuEmployee from '../src/Component/Dasbord/employee/employee'
import MenuFoodEdit from '../src/Component/Dasbord/food/editFood'
import MenuEmployeeAdd from '../src/Component/Dasbord/employee/addEmployee'
import MenuEmployeeEdit from '../src/Component/Dasbord/employee/editEmployee'
import Login from './Component/Login/login'
import Show from '../src/Component/Dasbord/navbar/show'
import Error from '../src/Component/Dasbord/error'
import { EROFS } from 'constants';



const ns ={
  data : localStorage.getItem('a')
}
function lgn (props){
  if(ns.data != null){
    return <Home/>
  }else{
    return <Login props={props}/>

  }
    
}
function employee(props){
  if(ns.data != null){
    return <MenuEmployee props={props}/>
  }else{
    return <Error/>
  }
}
function employeeEdit(props){
  if(ns.data != null){
    return <MenuEmployeeEdit props={props}/>
  }else{
    return <Error/>
  }
}
function employeetmbh(props){
  if(ns.data != null){
    return <MenuEmployeeAdd props={props}/>
  }else{
    return <Error/>
  }

}
function drinkEdit(props){
  if(ns.data != null){
    return <MenuDrinkEdit props={props}/>
  }else{
    return <Error/>
  }

}
function drinkAdd(props){
  if(ns.data != null){
    return <MenuDrinkAdd props={props}/>
  }else{
    return <Error/>
  }

}
function foodEdit(props){
  if(ns.data != null){
    return <MenuFoodEdit props={props}/>
  }else{
    return <Error/>
  }

}
function makanantmbh(props){
  if(ns.data != null){
    return <MenuFoodAdd props={props}/>
  }else{
    return <Error/>
  }

}
function Home(){
  return <Show/>
}
function food(props){
  if(ns.data != null){
    return <MenuFood props={props}/>
  }else{
    return <Error/>
  }

}
function drink(props){
  if(ns.data != null){
    return <MenuDrink props={props}/>
  }else{
    return <Error/>
  }

}

function noMatch(){
  return  <Error/>
}
class App extends Component{
  render(){
    return(
      <div>
        <div></div>
        <BrowserRouter>
        
      {/* <div>
              <BarMenu/>
              <NavBar/>
      </div> */}
      <div> 
      <div>
      <main>
                    <Switch>
                            <Route path='/' exact component={lgn}/>

                            <Route path='/employee/edit/:id/' exact component={employeeEdit}/>
                            <Route path='/employee/tambah/' exact component={employeetmbh}/>
                            <Route path='/employee/' exact component={employee}/>
                            <Route path='/employee/tambah' exact component={employeetmbh}/>
                            <Route path='/employee' exact component={employee}/>
                            <Route path='/employee/delete/:id/' exact component={employee}/>

                            <Route path='/food/edit/:id/' exact component={foodEdit}/>
                            <Route path='/food/tambah/' exact component={makanantmbh}/>
                            <Route path='/food' exact component={food}/>
                            <Route path='/food/tambah' exact component={makanantmbh}/>
                            <Route path='/food' exact component={food}/>
                            <Route path='/food/delete/:id/' exact component={food}/>
                            
                            <Route path='/drink/' exact component={drink}/>
                            <Route path='/drink/tambah/' exact component={drinkAdd}/>
                            <Route path='/drink' exact component={drink}/>
                            <Route path='/drink/tambah' exact component={drinkAdd}/>
                            <Route path='/drink/edit/:id/' exact component={drinkEdit}/>
                            <Route component={noMatch}/>
                    </Switch>
                    </main>
      
                    </div>
     
     
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
