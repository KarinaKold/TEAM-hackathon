import React from 'react';
import PropTypes from 'prop-types';

const UserBadge = ({ color, content }) => {
	const baseClasses = 'px-2.5 py-0.5 rounded text-xs font-medium text-white shadow-sm';

	const colorClasses = {
		blue: 'bg-blue-500 text-white',
		red: 'bg-red-500 text-white',
		green: 'bg-green-500 text-white',
		gray: 'bg-gray-500 text-white',
		yellow: 'bg-yellow-500 text-black',
		gold: 'bg-amber-400 text-black font-bold shadow-sm',
		indigo: 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-200',
		emerald: 'bg-emerald-500 text-white shadow-sm',
	};

	const selectedColor = colorClasses[color] || colorClasses.gray;

	return <span className={`${baseClasses} ${selectedColor}`}>{content}</span>;
};

UserBadge.propTypes = {
	color: PropTypes.string,
	content: PropTypes.string.isRequired,
};

export default UserBadge;
