const ProgressBar = ({ label, percentage }) => {
	const getColor = (percent) => {
		if (percent >= 90) return 'bg-emerald-500';
		if (percent >= 70) return 'bg-blue-500';
		return 'bg-amber-500';
	};

	return (
		<div className="mb-4 w-full">
			<div className="flex justify-between mb-1">
				<span className="text-sm font-medium text-gray-700">{label}</span>
				<span className="text-xs font-semibold text-gray-600">{percentage}%</span>
			</div>

			<div className="w-full bg-gray-200 rounded-full h-2">
				<div
					className={`h-2 rounded-full transition-all duration-700 ease-out ${getColor(percentage)}`}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
