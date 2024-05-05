import './MoreButton.css';

function MoreButton({ buttonText }) {
	return (
		<button
			className="more-button button"
			type="submit">
			{buttonText}
		</button>
	);
};

export default MoreButton;