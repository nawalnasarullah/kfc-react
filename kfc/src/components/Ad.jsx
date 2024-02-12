import React from 'react'

function Ad() {
  return (
    <>
  <div className="ad-wrapper">
    <div className="container">
      <div className="row">
        <div className="ad col-md-6 mt-4">
          <a href="">
            <img className="w-100" src="/images/ad-1.png" alt="" />
          </a>
        </div>
        <div className="ad col-md-6 mt-4">
          <a href="">
            <img className="w-100" src="/images/ad-2.png" alt="" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="ad col-md-6 mt-4">
          <a href="">
            <img className="w-100" src="/images/ad-3.jpg" alt="" />
          </a>
        </div>
        <div className="ad col-md-6 mt-4">
          <a href="">
            <img className="w-100" src="/images/ad-4.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* /.ad-wrapper */}
</>

  )
}

export default Ad