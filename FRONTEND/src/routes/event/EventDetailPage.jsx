import React from 'react';
import { useParams, Link } from 'react-router';

const EventDetailPage = () => {
	const params = useParams();

	return (
		<>
			<div>{params.eventId}</div>
			<Link to={'..'} relative='path'>Back</Link>
		</>
	);
};

export default EventDetailPage;
