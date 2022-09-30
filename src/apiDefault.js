import axios from "axios"
const apiDefault = axios.create({
	baseURL: "https://api.synthia.tech/patient/api",
	withCredentials: false,
	headers: {
		Authorization: "Bearer " + localStorage.getItem("jwt")
	}
})
export default apiDefault
