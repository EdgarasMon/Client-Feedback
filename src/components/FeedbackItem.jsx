import { useState } from 'react';

const FeedbackItem = () => {
	const [rating, SetRating] = useState(7);
	const [text, SetText] = useState('Feedback item');

	return (
		<div className="card">
			<div className="num-display">{rating}</div>
			<div className="text-display">{text}</div>
		</div>
	);
};

export default FeedbackItem;
