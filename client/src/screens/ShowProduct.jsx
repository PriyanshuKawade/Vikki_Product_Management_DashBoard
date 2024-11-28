import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'


import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.jsx'
const Showproduct=()=>{
const navigate=useNavigate()

    const [products,setProducts] = useState([])
    useEffect(() =>{
        let getProductdata=async()=>{
            const {data}=await axios.get('/api/products/getallproduct')
            console.log(data);
            setProducts(data)

        }
        getProductdata()
},[])
const handleSearch=e=>{
  e.preventDefault()
  console.log("OK search")
  navigate("/search",{})
}
  return(
  <>
<Container className='justify-content-center mt-2 mb-2 p-2'>
  <h1 className='text-center'>Products</h1> 
  <Link to={`/addProduct`}>
<Button>Add New Products</Button>
</Link>
<nav className ="navbar navbar-light bg-light">
  <form className="form-inline">
  <input className="form-control mr-sm-2" type="search" placeholder='Search' aria-label='Search'/>
  <button onClick={handleSearch} className="btn btn-outline-success my-2 my-sm-0" type='submit'>Search</button>
  </form>
</nav>


<hr/>
<Row>
{
  products.map(product => {
  return  <Col md={8} lg={12} sm={12} key={product.id}>
    <ProductCard Product={product}/>
  </Col>
  })
}
</Row>
</Container>


</>

)  
}

export default Showproduct
