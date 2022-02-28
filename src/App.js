import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import './index.css';

const App = () => {
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackItem />
			</div>
		</>
	);
};

export default App;
