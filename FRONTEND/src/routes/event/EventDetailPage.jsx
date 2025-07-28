import React from 'react';
import { useRouteLoaderData } from 'react-router';

import EventItem from '../../components/EventItem';

const EventDetailPage = () => {
	const data = useRouteLoaderData('event-detail'); // Use the loader data from the route with id 'event-detail'
	return (
		<>
			<EventItem event={data.event} />
		</>
	);
};

export default EventDetailPage;


