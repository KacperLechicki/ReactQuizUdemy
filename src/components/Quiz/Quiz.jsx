import React from 'react';

import QUESTIONS from '../../assets/data/questions';

import Question from './Question/Question';
import Summary from './Summary/Summary';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = React.useState([]);
	const activeQuestionIndex = userAnswers.length;

	const handleSelectAnswer = React.useCallback((selectedAnswer) => {
		setUserAnswers((prevAnswers) => {
			return [...prevAnswers, selectedAnswer];
		});
	}, []);

	const handleSkipAnswer = React.useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

	if (isQuizComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
};

export default Quiz;
