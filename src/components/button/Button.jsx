import React from 'react';

export const Button = ({ children, onClick, type = 'button' }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			style={{
				padding: '8px 12px',
				border: '1px solid #474747',
				borderRadius: '8px',
			}}
		>
			{children}
		</button>
	);
};
