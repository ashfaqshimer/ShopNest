import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-6 text-center'>
			<Typography variant='body1'>
				&copy; {new Date().getFullYear()} Shop Nest. All rights reserved.
			</Typography>
			<Typography variant='body2' mt={2}>
				Connect with us:
			</Typography>
			<div className='flex justify-center mt-2'>
				<Link href='#' color='inherit' mx={1}>
					Facebook
				</Link>
				<Link href='#' color='inherit' mx={1}>
					Twitter
				</Link>
				<Link href='#' color='inherit' mx={1}>
					Instagram
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
