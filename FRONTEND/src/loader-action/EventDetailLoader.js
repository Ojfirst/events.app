export const EventDetailLoader = async ({ request, params }) => {
	const id = params.eventId; // Used in gettin the event Id.

	const response = await fetch('http://localhost:8080/events/' + id); // add event Id to URL
	if (!response.ok) {
		throw new Response(
			JSON.stringify({ message: 'Could not fetch event detail' }),
			{ status: 500 }
		);
	} else {
		return response;
	}
};