import React, { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayer from './routes/Root';
import HomePage from './routes/Home';
import EventPage, { Loader as EventLoader } from './routes/event/EventPage';
import EventDetailPage, {
	loader as EventDetailsLoader,
} from './routes/event/EventDetailPage';
import NewEventPage from './routes/event/NewEventPage';
import EditEventPage from './routes/event/EditEventPage';
import EventRootLayer from './routes/event/EventRoot';
import ErrorPage from './routes/ErrorPage';
import newEventAction  from './loader-action/EventFormAction';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayer />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventRootLayer />,
				children: [
					{
						index: true,
						element: <EventPage />,
						loader: EventLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: EventDetailsLoader,
						children: [
							{ index: true, element: <EventDetailPage /> },
							{ path: 'edit', element: <EditEventPage /> },
						],
					},

					{ path: 'new', element: <NewEventPage />, action: newEventAction },
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
