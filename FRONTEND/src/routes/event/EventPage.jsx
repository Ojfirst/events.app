import { useLoaderData } from 'react-router';

import EventsList from '../../components/EventsList';

const EventPage = () => {
	const events = useLoaderData();

	return (
		<>
			<EventsList events={events} />
		</>
	);
};

export default EventPage;

// In other to make loader function linner,
// it can be declear where its need, then export to the route path

export const Loader = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
	} else {
		const resData = await response.json();
		return resData.events;
	}
};
