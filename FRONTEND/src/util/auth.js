const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token;
}

const tokenLoader = () => {
  return getAuthToken()
}

// Available acroos all path
export { tokenLoader };
export default getAuthToken;