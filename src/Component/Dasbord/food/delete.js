import React from 'react';
import { Button,Form} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios'
import './food.css'

const Modal = props => {
    
     function test(e) {
         e.preventDefault();
         // console.log(this.state.id) 
         console.log(props.props.props)
         axios.delete(`http://192.168.5.224:5000/api/warung/food/${props.id}`)
           .then(res => {
             console.log(res);
             console.log(res.data);
            props.props.props.history.push('/food')
           })
           e.stopPropagation()
           props.closeModal()
     }
     const divStyle = { 
          display: props.displayModal ? 'block' : 'none'
     };
     function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }
  
        
        
     return (
        <div 
        className="modal"
        onClick={closeModal}
        style={divStyle} >
         <div 
            className="modal-content"
            onClick={ e => e.stopPropagation() } >
            <span 
                className="close"
                onClick={ closeModal }>&times;
            </span>
            <Form>
                <label className="aaah">Apakah Anda Yakin Menghapusnya ?</label>
                <br/>
                <LinkContainer to="/food"><Button className='yabtn' onClick={test} variant="danger">Ya</Button></LinkContainer>
                <LinkContainer to="/food"><Button onClick={ closeModal } className='nobtn' variant="success">Tidak</Button></LinkContainer>
            </Form>
            
         </div>
      </div>
     );
     
     }
export default Modal;