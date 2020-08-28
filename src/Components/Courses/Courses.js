import React ,{ useState } from 'react';
import Card from '../Card/Card';
import Data from '../Data/Data';
import './Courses.css';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [course,setCourse] = useState(Data);
    const [cart,setCart] = useState([]);
 const addCourse =(course)=>{
    const newCart = [...cart,course];
  setCart(newCart);
  }
return (
 <>
   <div className='my-5'>
        <div className="text-center cart shadow">
            <Cart course={cart}></Cart>
                </div>
        <h1 className='text-center mt-5'>Our Courses</h1>
      </div>
      <div className="container-fluid mb-5">
      <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {
               course.map((val,ind) => {
                      return <Card key={ind} img={val.img} name={val.name} addCourse ={addCourse} instructor={val.instructor} rating={val.rating} price={val.price} />
                    })
                  }
                </div>
          </div>
        </div>
      </div>
      </>  
    );
};

export default Courses;