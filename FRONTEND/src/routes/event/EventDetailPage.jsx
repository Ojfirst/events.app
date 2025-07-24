import React from 'react';
import { useParams, Link } from 'react-router';

const EventDetailPage = () => {
	const params = useParams();

	return (
		<>
    <h1>EvenDetailPage</h1>
			<div>Event ID: {params.eventId}</div>
			<Link to={'..'} relative='path'>Back</Link>
		</>
	);
};

export default EventDetailPage;
