import React,{Component} from 'react'

import {Row,Col} from 'react-bootstrap'
// import {Route,Switch,BrowserRouter} from  'react-router-dom'
import {LinkContainer} from "react-router-bootstrap";
import './barMenu.css'
import home from './house.png'
import food from './turkey.png'
import drink from './coffee.png'
import user from './add.png'


class BarMenu extends Component{
    imageClick=()=>{
        console.log('click!!!!')
    }

    render(){
        
 
       
        return(
            <div>
                
            <div >  
                                    
                    <div className="aiu">
                    <div id="v"><p id="tv">Flat V1</p></div>
                    <p id="tadmin">Admin</p>
                    <div>
                        <LinkContainer to="/"><img id="ichome" src={home} /></LinkContainer>
                        <LinkContainer to="/"><p id="thome">HOME</p ></LinkContainer>
                    </div>
                    <div>
                        <LinkContainer to="/food"><img id="icfood" src={food} /></LinkContainer>
                        <LinkContainer to="/food"><p id="txtfood">FOOD</p ></LinkContainer>
                    </div>
                    <div>
                    
                        <LinkContainer to="/drink"><img id="icdrink" src={drink} /></LinkContainer>
                        <LinkContainer to="/drink"><p id="txtdrink">DRINK</p ></LinkContainer>
                    </div>
                    <div>
                        <LinkContainer to="/employee"><img id="icemployee" src={user} /></LinkContainer>
                        <LinkContainer to="/employee"><p id="txtemployee">EMPLOYEE</p ></LinkContainer>
                    </div>
                    </div>
        
                </div>
            </div>
        )
    }
}
export default BarMenu;