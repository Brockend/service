"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import './sidebar.scss';

import allSvg from '../../assets/sidebar/all.svg';
import todaySvg from '../../assets/sidebar/today.svg';
import categorySvg from '../../assets/sidebar/category.svg';
import importantSvg from '../../assets/sidebar/important.svg';
import completedSvg from '../../assets/sidebar/completed.svg';

const navLinks = [
	{name: "All", href: '/todos', src: allSvg},
	{name: "Today", href: '/todos/today', src: todaySvg},
	{name: "Category", href: '/todos/category', src: categorySvg},
	{name: "Important", href: '/todos/important', src: importantSvg},
	{name: "Completed", href: '/todos/completed', src: completedSvg}
]

const Sidebar = () => {

	const pathname = usePathname();

	return (
		<nav className='sidebar'>
			<ul className='sidebar__list'>
				{navLinks.map((link) => {

					const isActive = pathname === link.href;

					return (
						<li className={isActive ? "sidebar__item sidebar__item_active" : "sidebar__item"} key={link.name}>
							<Link href={link.href} className='sidebar__link'>
								<Image src={link.src} alt={link.name} className='sidebar__icon'/>
								{link.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Sidebar;