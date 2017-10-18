import axios from 'axios'

axios.defaults.baseURL = '/data';

export function fetch(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, params)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			})
	})
}

export default {
	commonApi(url, params) {
		return fetch(url, params);
	}
}