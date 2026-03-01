import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router';
import { UserBadge } from '../customBadge/UserBadge';
import { FavButton } from '../favButton/FavButton';

export const MemberCard = ({ member }) => {
	const location = useLocation();
	const showFavButton = location.pathname !== '/favorites';

	return (
		<div className="flex justify-between items-center">
			<Link
				to={`/member/${member.id}`}
				className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
			>
				<h5 className="mr-2">{member.name}</h5>
				<div className="flex gap-2">
					{member.badge &&
						member.badge.map((b, index) => (
							<UserBadge key={index} color={b.color} content={b.text} />
						))}
				</div>
			</Link>
			{showFavButton && (
				<div>
					<FavButton member={member} />
				</div>
			)}
		</div>
	);
};

UserBadge.propTypes = {
	member: PropTypes.object.isRequired,
};
