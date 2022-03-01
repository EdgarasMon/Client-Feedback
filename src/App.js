import Header from './components/Header';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import './index.css';

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = id => {
		if (window.confirm('Delete Item?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackStats feedback={feedback} />
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</>
	);
};

export default App;
