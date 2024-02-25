import React from 'react';
import { Typography, Button } from '@mui/material';

const Hero = () => {
	return (
		<div className='bg-blue-500 text-white py-8 text-center'>
			<Typography variant='h2' className='font-bold text-4xl mb-4'>
				Welcome to Shop Nest
			</Typography>
			<Typography variant='h5' className='text-lg mb-4'>
				Discover the best deals on your favorite products!
			</Typography>
			<Button
				variant='contained'
				color='secondary'
				className='py-2 px-4 bg-red-500 hover:bg-red-600 rounded'
			>
				Shop Now
			</Button>
		</div>
	);
};

export default Hero;
