import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>
					This is React app for leaving feedbacks for a products or
					services
				</p>
				<p>Version: 1.0.0</p>

				<p>
					<Link to="/Client-Feedback">Back to Home</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
