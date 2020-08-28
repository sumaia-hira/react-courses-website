import React from 'react';
import img from '../images/header.png';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
       <section className='d-flex align-items-center header'>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-10 mx-auto">
                   <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>Welcome</h1>
                    <h2>We are the team of expert developers</h2>
                    <div className="mt-3">
                        <Link className='btn-get-started'>Get started</Link>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={img} className='img-fluid animated' alt=""/>
                    </div>
                    </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Home;