import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom'
import {Button,ButtonGroup,ListGroup} from 'react-bootstrap'


import {Container,Row,Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.jsx'

const Search=()=>{
const navigate=useNavigate()

    const [products,setProducts] = useState([])
    const [datas,setdata] = useState([])


const {id}= useParams()
const history=useNavigate()
const [sear,setSearc]=useState("");

  const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const [desc,setDesc]=useState('')

    //
    useEffect(() =>{
        let getProductdata=async()=>{
            const {data}=await axios.get('/api/products/getallproduct')
            console.log(data);
            setProducts(data)

        }
        getProductdata()
},[])
//////////

// const [pro,setPro]=useState(title);
// function handSear(){
// if(sear===""){setPro(title); return;}
// const filterby=title.filter((item)=>{
//     if(item.toLoweCase()
//     .includes(sear.toLowerCase())){return item;}
// })
// setPro(filterby);
// }

////////

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
        alert(" Successfully Deleted");

        history('/')
    }
const handleSearch=e=>{
  e.preventDefault()
  console.log("OK search")
  {
     products.map((pro)=>(
        <li key={pro.title}>{pro.text}</li>
     ))
  }
  navigate(`/search/${id}`,{})
}
  return(
  <>
<Container className='justify-content-center mt-2 mb-2 p-2'>
  <h1 className='text-center'>Product List Page</h1> 
  <Link to={`/addProduct`}>
<Button>Add New Products</Button>
</Link>
<nav className ="navbar navbar-light bg-light">
  <form className="input-box">
  <input onChange={e=>setSearc(e.target.value)} placeholder='Search' />
  <button onClick={handleSearch} className="btn btn-outline-success my-2 my-sm-0" type='submit'>Search</button>
  
  </form>
</nav>


<hr/>
<Row>
    <table className='table' >
        <thead>
                <tr>
                  <th>SUK .No</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th className='expand'>Description</th>
                  <th className="text-center">Action</th>
                </tr>
                </thead>
             <tbody>
{
  products.map(product => (
       
            
                
                <tr key={product.id} >
                    <td>{product.id*34+10000}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                   <td className='action'> 
                    <ButtonGroup>
                    <Link to={`/product/edit/${product.id}`}>
                    <Button>Edits</Button>
                </Link>
                <ListGroup >
                <Button onClick={()=>handleDele(product.id)}>Delete</Button>
                    </ListGroup></ButtonGroup></td>
                </tr>     

  ))
  
}
</tbody>

              </table>
</Row>
</Container>


</>

)  
}

export default Search
