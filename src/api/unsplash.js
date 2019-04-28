import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID b1c9eff4ec00420396e5700821f77995d0f8bf8403d2ea39603ce830061abd8f'
	}
});