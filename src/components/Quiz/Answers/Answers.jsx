import React from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
	const shuffledAnswers = React.useRef();

	if (shuffledAnswers.current === undefined) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort(() => Math.random() - 0.5);
	}

	return (
		<ul id='answers'>
			{shuffledAnswers.current.map((answer) => {
				const isSelected = selectedAnswer === answer;
				let cssClasses = '';

				if (answerState === 'answered' && isSelected) {
					cssClasses = 'selected';
				}

				if (
					(answerState === 'correct' || answerState === 'wrong') &&
					isSelected
				) {
					cssClasses = answerState;
				}

				return (
					<li key={answer} className='answer'>
						<button onClick={() => onSelect(answer)} className={cssClasses}>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
