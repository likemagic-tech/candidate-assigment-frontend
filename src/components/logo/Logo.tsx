import logo from '../../saveImageLogo.png';
import './logo.style.css';
const Logo = () => {
	return (
		<div className='logo-wrapper'>
			<img className='logo' src={logo} alt='logo' />
		</div>
	);
};

export default Logo;
