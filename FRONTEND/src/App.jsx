import React, { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayer from './components/RootLayer';
import HomePage from './routes/Home';
import EventPage from './routes/event/EventPage';
import EventDetailPage from './routes/event/EventDetailPage';
import NewEventPage from './routes/event/NewEventPage';
import EditEventPage from './routes/event/EditEventPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayer />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'events', element: <EventPage /> },
			{ path: 'events/:eventId', element: <EventDetailPage /> },
			{ path: 'events/new', element: <NewEventPage /> },
			{ path: 'events/:eventId/edit', element: <EditEventPage /> },
		],
	},
]);

const App = () => {
	return (
		<Fragment>
			<RouterProvider router={router} />
		</Fragment>
	);
};

export default App;




// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
