import { FaTimes } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
	const { deleteFeedback } = useContext(FeedbackContext);

	return (
		<Card className="card">
			<div className="num-display">
				<FaStar className="star-display" />
				{item.rating}
			</div>

			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

export default FeedbackItem;
