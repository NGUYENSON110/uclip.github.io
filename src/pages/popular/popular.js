import React from 'react';
import './popular.css';
import { HiHome, HiFire, HiBell, HiBookOpen } from 'react-icons/hi';
import { BiNetworkChart, BiArrowToBottom, BiLike, BiDislike, BiDownload, BiSave } from "react-icons/bi";

function popular() {
  const menuItem = [
    {

      name: "24,6k",
      icon: <BiArrowToBottom size={24} />
    },

    {

      name: "65",
      icon: <BiLike size={24} />
    },

    {

      name: "share",
      icon: <BiDislike size={24} />
    },

    {

      name: "Download",
      icon: <BiDownload size={24} />
    },

    {

      name: "Save",
      icon: <BiSave size={24} />
    },
  ]
  return (
    <div>
      {/* Screen Video */}
      <div>
        <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='play-video' alt="" />
      </div>
      {/* Tittle Video */}
      <div className='tittle-video-container'>
        <div> Em đòi quà</div>
        <div className='tittle-video-views'> 3,68 views
          <div className='tittle-video-date'> 1/10/2000</div>
        </div>
      </div>

      {/* Banner like, unlike */}
      <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
        {
          menuItem.map((item, index) => (
            <div className='banner'>
              <div className='banner-icon'>{item.icon}</div>
              <div className='banner-name'>{item.name}</div>
            </div>
          ))
        }
      </div>

      <div className='line'></div>
      {/* profile */}
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
          <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='profile-avatar' alt="" />
        </div>
        <div className='profile-channel'>
          <div className='profile-channel-name'>Voice of Books</div>
          <div className='profile-channel-sub'>289K subscibe</div>
        </div>
        <div className='profile-button-sub'>
          <button className='profile-button-sub_text'>SUBSCRIBE</button>
        </div>

          
      </div>

      <div className='line'></div>
    </div>
  )
}

export default popular;