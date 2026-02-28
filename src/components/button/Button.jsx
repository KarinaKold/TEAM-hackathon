import PropTypes from 'prop-types';

export const Button = ({
	children,
	onClick,
	type = 'button',
	variant = 'rounded',
	color = 'gray',
}) => {
	const borderRadiusType = variant === 'rounded' ? 'rounded-lg' : 'rounded-none';

	const buttonColor = {
		blue: 'bg-blue-500 hover:bg-blue-600',
		green: 'bg-green-500 hover:bg-green-600',
		red: 'bg-red-500 hover:bg-red-600',
		gray: 'bg-gray-400 hover:bg-gray-500',
	}[color];

	return (
		<button
			onClick={onClick}
			type={type}
			className={`text-white ${buttonColor} ${borderRadiusType} py-1.5 px-3 focus:outline-none`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	color: PropTypes.oneOf(['blue', 'green', 'red', 'gray']),
	variant: PropTypes.oneOf(['rounded', 'square']),
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
	color: 'gray',
	variant: 'rounded',
	type: 'button',
};
