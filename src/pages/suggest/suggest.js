import React from 'react';
import './suggest.css';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


function suggest() {
  return (
    <div className='aaaa'>
        <Video autoPlay loop>
            <source src="http://125.234.170.241/routing-service/hls/kakoakvideo/26134294/67076297572/b7e0806d171b8941b84fac2dd22ec2a8/1675927319511/vcs_medias4/video/20230205/26134294/playlist.m3u8" type="video/webm" />
        </Video>
    </div>
  )
}

export default suggest