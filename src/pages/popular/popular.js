import React from 'react';
import './popular.css';
import { HiHome, HiFire, HiBell, HiBookOpen } from 'react-icons/hi';
import { BiNetworkChart, BiArrowToBottom, BiLike, BiDislike, BiDownload, BiSave, BiChevronDown } from "react-icons/bi";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

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
      <Video autoPlay loop>
        <source src="http://125.234.170.241/routing-service/hls/kakoakvideo/26134294/67076297572/b7e0806d171b8941b84fac2dd22ec2a8/1675927319511/vcs_medias4/video/20230205/26134294/playlist.m3u8" type="video/webm" />
      </Video>
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      {/* Comment */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='comment-text'>Comment 149</div>
          <div className='comment-icon'><BiChevronDown size={26} /></div>

        </div>
        {/* Input comment*/}
        <div style={{ display: 'flex' }}>
          <div>
            <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='profile-avatar' alt="" />
          </div>
          <div className='comment-input'>
            <input placeholder='Add a public comment' className='comment-input_details' />
          </div>
        </div>



        <div style={{ display: 'flex' }}>
          <div>
            <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='profile-avatar' alt="" />
          </div>
          <div>
            <div className='comment-username'>username
              <div className='comment-username_time'>8months</div>
            </div>
            <div className='comment-content'>content comment</div>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div>
            <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='profile-avatar' alt="" />
          </div>
          <div>
            <div className='comment-username'>username
              <div className='comment-username_time'>8months</div>
            </div>
            <div className='comment-content'>content comment</div>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: '15px' }}>
          <div>
            <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='profile-avatar' alt="" />
          </div>
          <div>
            <div className='comment-username'>username
              <div className='comment-username_time'>8months</div>
            </div>
            <div className='comment-content'>content comment</div>
          </div>
        </div>
      </div>






    </div>
  )
}

export default popular;