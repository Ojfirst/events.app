import { redirect } from 'react-router';
import { loadEvents } from './EventsLoader';



const loadEvent = async (id) => {
  	let url = 'http://localhost:8080/events/';

	if (id) {
		url = 'http://localhost:8080/events/' + id;
	}

	const response = await fetch(url); // add event Id to URL
	if (!response.ok) {
		throw new Response(
			JSON.stringify({ message: 'Could not fetch event detail' }),
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData.event;
	}
}

const EventDetailLoader = async ({ params }) => {
	const id = params.eventId; // Used in gettin the event Id.

  return {
    event: await loadEvent(id),
    events: loadEvents()
  }

};

export const EventDetailAction = async ({ params, request }) => {
	const eventId = params.eventId;
	const response = await fetch('http://localhost:8080/events/' + eventId, {
		method: request.method,
	});

	if (!response.ok) {
		throw new Response(JSON.stringify({ message: 'Could not delet event' }), {
			status: 500,
		});
	} else {
		return redirect('/events');
	}
};

export default EventDetailLoader;
