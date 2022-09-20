import { useRef, useState } from "react"
import io from "socket.io-client"
import Peer from "simple-peer"

const VideoCallPage = () => {
	const [roomID, setRoomID] = useState("")
	const [token, setToken] = useState("")

	const socket = useRef()
	const localVideo = useRef()
	const remoteVideo = useRef()

	const onStartPeering = (isInitiator) => {
		console.log("got start-peering", isInitiator)
		const peer = new Peer({
			stream: localVideo.current.srcObject,
			initiator: isInitiator
		})
		peer.on("signal", (data) => {
			socket.current.emit("signal", data)
		})
		peer.on("stream", (stream) => {
			console.log("got stream")
			remoteVideo.current.srcObject = stream
		})
		peer.on("connect", () => {
			console.log("Peer connected")
		})

		socket.current.on("signal", (data) => {
			peer.signal(data)
		})
	}

	// This function should be called in useEffect
	const onEnterRoom = () => {
		navigator.mediaDevices
			.getUserMedia({ audio: true, video: true })
			.then((stream) => {
				localVideo.current.srcObject = stream
				socket.current = io("http://localhost:5050", { auth: { token } })
				socket.current.emit("join-room", roomID)
				socket.current.on("start-peering", onStartPeering)
				socket.current.on("room-closed", () => {
					console.log("Closing the room")
				})
			})
	}

	return (
		<div>
			<h1>Video Call Page</h1>
			<input
				placeholder="token"
				value={token}
				onChange={(v) => setToken(v.target.value)}
			/>
			<input
				placeholder="roomID"
				value={roomID}
				onChange={(v) => setRoomID(v.target.value)}
			/>
			<button onClick={onEnterRoom}>Ready Ka</button>
			<video playsInline autoPlay ref={localVideo} muted></video>
			<video playsInline autoPlay ref={remoteVideo}></video>
		</div>
	)
}

export default VideoCallPage
