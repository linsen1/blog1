'use client';
import React from 'react';
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import {auto} from "@popperjs/core";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface VideoPlayerProps{
    url:string,
    img:string
}

const VideoPlayer = ({url,img}:VideoPlayerProps) => {

    return (
     <>

             <ReactPlayer
                 url={url}
                 controls={true}
                 light = {img}

             />


     </>
    );
};

export default VideoPlayer;
