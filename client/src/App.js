import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Addproduct from './screens/Addproduct'
import Search from './screens/Search.jsx'
import editproduct from './screens/Editproduct'
import productDetails from './screens/ProductDetails'
import Showproduct from './screens/ShowProduct.jsx'

const App=()=>{
  return(
  <Router>
    <Routes>
      <Route path='/addProduct' Component={Addproduct}/>
      <Route path='/' Component={Showproduct}/>
      <Route path='/product/edit/:id' Component={editproduct}/>
      <Route path='/product/:id' Component={productDetails}/>
    <Route path='/search' Component={Search}/>
    </Routes>
  </Router>
)  
}

export default App