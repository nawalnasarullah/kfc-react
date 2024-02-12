import React from 'react'

function Card({card}) {
  return (
    <div className="col-lg-3 col-md-4 col-6">
          <a href="" style={{ textDecoration: "none" }}>
            <div className="item-card-wrapper">
              <div className="red-box">
                <span />
                <span />
                <span />
              </div>
              <div className="red-heart">
                <span>
                  <i className="fa-regular fa-heart" />
                </span>
              </div>
              <div className="img-pt">
                <img
                  className="w-100"
                  src={card.image}
                  alt=""
                />
              </div>
              <div className="body-pt">
                <h5>{card.title}</h5>
                <p>{card.description}</p>
                <h4>{card.price}</h4>
                <div className="price-label">
                  <button>
                    <i className="fa-solid fa-plus" />
                    Add to bucket
                  </button>
                </div>
              </div>
            </div>
          </a>
    </div>
  )
}

export default Card