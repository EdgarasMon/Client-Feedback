import { FaHome } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = ({ text, bgColor, textColor }) => {
	const headerStyles = {
		background: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyles}>
			<div className="header">
				<Link
					to="/Client-Feedback"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<h2>
						<FaHome className="homeIcon" />
						{text}
					</h2>
				</Link>
			</div>
		</header>
	);
};

Header.defaultProps = {
	text: 'Client Feedback',
	bgColor: '#0f0701',
	textColor: '#FFD700 ',
};

export default Header;
