import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<header>
			<div className='containder'>
				<Link to='/'>
					<h1>Workout Buddy</h1>
				</Link>
			</div>
		</header>
	);
};

export default NavBar;
