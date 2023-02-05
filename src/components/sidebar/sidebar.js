import React  from 'react'
import { HiHome, HiFire } from 'react-icons/hi';
import { BiNetworkChart } from "react-icons/bi";
import './sidebar.css';
import { NavLink } from 'react-router-dom';

function sidebar() {
 
  const menuItem = [
    {
      path: "/",
      name: "home",
      icon: <HiHome />
    },

    {
      path: "/popular",
      name: "popular",
      icon: <BiNetworkChart />
    },

    {
      path : "/suggest",
      name :"suggest",
      icon : <HiFire />
    },
  ]
  return (
    <div className='container'>
      <div className='sidebar'>

        <div className='top_section'>
          <h1 className='logo'>Logo</h1>
        </div>

        <div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link">
                <div className='icon'>{item.icon}</div>
                <div className='link_text'>{item.name}</div>
              </NavLink>
            ))
          }
        </div>
          {/* <div> {Children}</div> */}
      </div>
    </div>
  )
}

export default sidebar;