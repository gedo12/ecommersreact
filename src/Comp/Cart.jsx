import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
import './home.css'

export default function Cart({cart, setCart}) {

 // Increase Quantity of cart product
 const incqty = (product) => 
 {
   const exist = cart.find((x) => 
   {
     return x.id === product.id
   })
   setCart(cart.map((curElm) => 
   {
     return curElm.id === product.id ? { ...exist, qty: exist.qty + 1} : curElm
   }))
 }
// decrese Quantity of cart product
const decqty = (product) => 
{
  const exist = cart.find((x) => 
  {
    return x.id === product.id
  })
  setCart(cart.map((curElm) => 
  {
    return curElm.id === product.id ? {...exist ,qty: exist.qty - 1}: curElm
  }))
}
//Removing cart product
const removeproduct = (product) => 
{
  const exist = cart.find((x) => 
  {
    return x.id === product.id
  })
  if(exist.qty > 0)
  {
    setCart(cart.filter((curElm) => 
    {
      return curElm.id !== product.id
    }))
  }
}

const total = cart.reduce((price, item) => price + item.qty * item.price, 0)


  return (
     
    
    <>


 <div class="px-4 px-lg-0">
  <div class="container text-white py-5 text-center">
   
  </div>

  <div class="pb-5">
    <div class="container">

    {
            cart.length === 0 && 
            <>
            <div className='empty_cart text-center mt-5'>
                <h2>Your Shopping cart is empty</h2>
                <Link to='/shop'><button className='bty'>Shop Now</button></Link>
            </div>
            </>
        }


    <h3>#cart</h3>

      <div class="row">
        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

          <div class="table-responsive">
            <table class="table">
              <thead className='border bg-light'>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase mx-5">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase mx-5">Remove</div>
                  </th>
                </tr>
              </thead>
              {cart.map((curElm)=>
             <tbody className='tr'>
             <tr >
               <th scope="row" class="border-0">
                 <div class="p-2">
               <img src={curElm.image} class="img-fluid rounded shadow-sm w-100"/>
                   <div class="ml-3 d-inline-block align-middle">
                     <h5 class="mb-0"> 
                    
                   
                     </h5>
                   </div>
                 </div>
               </th>
               <td>
               <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                 <p>Price: ${curElm.price}</p>
                    <p>Total: {curElm.price * curElm.qty}</p></td>
               <td class="border-0 align-middle"><strong>
                
               <div className='quantity pt-5 px-4'>
                      <button onClick={() => incqty (curElm)}>+</button>
                      <input type='number' value={curElm.qty} ></input>
                      <button onClick={() => decqty (curElm)}>-</button></div></strong>
                      
                      </td>
               <td class="border-0 align-middle"><strong> <div className='iconm '>
        <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                    </div></strong></td>
             </tr>
             
             
           </tbody>
            
            )}
             
            </table>

 <div className='bottom'>
          {
            cart.length > 0 && 
            <>
            <div className='Total'>
              <h4 className='colo'>Sub Total: ${total}</h4>
            </div>
            <button className='bty'>checkout</button>
            </>
          }
        </div>



          </div>
        </div>
      </div>

      
    </div>
  </div>


 
</div>

    </>
  )
}
