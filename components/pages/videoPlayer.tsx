'use client';
import React from 'react';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface VideoPlayerProps{
    url:string,
    img:string
}

const VideoPlayer = ({url,img}:VideoPlayerProps) => {

    return (
     <>
         <div>
             <ReactPlayer
                 url={url}
                 controls={true}
                 light = {img}
             />
         </div>

     </>
    );
};

export default VideoPlayer;
