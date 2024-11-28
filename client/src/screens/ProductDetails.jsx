import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {Card,Button,ListGroup,ButtonGroup} from 'react-bootstrap'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
const ProductDetails=()=>{

    const history=useNavigate()
    const {id} = useParams()
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const [desc,setDesc]=useState('')


    useEffect(()=>{
        let getSingleProduct=async()=>{
        const {data}=await axios.get(`/api/products/${id}`)
        console.log(data);
        setTitle(data.title)
        setPrice(data.price)
        setDesc(data.desc)
        }
        getSingleProduct()
    },[id])

    const handleDele= async(id)=>{
        await axios.delete(`/api/products/${id}`)
        history('/')
    }

  return(
  <div>
<h1>
Details Product
</h1>
<Card className='shadow-lg m-4 p-3 rounded' style={{width: '28rem',margin:'5px'}}>
    <Card.Body>
    <Card.Title>Title: {title}</Card.Title>
    <Card.Text>Price: ${price}</Card.Text>

    <Card.Text> Description: {desc}</Card.Text>
    </Card.Body>
   <ButtonGroup>
  <Link to={`/product/edit/${id}`}>
<Button>Edits</Button>
</Link>
<ListGroup >
<Button onClick={()=>handleDele(id)}>Delete</Button>
</ListGroup></ButtonGroup>
</Card>
</div>

)  
}

export default ProductDetails