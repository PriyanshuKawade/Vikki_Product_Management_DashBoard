import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
const Editproduct=()=>{

  const {id}= useParams()
const history=useNavigate()

  const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const [desc,setDesc]=useState('')
    useEffect(()=>{
const getDatabyId= async()=>{
  const {data} = await axios.get(`/api/products/${id}`)
  setTitle(data.title)
  setPrice(data.price)
  setDesc(data.desc)
}
getDatabyId()
    },[id])
    
    const updateProductHand=async (e)=>{
      e.preventDefault()
      const data={
        title:title,
        price:price,
        description:desc,
        published:true
      }
      //update by put request
      await axios.put(`/api/products/${id}`,data)
      history("/")
    }

  return(
  <div>
<Container className='mt-5 p-2'>
<h1>
Add product
</h1>
<Form onSubmit={updateProductHand}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text"  />
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
        <Form.Control value={desc} onChange={(e)=> setDesc(e.target.value)} as ="textarea"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Edit Product
      </Button>
    </Form>
</Container>
</div>

)  
}

export default Editproduct