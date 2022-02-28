const Header = ({ text, bgColor, textColor }) => {
	const headerStyles = {
		background: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyles}>
			<div className="container"></div>
			<h2>{text}</h2>
		</header>
	);
};

Header.defaultProps = {
	text: 'Client Feedback',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95',
};

export default Header;
