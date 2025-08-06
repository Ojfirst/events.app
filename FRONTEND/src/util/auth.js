import { redirect } from 'react-router';

const getAuthToken = () => {
	const token = localStorage.getItem('token');
	return token;
};

const tokenLoader = () => {
	return getAuthToken();
};

// For blocking unauthorized access 
// to a page when not authenticated.
const checkAuthLoader = () => {
	const token = getAuthToken();

	if (!token) return redirect('/auth');
};

// Available acroos all path
export { tokenLoader, checkAuthLoader };
export default getAuthToken;
