import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import "../styles/Home.css"
import mobileApp from "../assets/phone-app.webp";
import appleStore from "../assets/appstore_2x.webp";
import playStore from "../assets/playstore_2x.webp";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter1.png";
import instagram from "../assets/instagram.png";
import carTradeTech from "../assets/cartrade_tech.png";
import bikewale from "../assets/bikewale.png";
import carTrade from "../assets/cartrade.png";
import mobility from "../assets/mobility.png";
import carWale from "../assets/carwale.png";
import footerOlx from "../assets/footer-olx.png";
import play from "../assets/play.png";

function Home() {
  const [ products,setProducts ] = useState([]);
  const [isAdmin,setIsAdmin] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{

    const adninStatus = localStorage.getItem('is_admin') === 'true';
    setIsAdmin(adninStatus);
    
    axios.get('http://localhost:8000/users/prods/')
      .then((response)=>{
        setProducts(response.data)
      })
      .catch((error)=>{
        console.error('fetch errr',error)
        
      });
  },[])

  

  return (
    <>
    <Navbar />
      
      <div className="space"></div>
      <div className="products-wrapper">
        <div className="title-wrapper">
          <h2 className="products-title">Fresh recommendations</h2>
        </div>
        <ul class = "product-list-container">
          
          {products.map((product)=>(
            <li key={product.id}>
              <p className = "product-like-icon">&#9825;</p>
              <img src={product.images} alt="" />
              <div class = "product-item-content">
                <p className = "product-price">${ product.price }</p>
                <p className = "product-title">{ product.product_name }</p>
                <Link to={`/users/prods/${product.id}`} className = "product-link">
                    View Product details
                </Link>
              </div>
              
              
            </li>
          ))}
        </ul>
        <div className="load-more-btn-wrapper">
          <button className="load-more-btn">Load more</button>
        </div>
      </div>

      <div className="try-olx-app-wrapper">
        <div className="olx-app-img-wrapper">
          <img src={mobileApp} alt="" />
        </div>
        <div className="middle">
          <h2 className="try-olx-app">Try the olx app</h2>
          <p className="try-olx-para">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>
        <hr />
        <div className="end">
          <h3>Get your app today</h3>
          <div className="mobile-app-images">
            <img src={appleStore} alt="" width={130} />
            <img src={playStore} alt="" width={130} />
          </div>
        </div>
      </div>
      <div className="space-bottom"></div>
      <div className="footer-1">
        <div className="footer-1-links">
          <h3 className="footer-1-title">Popular Locatrions</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Kolkata</li>
            <li className="footer-1-listitem">Mumbai</li>
            <li className="footer-1-listitem">Chennai</li>
            <li className="footer-1-listitem">Pune</li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">Trending Locations</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Bhubaneshwar</li>
            <li className="footer-1-listitem">Hyderabad</li>
            <li className="footer-1-listitem">Chandigarh</li>
            <li className="footer-1-listitem">Nashik</li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">About Us</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Tech@OLX</li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">OLX</h3>
          <ul className="footer-1-list">
            <li className="footer-1-listitem">Blog</li>
            <li className="footer-1-listitem">Help</li>
            <li className="footer-1-listitem">Sitemap</li>
            <li className="footer-1-listitem">Legal & Privacy information</li>
            <li className="footer-1-listitem">
              Vulnerability Disclosure Program
            </li>
          </ul>
        </div>
        <div className="footer-1-links">
          <h3 className="footer-1-title">Follow Us</h3>
          <ul className="footer-1-list-social">
            <li className="footer-1-listitem">
              <img src={facebook} alt="" height={25} />
            </li>
            <li className="footer-1-listitem">
              <img src={twitter} alt="" height={25} />
            </li>
            <li className="footer-1-listitem">
              <img src={instagram} alt="" height={25} />
            </li>
            <li className="footer-1-listitem">
              <img src={play} alt="" height={25} />
            </li>
          </ul>
          <div className="footer-1-images">
            <img src={playStore} alt="" width={100} />
            <img src={appleStore} alt="" width={100} />
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div>
          <div className="footer-2-left">
            <img src={carTradeTech} alt="" height={100} />
          </div>
        </div>
        <hr />
        <div className="footer-2-right">
          <img src={footerOlx} alt="" height={80} />
          <img src={carWale} alt="" height={60} />
          <img src={bikewale} alt="" height={60} />
          <img src={mobility} alt="" height={60} />
          <img src={carTrade} alt="" height={60} />
        </div>
      </div>
      <div className="footer-3">
        <div>
              <span className="footer-3-text">Help - Sitemap</span>
        </div>
        <div>
              <span className="footer-3-text">All rights reserved © 2006-2024 OLX</span>
        </div>
      </div>
    </>
  )
}

export default Home