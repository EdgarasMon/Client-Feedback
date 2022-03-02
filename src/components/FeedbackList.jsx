import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.lenght === 0) {
		return <p>no feedback</p>;
	}

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default FeedbackList;
