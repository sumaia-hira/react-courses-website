import React from 'react';


const Card = (props) => {
  
 return (
   <div className="col-md-4 col-10 mx-auto">
        <div className="card shadow rounded cards box mb-5">
                  <img src={props.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <p className="card-text">By {props.instructor}</p>
                      <p className="card-text">Rating:{props.rating}</p>
                      <p className="card-text">Price:${props.price}</p>
                      <button className="btn btn-primary"
                    onClick={()=>props.addCourse({name:props.name,price:props.price})}
                      >Enroll Now</button>
                  </div>
                  </div>
          </div>
 );
};

export default Card;