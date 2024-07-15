import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h2>Sidebar</h2>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar;
