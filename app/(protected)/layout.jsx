import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { UserButton } from '@clerk/nextjs';

export default function MainLayout({ children }) {
	return (
		<div className='pb-8 py-2'>
			<Navbar className='mb-4'>
				<NavbarBrand>
					<p className='font-bold text-inherit'>Task Tetris</p>
				</NavbarBrand>
				<NavbarContent className='hidden sm:flex gap-4' justify='center'>
					<NavbarItem isActive>
						<Link href='#'>Dashboard</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href='#' color='foreground'>
							Tasks
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify='end'>
					<UserButton />
				</NavbarContent>
			</Navbar>
			{children}
		</div>
	);
}
