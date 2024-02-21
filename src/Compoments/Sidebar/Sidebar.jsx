import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../Assets/Product_Cart.svg';
import { SlNotebook } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <SlPlus className='text-normal'/>
            <p className="">Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <SlNotebook className='text-normal'/>
            <p className="">Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
