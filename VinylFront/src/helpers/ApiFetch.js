const ApiFetch = (url, body) => {
	return fetch(`https://localhost:44339/${url}`, body);
};

export default ApiFetch;
