import axios from 'axios'
import React,{useState} from 'react'
import {  useNavigate} from 'react-router-dom'

import { Container,Form,Button } from 'react-bootstrap'


const Addproduct=({history=[]})=>{
  const [validated,setValidate]=useState(false);
  const navigate=useNavigate();
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const [desc,setDesc]=useState('')
    const addProductHand = async(e)=>{
        e.preventDefault()
        const data= {
            title:title,
            price:price,
            description:desc,
            published:true
        }
        await axios.post('/api/products/addproduct',data)
        
        history.push(navigate('/'))
        alert(" Successfully Submitted");

    }
  return(
    <>
  <Container className='mt-5 p-2'>
<h1>
Add product
</h1>
<Form onSubmit={addProductHand} action='action' className='style.Form'  >
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Product Name</Form.Label>
        <Form.Control  value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required isInvalid={validated && !/^[a-zA-Z0-9]+$/.test()} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price ($)</Form.Label>
        <Form.Control value={price} onChange={(e)=> setPrice(e.target.value)} type="number"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Quantity</Form.Label>
        <Form.Control   type="number"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control  value={desc} onChange={(e)=> setDesc(e.target.value)} as ="textarea"  required isInvalid={validated && !/^[a-zA-Z0-9]+$/.test()} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button  variant="primary" type="submit">
        Add Product
      </Button>
    
    </Form>
</Container>
</>
)  
}

export default Addproduct