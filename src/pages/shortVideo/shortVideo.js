import React, { useEffect, useState } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import axios from 'axios';
import './shortVideo.css';
import { SlLike, SlDislike } from "react-icons/sl";

function ShortVideo() {
  const [video, setVideo] = useState([])
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
      console.log('cx1zczx', video)
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginTop: '58px' }}>
      {
        video.map((item, index) => (
          <div style={{position:'relative'}}>
            <Video autoPlay={true} loop muted className="play-video-short"
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
              <source src={item.videoMedia} type="video/webm" />
            </Video>
            {/* <div className='short-video_button_like'>
              <SlLike size={25}/>
            </div>
            <div>
              <SlDislike size={26}/>
            </div> */}
          </div>

        ))
      }

    </div>
  )
}

export default ShortVideo;