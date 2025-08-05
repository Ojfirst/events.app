import { redirect } from 'react-router';
import { getAuthToken } from '../util/auth';


const newEventAction = async ({ request, params }) => {
	const method = request.method;
	const data = await request.formData(); // Get Form input
  
	// Form input Data
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		date: data.get('date'),
		description: data.get('description'),
	};

	let url = 'http://localhost:8080/events';

	if (method === 'PATCH') {
		const eventId = params.eventId;
		url = 'http://localhost:8080/events/' + eventId;
	}

	const token = getAuthToken();
	const response = await fetch(url, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		body: JSON.stringify(eventData),
	});
	// Server side Validation
	if (response.status === 422) {
		const errorData = await response.json();
		return errorData;
	}

	if (!response.ok) {
		throw new Response(
			JSON.stringify({ message: 'Could not save event, Please try again' }),
			{ status: 500 }
		);
	} else {
		return redirect('..');
	}
};

export default newEventAction;
