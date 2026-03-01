import { Link, useLocation } from 'react-router';

export const Breadcrumbs = () => {
	const pathway = useLocation();

	const crumbs = pathway.pathname.split('/').filter((crumb) => crumb !== '');

	return (
		<nav>
			<ol className="absolute flex p-1 text-gray-600 text-xl">
				<li>
					<Link to="/" className="text-gray-500 hover:text-gray-800">
						Home
					</Link>
				</li>
				{crumbs.map((crumb, index) => {
					const path = `/${crumbs.slice(0, index + 1).join('/')}`;
					const displayedName = crumb.replace(/\b\w/g, (char) =>
						char.toUpperCase(),
					);

					return (
						<div key={path} className="flex items-center">
							<li>
								<span className="mx-2 text-gray-400">&gt;</span>
							</li>
							<li>
								{index === crumbs.length - 1 ? (
									<span className="text-gray-700">{displayedName}</span>
								) : (
									<Link
										to={path}
										className="text-gray-500 hover:text-gray-800"
									>
										{displayedName}
									</Link>
								)}
							</li>
						</div>
					);
				})}
			</ol>
		</nav>
	);
};
