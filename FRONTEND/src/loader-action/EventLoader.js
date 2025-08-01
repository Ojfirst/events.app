
const loadEvents = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
			status: 500,
		});
	} else {
    const resData = await response.json();
    return resData.events
    
		// return response.json().then(data => data.events || []); // Ensure data.events is an array
	}
};

const EventLoader = () => {
  return {
    events: loadEvents(),
	};
};

export default EventLoader;
