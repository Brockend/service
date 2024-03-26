

import Link from 'next/link';
import './header.scss';

const Header = () => {

	return (
		<header className='header'>
			<Link href={'/'} className="header__logo">Logo app</Link>
			<input className="header__search" type="text" name='headerSearch' placeholder='Search'></input>
		</header>
	)
}

export default Header;