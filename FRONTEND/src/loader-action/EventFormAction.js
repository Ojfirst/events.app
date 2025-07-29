import { redirect } from 'react-router';
const newEventAction = async ({ request, params }) => {
	const data = await request.formData(); // Get Form input
	// Form input Data
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		date: data.get('date'),
		description: data.get('description'),
	};

	const response = await fetch('http://localhost:8080/events', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
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
