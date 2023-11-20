import React from 'react'

function Footer() {
  return (
    <>
    <div className='container-fluid footer text-left'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='img '><img src={require('../src/img/logo-footer.jpg')} height='22px' alt='img' />
          <p className='py-4'>Itawa is a responsive real estate landing page template.</p>
       </div>
        </div>
        <div className='col-lg-4 contact'>
<h5 className='footer_title'>Contact Us</h5>
<ul>
 <li><i class="fa-solid fa-location-pin"></i> 123 Business Centre London SW1A 1AA</li> 
  <li> <i class="fa-sharp fa-solid fa-phone"></i>+1 0000 000 000</li>
  <li><i class="fa-light fa-envelope"></i> info@businessname.com</li>
 
</ul>

        </div>
        <div className='col-lg-4 follow'>
<h5 className='footer_title'>Follow Us</h5>
<ul>
  <li><i className='fa fa-facebook'/></li>
  <li><i className="fa fa-twitter"/></li>
  <li><i className="fa fa-flickr"/></li>
  <li><i className="fa fa-instagram"/></li>
</ul>
        </div>
      </div>
     
    </div>

    <div className='copyright text-center'>
    <p>Copyright © 2021-2022 Itawa. All rights reserved. Template By Rajan</p>
    </div>
    </>
  )
}

export default Footer