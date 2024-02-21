import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../Assets/Product_Cart.svg'
import product_list_icon from '../../Assets/product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p className="">Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={product_list_icon} alt="" />
            <p className="">Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar