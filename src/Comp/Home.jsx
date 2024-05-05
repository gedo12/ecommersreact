import React from 'react'
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Homeproduct from './Home_product';
import {  AiOutlineClose} from 'react-icons/ai';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillEye, AiFillHeart , AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
import './home.css'
export default function Home({addtocard}) {
  // animtion
useEffect(() => {
  AOS.init({duration:2000})

}, [])


// slider
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};





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










    // Product category

  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])



  const [trendingproduct, setTrendingproduct] = useState(Homeproduct)
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingproduct(filterproduct)
  }
  //All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingproduct(Homeproduct)
  }

  const productcategory = () => 
  {
    // New Product
    const newcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    // Top Product
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
 

  useEffect(() => {
    productcategory()
    
  }, [])
  

  return (

    <> {
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







<div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="image/home4-slider-.jpg" class="d-block w-100 h-100 c-img" alt="Slide 1" />
        <div class="carousel-caption top-0 mt-4">
        <p class="text-uppercase fs-3 slide-left mt-5">The season has arrived</p>
          <p class="display-1 fw-bolder slide-left mt-5  text-capitalize">3 available tours</p>
                         <Link to='/shop' className='linkk slide-left'>Shop Now</Link>


        </div>
      </div>
      <div class="carousel-item c-item">
      <img src="image/home-1-slider-3-min.jpg" class="d-block w-100 c-img" alt="Slide 1" />

        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 slide-left mt-5">The season has arrived</p>
          <p class="display-1 fw-bolder slide-left mt-5  text-capitalize">3 available tours</p>
                         <Link to='/shop' className='linkk slide-left'>Shop Now</Link>

        </div>
      </div>
      <div class="carousel-item c-item">
      <img src="image/slider.jpg" class="d-block w-100 c-img" alt="Slide 1" />

        <div class="carousel-caption top-0 mt-4">
          <p class="text-uppercase fs-3 slide-left mt-5">Destination activities</p>
          <p class="display-1 mt-5 fw-bolder slide-left text-capitalize">Go glacier hiking</p>
          <Link to='/shop' className='linkk slide-left'>Shop Now</Link>

        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


{/* <div class="bg-image">
  <div class="mask gradient-custom">
    <div class="p px-5 h-100">
    <h2 className='slide-left '>Apple Watch</h2>
                <p className='slide-left'>30% off at your first odder</p>
                <Link to='/shop' className='link slide-left'>Shop Now</Link>
    </div>
  </div>
</div> */}

{/* <div className="bg-image p-5  shadow-1-strong rounded mb-5 text-white">
<div className='zindex'>
<div>
<h3 className='slide-left '>silver aluminum</h3>
                <h2 className='slide-left '>Apple Watch</h2>
                <p className='slide-left'>30% off at your first odder</p>
                <Link to='/shop' className='link slide-left'>Shop Now</Link>
</div>
</div>
</div> */}

<section>
  <div className='container mt-5'>
  
<div className='row'>

  <div className='col-lg-8 border'>
 

  <div className='heading d-lg-flex m-3  bg-muted'>
    <h2  className='mb-5'onClick={() => allTrendingProduct ()}>trendingproduct</h2>
    <div className=' just'>
    <h3 className='h5 mx-lg-3' onClick={()=> filtercate('new')}>New</h3>
    <h3 className='h5 mx-lg-3' onClick={()=> filtercate('featured')}>Featured</h3>
    <h3 className='h5  mx-lg-3' onClick={()=> filtercate('top')}>topselling</h3>

    </div>
    </div>
<div className='product container '>
<div className='row justify-content-center g-3'>
{trendingproduct.map((x)=>

<div className="col-sm-4">
<div className="thumb-wrapper ">
  <div className="img-box position-relative">
    <img src={x.image} alt="" className='w-100' />
    <div className="icons ">
<div className='mb-2' onClick={() => detailpage (x)}>    <AiFillEye /></div>
<div>    <AiFillHeart /></div>
      </div>
  </div>
  <div className="thumb-content text-center">
    <h4>{x.Name}</h4>
    <p class="item-price">${x.price} </p>
    
    <button className='bty'onClick={()=>addtocard(x)}>Addtocart</button>

  </div>						
</div>

</div>

)}
</div>



</div>






  </div>


  <div className='col-lg-4'>
<div className='container'>

<div className='card-1'  data-aos="fade-down">
<div className="thumb-wrapper text-center ">
  <h4 className='bg-secondary-subtle p-3 text-uppercase'>our testmonial</h4>
  <div className="">

    <img src="image/T1.avif" alt="" className='p-5' />
  
  </div>
  <div className="thumb-content text-center">
  <h3>stephan robot</h3>
  <h4 className='te'>web designer</h4>
  <p>Duis faucibus enim vitae nunc molestie, nec 
  facilisis arcu pulvinar nullam
  mattisr nullam mattis.</p>
    

  </div>						
</div>

<div className='card-1 mt-4'data-aos="fade-up">
<div className="thumb-wrapper text-center ">
  <h4 className=' p-3 text-uppercase'>newsletter</h4>
  <p className='text-body-tertiary'>join our malling list</p>
  <div className="thumb-content text-center">
  <input type='email' placeholder='E-mail' autoComplete='off' className='py-2'></input>
  <button className='bty mt-4'>subscribe</button>

  <div className='d-flex justify-content-center align-content-center p-4'>
  <div className='ico'>
                        <BiLogoFacebook />
                      </div>
                      <div className='ico'>
                        <BiLogoTwitter />
                      </div>
                      <div className='ico'>
                        <BiLogoInstagram />
                      </div>
                      <div className='ico'>
                        <BiLogoYoutube />
                      </div>


  </div>
    

  </div>						
</div>
</div>

</div>




  </div>
 
</div>
</div>
  </div>
</section>







<section className='mt-5 mb-5'>
  <div className='container'>
    <div className='row'>
    <div className='bg col-md-6 mb-2 'data-aos="fade-down">
  <div className='position-relative' style={{backgroundColor:"#f1f4f9"}}>
  <div className='positio'>
<p>Enjoy</p>
<p>With</p>
<h4>Earphone</h4>
<button type="button" class="bty">Browse</button>

  </div>
  <img src="image/home-2-banner-1.jpg" className='text-center W-100' alt="" />

  </div>

</div>
<div className='col-md-6 my-2 'data-aos="fade-down">
<div className='bg position-relative' style={{backgroundColor:"#f1f4f9"}}>
  <div className='positio'>
<p>Enjoy</p>
<p>With</p>
<h4>Earphone</h4>
<button type="button" class="bty">Browse</button>

  </div>
  <img src="image/home-2-banner-2.jpg" className='text-center W-100' alt="" />

  </div>
</div>
<div className='col-md-6 my-2 'data-aos="fade-up">
<div className='bg position-relative' style={{backgroundColor:"#f1f4f9"}}>
  <div className='positio'>
<p>Enjoy</p>
<p>With</p>
<h4>Earphone</h4>
<button type="button" class="bty">Browse</button>

  </div>
  <img src="image/home-2-banner-3.jpg" className='text-center W-100' alt="" />

  </div>
</div>
    </div>

  </div>

</section>













<section className='mt-5'>
<div className='container'>
 <Slider {...settings}>
      {trendingproduct.map((x)=>

<div className="col-sm-6">
<div className="thumb-wrapper mx-2 ">
  <div className="img-box position-relative">
    <img src={x.image} alt="" className='w-100' />
    <div className="icons ">
<div className='mb-2' onClick={() => detailpage (x)}>    <AiFillEye /></div>
<div>    <AiFillHeart /></div>
      </div>
  </div>
  <div className="thumb-content text-center">
    <h4>{x.Name}</h4>
    <p class="item-price">${x.price} </p>
    
    <button className='bty'onClick={()=>addtocard(x)}>Addtocart</button>

  </div>						
</div>

</div>

)} 
      </Slider>
</div>
</section>


</>
  )
}
