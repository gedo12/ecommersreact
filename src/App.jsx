import React from 'react';
import {BrowserRouter ,Link}from'react-router-dom';
import { useState ,useEffect  } from 'react';
import Home from './Comp/Home';
import Nav from './Comp/Nav';
import Rout from './Comp/Rout';
import Homeproduct from './Comp/Home_product';
import Footer from './Comp/Footer';




export default function App() {
  // Add To cart
  const [cart, setCart] = useState([])



  const [search, setSearch] = useState('')


  const [shop, setShop] = useState(Homeproduct)


const Filter=(x)=>{
  const catefilter=Homeproduct.filter((product)=>{
    return product.cat===x
  })
  setShop(catefilter)
}
const allcate=()=>{
  setShop(Homeproduct)
}


const searchlengh=(search || []).length===0
const searchpro=()=>{

if(searchlengh){
  alert("Please Search Something !")

  setShop(Homeproduct)

}
else{
    const searchfilter=Homeproduct.filter((x)=>{
      return x.cat===search
    })
    setShop(searchfilter)
   }
}
//Add To cart

const  addtocard= (product) =>
{
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if(exist)
  {
    alert("This product is alleardy added in cart")
  }
  else
  {
    setCart([...cart, {...product, qty:1}])
    alert("Added To cart")
  }
}
 console.log(cart)


  return (
    <div>
      

<BrowserRouter>

<Nav search={search} setSearch={setSearch} searchpro={searchpro}/>
<Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcate={allcate} addtocard={addtocard}/>
<Footer/>
</BrowserRouter>


    </div>
  )
}
