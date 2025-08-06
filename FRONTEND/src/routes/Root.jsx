import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router';

import MainNavigation from '../components/Home/MainNavigation';
import { getTokenDuration } from '../util/auth';

const RootLayout = () => {
	// Logout user after set timer
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) return;

		if (token === 'EXPIRED') {
			submit(null, { action: '/logout', method: 'post' });
		}

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration)

		setTimeout(() => {
			submit(null, { action: '/logout', method: 'post' });
		}, tokenDuration);
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
