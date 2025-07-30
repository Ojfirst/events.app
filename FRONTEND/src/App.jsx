import React, { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import RootLayer from './routes/Root';
import HomePage from './routes/Home';
import EventPage from './routes/event/EventPage';
import EventDetailPage from './routes/event/EventDetailPage';
import EventLoader from './loader-action/EventLoader';
import EventDetailLoader, {
	EventDetailAction as DeletEventAction,
} from './loader-action/EventDetail';
import NewEventPage from './routes/event/NewEventPage';
import EditEventPage from './routes/event/EditEventPage';
import EventRootLayer from './routes/event/EventRoot';
import ErrorPage from './routes/ErrorPage';
import newEventAction from './loader-action/EventFormAction';
import NewsletterPage from './components/NewsLetter';
import newsLetterAction from './loader-action/NewLetterAction';

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
						loader: EventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: DeletEventAction,
							},
							{
								path: 'edit',
								element: <EditEventPage />,
								action: newEventAction,
							},
						],
					},

					{ path: 'new', element: <NewEventPage />, action: newEventAction },
				],
			},
			{
				path: 'newsletter',
				element: <NewsletterPage />,
				action: newsLetterAction,
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
