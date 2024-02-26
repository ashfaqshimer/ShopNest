import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					<Link href='/'>
						<span style={{ color: 'inherit' }}>Shop Nest</span>
					</Link>
				</Typography>
				<nav>
					<ul className='flex'>
						<li className='mr-4'>
							<Link href='/products'>
								<Button color='inherit'>Products</Button>
							</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className='flex'>
						<li className='mr-2'>
							<Link href='/login'>
								<Button color='inherit'>Login</Button>
							</Link>
						</li>
						<li>
							<Link href='/register'>
								<Button color='inherit'>Register</Button>
							</Link>
						</li>
					</ul>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
