import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router';

import MainNavigation from '../components/Home/MainNavigation';

const RootLayout = () => {
	// Logout user after set timer
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) return;

		setTimeout(() => {
			submit(null, { action: '/logout', method: 'post' })
		}, 5000);
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
