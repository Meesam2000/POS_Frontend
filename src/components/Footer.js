import '../bootstrap/bootstrap.min.css'

export const Footer = () => (

<footer className="text-center text-lg-start  text-muted" style={{backgroundColor:'#132F4C'}}>
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
  </section>
  
  <section className="">
    <div className="text-center text-md-start mt-5">
      
      <div className="row mt-3">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
            <i className="fas fa-gem me-3" ></i>GPOS
          </h6>
          <p >
            GPOS is point of sale developed by ejaz ahmad and aman asif.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
            Products
          </h6>
          <p>
            <a href="#" className="text-reset">Point of Sale</a>
          </p>
          <p>
            <a href="#" className="text-reset">Management System</a>
          </p>
          <p>
            <a href="#" className="text-reset">React Themes</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
            Useful links
          </h6>
          <p>
            <a href="/dashboard/home" className="text-reset">Home</a>
          </p>
          <p>
            <a href="/dashboard/addcategory" className="text-reset">Add Categories</a>
          </p>
          <p>
            <a href="#" className="text-reset">Add Product</a>
          </p>
          <p>
            <a href="/dashboard/profile" className="text-reset">Profile</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> Canal Road,Lahore</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            GPOS@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 92 305 2838928</p>
          <p><i className="fas fa-print me-3"></i> + 92 316 4006949</p>
        </div>
       
      </div>
  
    </div>
  </section>
  
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> GPOS.com</a>
  </div>
</footer>
)