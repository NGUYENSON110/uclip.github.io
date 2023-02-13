import React, { useEffect, useState } from 'react';
import './detailsVideo.css';
import { HiHome, HiFire, HiBell, HiBookOpen } from 'react-icons/hi';
import { BiNetworkChart, BiArrowToBottom, BiLike, BiDislike, BiDownload, BiSave, BiChevronDown, BiDotsVerticalRounded } from "react-icons/bi";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";
import { useNavigate } from 'react-router-dom';

function DetailsVideo() {
  const [dataVideo, setDataVideo] = useState([]);
  const [video, setVideo] = useState([])
  const data = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://kakoakdev.ringme.vn/video-service/v1/social/list-comment`, {
        params: {
          msisdn: 123,
          timestamp: 123,
          security: 123,
          contentId: 407134,
          page: 0,
          size: 3,
        }
      });
      setDataVideo(result.data.data);

      console.log('222222222', data)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://kakoakdev.ringme.vn/video-service/v1/video/hot/new?msisdn=0349006629`, {
        params: {
          timestamp: 123,
          security: 123,
          page: 0,
          size: 5,
          lastHashId: 13,
        }

      });
      setVideo(result.data.data);
      // console.log('111111111', result.data.data);
      console.log('cx1zczx', video)
    };
    fetchData();
  }, []);

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

  console.log(useParams())
  return (
    <div>
      {/* Screen Video */}
      <div>
        <Video autoPlay loop className='play-video' >
          <source src={data.state.videoMedia} type="video/webm" />
        </Video>
      </div>

      {/* Tittle Video */}
      <div className='tittle-video-container'>
        <div> {data.state.channel.channelName}</div>
        <div className='tittle-video-views'> {data.state.totalViews} views
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



        {
          dataVideo.map((item, index) => (
            <div style={{ display: 'flex' }}>
              <div>
                <img src="https://image.vtc.vn/files/sonha/2016/07/09/_dsc0124-1258.png" className='profile-avatar' alt="" />
              </div>
              <div>
                <div className='comment-username'> {(item.name).substring(0,6)}
                  <div className='comment-username_time'>{moment(item.commentAt).startOf('hour').fromNow()}</div>
                </div>
                <div className='comment-content'>{item.content}</div>
              </div>
            </div>
          ))
        }

        <div className='line'></div>
        
        <div className="home-container_video">
        {/* <div className='home-contaier_text'>
          Maybe you like
        </div> */}
        <div className='home-banner_video'>

          {
            video.map((item, index) => (
              <div style={{ marginRight: '15px', marginTop: "15px" }}>
                <button style={{ border: 'none' }}
                  onClick={() => (
                    navigate('/detailsvideo', {
                      state: item
                    })
                  )}
                >
                  <div>
                    <img src={item.videoImage} className='img-video' alt="" />
                  </div>
                </button>


                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <div style={{ marginTop: '13px', marginLeft: '5px' }}>
                    <img src={item.channel.channelAvatar} className='img-avatar' alt="" />
                  </div>

                  <div style={{ display: 'row', marginTop: '13px', marginLeft: '-80px' }}>
                    <div className='home-video_name'>
                      {item.channel.channelName}
                    </div>
                    <div className='home-video_view'>
                      {item.totalViews} Views
                      <div className='home-video_time_upload'>{moment(item.timeupload).startOf('hour').fromNow()}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '13px' }}>
                    <BiDotsVerticalRounded size={23} />
                  </div>

                </div>

              </div>
            ))
          }

        </div>
      </div>

      </div>






    </div>
  )
}

export default DetailsVideo;