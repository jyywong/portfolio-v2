import axios from 'axios';

// const backendURL = 'http://127.0.0.1:8000/api/create_email';
const backendURL = 'https://dry-shore-22168.herokuapp.com/api/create_email';

export const createContact = (name, email, message) => {
	return axios.post(backendURL, {
		name,
		email,
		message
	});
};
