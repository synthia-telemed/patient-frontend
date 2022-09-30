import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { useLocation } from "react-router-dom";

const VideoCallPage = () => {
  const [roomID, setRoomID] = useState("");
  const [token, setToken] = useState("");
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const { state } = useLocation();

  const socket = useRef();
  const localVideo = useRef();
  const remoteVideo = useRef();

  const onStartPeering = (isInitiator) => {
    console.log("got start-peering", isInitiator);
    const peer = new Peer({
      stream: localVideo.current.srcObject,
      initiator: isInitiator,
    });
    peer.on("signal", (data) => {
      socket.current.emit("signal", data);
    });
    peer.on("stream", (stream) => {
      console.log("got stream");
      remoteVideo.current.srcObject = stream;
    });
    peer.on("connect", () => {
      console.log("Peer connected");
    });

    socket.current.on("signal", (data) => {
      peer.signal(data);
    });
    socket.current.on("room-closed", () => {
      console.log("Closing the room");
      if (remoteVideo.current.srcObject)
        stopMediaStream(remoteVideo.current.srcObject);
      if (localVideo.current.srcObject)
        stopMediaStream(localVideo.current.srcObject);
    });
  };

  const stopMediaStream = (stream) => {
    stream.getAudioTracks().forEach((track) => track.stop());
    stream.getVideoTracks().forEach((track) => track.stop());
  };

  // This function should be called in useEffect
  const onEnterRoom = ({ roomID, jwtToken }) => {
    socket.current = io(process.env.REACT_APP_SOCKET_SERVER_ENDPOINT, {
      auth: { token: `Bearer ${jwtToken}` },
    });
    socket.current.emit("join-room", roomID);
    socket.current.on("start-peering", onStartPeering);
  };

  useEffect(() => {
    requestMediaDevice()
      .then(() => {
        console.log("success get media device");
        onEnterRoom({
          roomID: state.roomID,
          jwtToken:
            "eyJhbGciOiJIUzI1NiJ9.o08uuVgZfcs5faXObysrGSwxKDOGWnyTrLlP9r74BR9GcEnw5ocSIb6uyk6F3zssoNUkaYu9pXpVMzr5mpB2gVAe1GwgdZiaAXf4DnHAMKQBrrRXqEFEdE4R0uBTb0pNLj399w1RngurNZ3SmN9oz6w_w4KjdZGthpyeWPv5jr0XTnTy-whYQpkyKurAu9OuKOocMyU.lqJ5ON4xj9bZSgJTADUM7qvz7YCW7TCSL1xHuhEJMp4",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const requestMediaDevice = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    localVideo.current.srcObject = stream;
    setIsCameraOn(true);
    setIsMicOn(true);
  };

  const onToggleMic = async () => {
    if (!localVideo.current) await requestMediaDevice();
    console.log("audio", localVideo.current.srcObject.getAudioTracks());
    localVideo.current.srcObject.getAudioTracks()[0].enabled = !isMicOn;
    setIsMicOn(!isMicOn);
  };

  const onToggleCamera = async () => {
    if (!localVideo.current) await requestMediaDevice();
    localVideo.current.srcObject.getVideoTracks()[0].enabled = !isCameraOn;
    setIsCameraOn(!isCameraOn);
  };

  return (
    <div className="h-screen w-screen">
      <video
        className="absolute top-[5%] right-[10%] w-[120px] h-[200px] object-cover z-10"
        playsInline
        autoPlay
        ref={localVideo}
        muted
      ></video>
      <video
        className="absolute top-[0%] right-[0%] w-screen h-screen object-cover"
        playsInline
        autoPlay
        ref={remoteVideo}
      ></video>
      <div className="flex justify-between absolute w-[244px] top-[80%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] ">
        <button
          onClick={onToggleCamera}
          className="bg-[#131517A1] rounded-[32px] w-[48px] h-[48px] backdrop-blur-[3px]"
        >
          {isCameraOn ? "Close Camera" : "Open Camera"}
        </button>
        <button
          onClick={onToggleMic}
          className="bg-[#131517A1] rounded-[32px] w-[48px] h-[48px] backdrop-blur-none"
        >
          {isMicOn ? "Mute" : "Unmute"}
        </button>
      </div>
    </div>
  );
};

export default VideoCallPage;
