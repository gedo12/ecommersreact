import React, { useState ,useEffect } from 'react'

import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
import './home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Shop({shop,Filter,allcate,addtocard}) {
  useEffect(() => {
    AOS.init({duration:2000})
  
  }, [])
 // Toggle Product Detail

  const [showDetail, setShowDetail] = useState(false)
  // Detail Page Data
  const [detail, setDetail] = useState([])
  //Showing Detail Box
  const detailpage = (product) => 
  {
      const detaildata = ([{product}])
      const productdetail = detaildata[0]['product']
      // console.log(productdetail)
      setDetail(productdetail)
      setShowDetail(true)
  }
  const closedetail = () => 
  {
      setShowDetail(false)
  }


  return (
    <>
    {
        showDetail ? 
        <>
         {/* <div className='container'>
  <div className='col-lg-4 col-md-12'>
  <div className='product_detail'>
            <button className='close_btn'onClick={closedetail}><AiOutlineClose /></button>
            <div className='img_box'>
                    <img  src={detail.image} className='w-50' alt=''></img>
                </div>
               
        </div>
  </div>

<div className='col-lg-6 col-md-12'>
<div className='info text-black'>
                    <h4># {detail.cat} </h4>
                    <h2>{detail.Name}</h2>
                    <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                    <h3>${detail.price}</h3>
                    <button onClick={() =>addtocard (detail)}>Add To Cart</button>
                </div>
</div>

    </div>  */}
    <div className='product_detail'>
      <div className='row'>
      
      <div className='col-lg-6  col-md-6 '>
        <button className='close_btn'onClick={closedetail}><AiOutlineClose /></button>

        <div className='img_box'>
                    <img  src={detail.image} className='w-100' alt=''></img>
                </div>
        </div>

<div className=' col-lg-6 col-md-6 m'>
<div className='infoo text-black  p-5'>
                    <h4># {detail.cat} </h4>
                    <h2>{detail.Name}</h2>
                    <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                    <h3>${detail.price}</h3>
                    <button className='bty' onClick={() =>addtocard (detail)}>Add To Cart</button>
                </div>
</div>


      </div>
    </div>
    
        </>
        : null
    }



  
    <div className='container mt-5'>
        <div className='row'>
<div className='col-md-4'>
<h2 className=''># shop</h2>
<p className='fs-5 text-muted '>Home . shop</p>
<div className='card mx-5 'data-aos="fade-down">
<h3 className='bg-light-subtle p-2 fs-5 text-center '>allcategories</h3>
<ul className=' text-center list-unstyled'>
                            <li onClick={()=>allcate()}># All</li>
                            <li onClick={()=> Filter('tv')}># tv</li>
                            <li onClick={()=> Filter('laptop')}># laptop</li>
                            <li onClick={()=> Filter('watch')}># watch</li>
                            <li onClick={()=> Filter('seaker')}># speaker</li>
                            <li onClick={()=> Filter('electronics')}># electronics</li>
                            <li onClick={()=> Filter('headphone')}># headphone</li>
                            <li onClick={()=> Filter('phone')}># phone</li>
                        </ul>
</div>

<div className='mt-3 'data-aos="fade-up">
<img src='image/shop_left.avif' alt=''  className='w-100'></img>
  
</div>



</div>
<div className='col-md-8'>
<div className='img_box'data-aos="fade-down"g>
                        <img src='image/shop_top.webp' alt='' className='w-100 h-100 mt-5'></img>
</div>

<div className='row mt-5'>
    
{shop.map((curElm) => 
{
return(
<div className="col-sm-4">
<div className="thumb-wrapper mb-5 ">
  <div className="img-box  position-relative">
    <img src={curElm.image} alt="" className='w-100' />
    <div className="icons ">
<div className='mb-2'onClick={() => detailpage (curElm)} >    <AiFillEye /></div>
<div>    <AiFillHeart /></div>
      </div>
  </div>
  <div className="thumb-content text-center">
    <h4>{curElm.Name}</h4>
    <p class="item-price">${curElm.price} </p>
    
    <button className='bty' onClick={()=>addtocard(curElm)}>Addtocart</button>

  </div>						
</div>
 </div>
)
})
}

</div>




</div>

        </div>



    </div>
    
    
    
    </>
  )
}
