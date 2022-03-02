import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import './index.css';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path="/about" element={<AboutPage />} />
					</Routes>
					<Link to="/about">
						<AboutIconLink />
					</Link>
				</div>
			</Router>
		</FeedbackProvider>
	);
};

export default App;
