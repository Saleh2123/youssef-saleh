import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SimpleWebRTC from 'simplewebrtc';

const VideoChat = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const patient= useParams("patient");
  const doctor=useParams("doctor")
  let webrtc;

  useEffect(() => {
    webrtc = new SimpleWebRTC({
      localVideoEl: localVideoRef.current,
      remoteVideosEl: remoteVideoRef.current,
      autoRequestMedia: true,
    });

    webrtc.on('readyToCall', () => {
      webrtc.joinRoom(`${doctor}-${patient}`);
    });
    // Within your useEffect or WebRTC initialization code
webrtc.on('videoAdded', (video, peer) => {
    const remotes = remoteVideoRef.current;
    if (!remotes) return;
  
    const container = document.createElement('div');
    container.className = 'video-container';
    container.appendChild(video);
    remotes.appendChild(container);
  });
  

    return () => {
      webrtc.leaveRoom();
    };
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline muted />
      <div ref={remoteVideoRef} />
    </div>
  );
};

export default VideoChat;
