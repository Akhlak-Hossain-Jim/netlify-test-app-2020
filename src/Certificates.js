import React from 'react';
import { Link } from 'react-router-dom';
import c1 from './media/Certificates/c-1.webp';
import c2 from './media/Certificates/c-2.webp';
import c3 from './media/Certificates/c-3.webp';
import c4 from './media/Certificates/c-4.webp';
import c5 from './media/Certificates/c-5.webp';
import c6 from './media/Certificates/c-6.webp';
import c7 from './media/Certificates/c-7.webp';
import c8 from './media/Certificates/c-8.webp';
import c9 from './media/Certificates/c-9.webp';
import c10 from './media/Certificates/c-10.webp';
import c11 from './media/Certificates/c-11.webp';
import c12 from './media/Certificates/c-12.webp';
import c13 from './media/Certificates/c-13.webp';
import c14 from './media/Certificates/c-14.webp';
import c15 from './media/Certificates/c-15.webp';
import c16 from './media/Certificates/c-16.webp';
import c17 from './media/Certificates/c-17.webp';
import c18 from './media/Certificates/c-18.webp';
import c19 from './media/Certificates/c-19.webp';
import c20 from './media/Certificates/c-20.webp';
import c21 from './media/Certificates/c-21.webp';
import './css/App.css';


function Certificates() {

    return (
        <div className='certificates'>
            <header className="bakto-rot">
                <Link to="/" id='wrot'>Jim | <Link to='/about'>About</Link> &gt; Certificates</Link>
            </header>
            
            <div className='navc'>
                <h1>Certificates</h1>
                <div  className='secondary-nav'>
                    <a href='#tech'>Tech</a>
                    <a href='#co'>Co-curriculam &amp; Others</a>
                </div> 
            </div>
            
            <main className="c-container">
                <div className="cert-t" id="tech"><h1>Tech Related Certificates</h1></div>
                <div className="cert col-c row-1" > <img height="170px" src={c3} alt="" /></div>
                <div className="cert col1-2 row-2" ><img height="170px" src={c13} alt="" /></div>
                <div className="cert col2-2 row-2" ><img height="170px" src={c2} alt="" /></div>
                <div className="cert col1-3 row-3" ><img height="170px" src={c11} alt="" /></div>
                <div className="cert col2-3 row-3" ><img height="170px" src={c8} alt="" /></div>
                <div className="cert col3-3 row-3" ><img height="170px" src={c18} alt="" /></div>
                <div className="cert col1-2 row-4" ><img height="170px" src={c15} alt="" /></div>
                <div className="cert col2-2 row-4" ><img height="170px" src={c14} alt="" /></div>
                <div className="cert col-c row-5" > <img height="170px" src={c16 }alt="" /></div>
                <div className="cert col-c row-6" > <img height="170px" src={c20} alt="" /></div>
                <div className="cert col1-2 row-7" ><img height="170px" src={c21} alt="" /></div>
                <div className="cert col2-2 row-7" ><img height="170px" src={c17} alt="" /></div>
                <div className="cert-t head-2" id="co"><h1> Other Professional Skills</h1></div>
                <div className="cert col1-3 row-8" ><img height="170px" src={c5} alt="" /></div>
                <div className="cert col2-3 row-8" ><img height="170px" src={c1} alt="" /></div>
                <div className="cert col3-3 row-8" ><img height="170px" src={c12} alt="" /></div>
                <div className="cert col1-2 row-9" ><img height="170px" src={c4} alt="" /></div>
                <div className="cert col2-2 row-9" ><img height="170px" src={c6} alt="" /></div>
                <div className="cert col-c row-10" ><img height="170px" src={c7} alt="" /></div>
                <div className="cert col-c row-11" ><img height="170px" src={c10} alt="" /></div>
                <div className="cert col1-2 row-12" ><img height="170px" src={c19} alt="" /></div>
                <div className="cert col2-2 row-12" ><img height="170px" src={c9} alt="" /></div>
            </main>
            <div className="space-c"></div>
        </div>
    )
}

export default Certificates
