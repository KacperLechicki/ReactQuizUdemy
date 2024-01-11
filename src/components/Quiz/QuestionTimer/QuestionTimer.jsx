import React from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
	const [remainingTime, setRemainingTime] = React.useState(timeout);

	React.useEffect(() => {
		const timer = setTimeout(onTimeout, timeout);

		return () => {
			clearTimeout(timer);
		};
	}, [timeout, onTimeout]);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prev) => prev - 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			id='question-time'
			max={timeout}
			value={remainingTime}
			className={mode}
		/>
	);
};

export default QuestionTimer;
