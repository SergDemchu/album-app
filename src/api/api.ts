import axios from 'axios';

export const instance = axios.create({
	withCredentials: false,
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const photoAPI = {
	getPhotos() {
		return instance.get('photos')
			.then(response => response.data);
	},
	getAlbums() {
		return instance.get('albums')
			.then(response => response.data);
	}
};
