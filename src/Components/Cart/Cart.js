import React from 'react';

const Cart = (props) => {
    const course = props.course;
    const total = course.reduce((total,course) => total +course.price,0)
    
    return (
        <div>
             <h2>Your Cart</h2>
         <h5>Enrolled Courses:{course.length}</h5>
                    <h5>Total Price:{total}</h5>
        </div>
    );
};

export default Cart;