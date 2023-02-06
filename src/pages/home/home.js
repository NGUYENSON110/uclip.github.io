import React from 'react';
import './home.css';
import { Stack } from '@mui/material';

function home() {

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
    ,

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
    // {
    //   name: "Anh không đòi quà",
    //   image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    //   author: "Only C",
    //   view: "141",
    //   timeupload: "1 years ago"
    // }

  ]
  return (
    <div>
      <div className='home-banner_top'>
        {
          menuItem.map((item, index) => (
            <div className='home-banner-top_item'>
              <div>{item.name}</div>
            </div>
          ))
        }
      </div>

      <div className="home-container_video">
        <div className='home-contaier_text'>
          Maybe you like
        </div>
        <div className='home-banner_video'>
          <Stack direction="row" spacing={2} flexWrap="wrap">
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


          </Stack>
        </div>
      </div>

      <div className="home-container_video">
        <div className='home-contaier_text'>
          New update video
        </div>
        <div className='home-banner_video'>
          <Stack direction="row" spacing={2} flexWrap="wrap">
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


          </Stack>
        </div>
      </div>


      <div className="home-container_video">
        <div className='home-contaier_text'>
          Top Trending
        </div>
        <div className='home-banner_video'>
          <Stack direction="row" spacing={2} flexWrap="wrap">
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


          </Stack>
        </div>
      </div>


      <div className="home-container_video">
        <div className='home-contaier_text'>
          Maybe you like
        </div>
        <div className='home-banner_video'>
          <Stack direction="row" spacing={2} flexWrap="wrap">
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


          </Stack>
        </div>
      </div>

    </div>
  )
}

export default home