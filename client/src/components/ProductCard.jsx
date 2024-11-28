import React from 'react'
import {Card,Button, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProductCard=({Product})=>{
  return(
  <>
  <Card className='shadow-lg m-4 p-3 rounded' style={{width: '18rem',margin:'5px'}}>
  <Card.Img variant="top" src=" ../logo192.png"/>

  <Card.Body>
    <Card.Title>Product Name: {Product.title}</Card.Title>
    <Card.Subtitle>Price: ${Product.price}</Card.Subtitle>

    <Card.Text>Description: {Product.description}</Card.Text>
  </Card.Body>
  <Link to={`/product/${Product.id}`}>
  <ListGroup>
<Button>Details</Button>
</ListGroup>
</Link>
</Card>
  

</>

)  
}

export default ProductCard