import { FaTimes } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
	return (
		<Card className="card">
			<div className="num-display">
				<FaStar className="star-display" />
				{item.rating}
			</div>

			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

export default FeedbackItem;
