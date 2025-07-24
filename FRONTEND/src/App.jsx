import React, { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayer from './routes/Root';
import HomePage from './routes/Home';
import EventPage from './routes/event/EventPage';
import EventDetailPage from './routes/event/EventDetailPage';
import NewEventPage from './routes/event/NewEventPage';
import EditEventPage from './routes/event/EditEventPage';
import EventRootLayer from './routes/event/EventRoot';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayer />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventRootLayer />,
				children: [
					{ index: true, element: <EventPage /> },
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EditEventPage /> },
				],
			},
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

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
