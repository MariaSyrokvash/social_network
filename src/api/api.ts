import axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		'API-KEY': '0e95a4fa-922c-4e5c-96fa-c712f53359b8'
	}
})

export const userAPI = {

	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},

	following(userId: number) {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
			.then(response => {
				return response.data;
			})
	},

	unFollowing(userId: number) {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
			.then(response => {
				return response.data;
			})
	}
}

export const profileAPI = {
	getUserProfile(userID: number) {
		return instance.get(`profile/${userID}`)
			.then(response => {
				return response.data;
			})
	}
}

export const authAPI = {
	getAuthMe() {
		return instance.get('auth/me')
			.then(response => {
				return response.data;
			})
	}
}