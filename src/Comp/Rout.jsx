import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'
export default function Rout({shop,Filter,allcate,addtocard ,cart, setCart}) {
  return (
    <>
        
        <Routes>

<Route path='/' element={<Home addtocard={addtocard} />}/>
<Route path='Shop' element={<Shop shop={shop} Filter={Filter}allcate={allcate} addtocard={addtocard} />}/>
<Route path='Cart' element={<Cart cart={cart} setCart={setCart}/>}/>
<Route path='Contact' element={<Contact/>}/>

        </Routes>
        
        
        
        </>
  )
}
