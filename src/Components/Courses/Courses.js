import React ,{ useState } from 'react';
import Card from '../Card/Card';
import Data from '../Data/Data';
import './Courses.css';

import Cart from '../Cart/Cart';



const Courses = () => {
  //const [course,setCourse] = useState(Data)
  //const first12 = Data.slice(0,12);
  //const [cart,setCart] = useState([]);
 const addCourse =()=>{
    console.log('added',Data);
    //const newCart = [...cart,course];
  //setCart(newCart);
  }

return (
 
        <>
        <div className='my-5'>
        <div className="text-center cart shadow">
                 <Cart></Cart>
                </div>
        <h1 className='text-center'>Our Courses</h1>
      </div>
      <div className="container-fluid mb-5">
      
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {
                     //course.map((crs)=> <Card courses={crs}></Card>)
                    Data.map((val,ind) => {
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