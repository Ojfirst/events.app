import { redirect } from "react-router";

const EventDetailLoader = async ({ params }) => {
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


export const EventDetailAction = async ({params, request}) => {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, { method: request.method});

  	if (!response.ok) {
		throw new Response(
			JSON.stringify({ message: 'Could not delet event' }),
			{ status: 500 }
		);
	} else {
		return redirect('/events');
	}
};

export default EventDetailLoader;

