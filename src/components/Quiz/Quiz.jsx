import React from 'react';

import QUESTIONS from '../../assets/data/questions';
import QuizCompletePNG from '../../assets/quiz-complete.png';

import Question from './Question/Question';

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
		return (
			<div id='summary'>
				<img src={QuizCompletePNG} alt='Trophy Icon' />
				<h2>Quiz Complete!</h2>
			</div>
		);
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
