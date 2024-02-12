import React from 'react'


function Item({item}) {
  return (
    <>
    <div className="item">
          <a href="" style={{ textDecoration: "none" }}>
            <div className="card-wrapper">
              <img
                className="w-100"
                src={item.image}
                alt="Card Image"
              />
              <h6>{item.title}</h6>
            </div>
          </a>
        </div>
    </>
  )
}

export default Item