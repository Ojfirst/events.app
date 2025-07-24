import React from 'react';
import { useParams } from 'react-router';

const EventDetailPage = () => {
	const params = useParams();

	return <div>{params.eventId}</div>;
};

export default EventDetailPage;
