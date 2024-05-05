import React from 'react'
import './home.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
<div className='container mt-5'>
    <div className='row'>
<div className='col-md-4'>
<div className='d-flex justify-content-center m-2'>
<div className='icon_box text-center '>
        <FaPiggyBank />
        </div>
                    <div className='detail'>
                        <h3 className='colo'>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
</div>

<div className='d-flex justify-content-center m-2'>
<div className='icon_box text-center '>
<FaHeadphonesAlt />

        </div>
                    <div className='detail'>
                        <h3 className='colo'>24X7 support</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
</div>
<div className='d-flex justify-content-center m-2'>
<div className='icon_box text-center '>
<FaWallet />

        </div>
                    <div className='detail'>
                        <h3 className='colo'>money back</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
</div>
<div className='d-flex justify-content-center m-2'>
<div className='icon_box text-center '>
        <FaPiggyBank />
        </div>
                    <div className='detail'>
                        <h3 className='colo'>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
</div>


</div>

<div className='col-md-8'>
<footer class="bg-body-tertiary text-center text-lg-start">

  <div className="container p-4">
    <div className='logo text-center'>
    <img src='image/logo.webp' alt=''></img>
    <p className='m-3'>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
    </div>
    <div class="row mt-4">
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
        <h5 class="text-uppercase">Your Account</h5>

        <ul class="list-unstyled mb-0">
        <li>About us</li>
            <li>Account</li>
        <li>Payment</li>
            <li>sales</li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
        <h5 className="text-uppercase mb-0">products</h5>

        <ul class="list-unstyled">
        <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New product</li>
                            <li>old product</li>
        </ul>
      </div>
     
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
        <h5 class="text-uppercase">contact us</h5>

        <ul class="list-unstyled mb-0">
        <li>4005, Silver Business PointIndia</li>
                            <li>+(012)99999999</li>
                            <li>info@gmail.com</li>
        </ul>
      </div>
     
     
    </div>
  </div>

  
</footer>
</div>




    </div>
</div>





    </>
  )
}
