import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="nav">
      <ul className='naaaav'>
            <Link to="/"> <li className="brand_name"><span className="  borderrr">1<sup>+</sup></span> ONEPLUS</li> </Link>
            <Link to="/phone"> <li>Phone</li> </Link>
            <Link to="/tv"> <li>TV</li> </Link>
            <Link to="/audio"> <li>Audio</li> </Link>
            <Link to="/wearables"> <li>Wearables</li> </Link>
            <Link to="/accessories"> <li>Accessories</li> </Link>
            <Link to="/offers"> <li>Offers</li> </Link>
        </ul>
        <ul className='naaaav last'>
            <Link to="/store"> <li>Store</li> </Link>
            <Link to="/oneTopia"> <li>OneTopia</li> </Link>
            <Link to="/community"> <li>Community</li> </Link>
            <Link to="/support"> <li>Support</li> </Link>
            <Link to="/cart"> <li>cart</li> </Link>
        </ul>
    </nav>


    // <nav class="navbar navbar-expand-lg bg-white">
    //   <div class="container-fluid">
    //     <a class="navbar-brand brand_name" href="@">
    //       <span className="borderrr">1<sup>+</sup></span> ONEPLUS
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <Link to="/phone"><li>Phone</li></Link>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="@">
    //             TV
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="@">
    //             Audio
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="@">
    //             Wearables
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="@">
    //             Accessories
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="@">
    //             Offers
    //           </a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li class="nav-item">
    //             <a class="nav-link active" href="@">
    //               Store
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" href="@">
    //               OneTopia
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" href="@">
    //               Community 
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" href="@">
    //               Support    
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" href="@">
    //             Cart
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" href="@">
    //             Profile
    //             </a>
    //           </li>
    //         </ul>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
