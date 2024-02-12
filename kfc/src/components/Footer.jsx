import React from 'react'

function Footer() {
  return (
<>
  <footer className="footer pt-5 mt-5">
    <div className="container">
      <div className="social-container">
        <img src="/images/logo.png" alt="" />
        <div className="social-icons">
          <a style={{ color: "red" }} href="">
            <i className="fa-brands fa-youtube" />
          </a>
          <a style={{ color: "black" }} href="">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="">
            <i className="fa-brands fa-facebook" />
          </a>
        </div>
      </div>
      {/* /.social-container */}
      <div className="row contact-us">
        <div className="col-md-3">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Mitao Bhook</a>
            </li>
            <li>
              <a href="">Mitao Bhook - Scholarship</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Mitao Bhook</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <a href="">
                <img src="/images/apple-logo.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/google-logo.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="powered-by mt-4 d-flex justify-content-between align-items-end">
        <h6 className="m-0">2023 KFC. All rights reserved</h6>
        <div>
          <h1>Powered By</h1>
          <a href="">SimpleX Technology Solutions</a>
        </div>
      </div>
    </div>
    {/* /.container */}
  </footer>
  {/* /.footer */}
</>

  )
}

export default Footer