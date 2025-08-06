import { redirect } from 'react-router';

const getTokenDuration = () => {
	const StoredExpirationDate = localStorage.getItem('expiration');
	// covert to date object
	const expirationDate = new Date(StoredExpirationDate);
	const now = new Date(); // current time stamp
	const duration = expirationDate.getTime() - now.getTime(); //duration
	return duration;
};

const getAuthToken = () => {
	const token = localStorage.getItem('token');

	if (!token) return;

	const tokenDuration = getTokenDuration();

	// Expires
	if (tokenDuration < 0) {
		return 'EXPIRED';
	}

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
export { tokenLoader, checkAuthLoader, getTokenDuration };
export default getAuthToken;
