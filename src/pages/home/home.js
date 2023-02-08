import React, { useState } from 'react';
import './home.css';
import { Stack } from '@mui/material';
import { BiDotsVerticalRounded } from "react-icons/bi";




function Home() {
  const [name, setName] = useState("All");
  console.log("name", name)
  const menuItem = [
    {
      name: "All"
    },

    {
      name: "ASMR"
    },
    {
      name: "eating show"
    },
    {
      name: "mukbang"
    }


  ]

  const menuVideo = [
    {
      name: "Anh không đòi quà",
      image: "https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png",
      author: "Only C",
      view: "141",
      timeupload: "1 years ago"
    },
    {
      name: "Thu cuối",
      image: "https://iv1cdn.vnecdn.net/giaitri/images/web/2021/01/27/thu-cuoi-mr-t-1611762903.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=VyFRIxqBRu3guaU31cYm8Q",
      author: "Only C",
      view: "141",
      timeupload: "1 years ago"
    },
    {
      name: "Anh không đòi quà",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      author: "Only C",
      view: "141",
      timeupload: "1 years ago"
    }
    ,
    {
      name: "Anh không đòi quà",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      author: "Only C",
      view: "141",
      timeupload: "1 years ago"
    }
    ,
    {
      name: "Anh không đòi quà",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      author: "Only C",
      view: "141",
      timeupload: "1 years ago"
    },
    {
      name: "Anh không đòi quà",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      author: "Only C",
      view: "141",
      timeupload: "1 years ago"
    }

  ]
  return (
    <div>
      <div className='home-banner_top'>
        {
          menuItem.map((item, index) => (
            <div className='home-banner-top_item'>
              <button className='home-banner-top_item_name' style={{backgroundColor:item.name == name ? "#2DB742" : "#DADADA"}}
               onClick={() => { setName(item.name) }}>{item.name}</button>
            </div>
          ))
        }
      </div>

      <div className="home-container_video">
        <div className='home-contaier_text'>
          Maybe you like
        </div>
        <div className='home-banner_video'>

          {
            menuVideo.map((item, index) => (
              <div style={{ marginRight: '15px', marginTop: "15px" }}>
                <div>
                  <img src={item.image} className='img-video' alt="" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ marginTop: '13px', marginLeft: '5px' }}>
                    <img src={item.image} className='img-avatar' alt="" />
                  </div>
                  <div style={{ display: 'row', marginTop: '13px', marginLeft: '-120px' }}>
                    <div className='home-video_name'>
                      {item.name}
                    </div>
                    <div className='home-video_view'>
                      {item.view} Views
                      <div className='home-video_time_upload'> {item.timeupload}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '13px'}}>
                    <BiDotsVerticalRounded size={23} />
                  </div>

                </div>

              </div>
            ))
          }

        </div>
      </div>

      <div className="home-container_video">
        <div className='home-contaier_text'>
          New update video
        </div>
        <div className='home-banner_video'>

          {
            menuVideo.map((item, index) => (
              <div>
                <div>
                  <img src={item.image} className='img-video' alt="" />
                </div>

                <div className='home-video_name'>
                  {item.name}
                </div>

                <div className='home-video_author'>
                  {item.author}
                </div>

                <div className='home-video_view'>
                  {item.view} Views
                  <div className='home-video_time_upload'> {item.timeupload}</div>
                </div>

              </div>
            ))
          }



        </div>
      </div>


      <div className="home-container_video">
        <div className='home-contaier_text'>
          Top Trending
        </div>
        <div className='home-banner_video'>

          {
            menuVideo.map((item, index) => (
              <div>
                <div>
                  <img src={item.image} className='img-video' alt="" />
                </div>

                <div className='home-video_name'>
                  {item.name}
                </div>

                <div className='home-video_author'>
                  {item.author}
                </div>

                <div className='home-video_view'>
                  {item.view} Views
                  <div className='home-video_time_upload'> {item.timeupload}</div>
                </div>

              </div>
            ))
          }



        </div>
      </div>


      <div className="home-container_video">
        <div className='home-contaier_text'>
          Maybe you like
        </div>
        <div className='home-banner_video'>

          {
            menuVideo.map((item, index) => (
              <div>
                <div>
                  <img src={item.image} className='img-video' alt="" />
                </div>

                <div className='home-video_name'>
                  {item.name}
                </div>

                <div className='home-video_author'>
                  {item.author}
                </div>

                <div className='home-video_view'>
                  {item.view} Views
                  <div className='home-video_time_upload'> {item.timeupload}</div>
                </div>

              </div>
            ))
          }



        </div>
      </div>

    </div>
  )
}

export default Home;