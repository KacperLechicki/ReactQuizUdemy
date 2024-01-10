import React from 'react';

import QUESTIONS from '../../assets/data/questions';
import QuizCompletePNG from '../../assets/quiz-complete.png';

import Question from './Question/Question';

const Quiz = () => {
	const [answerState, setAnswerState] = React.useState('');
	const [userAnswers, setUserAnswers] = React.useState([]);
	const activeQuestionIndex =
		answerState === '' ? userAnswers.length : userAnswers.length - 1;

	const handleSelectAnswer = React.useCallback(
		(selectedAnswer) => {
			setAnswerState('answered');
			setUserAnswers((prevAnswers) => {
				return [...prevAnswers, selectedAnswer];
			});

			setTimeout(() => {
				if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
					setAnswerState('correct');
				} else {
					setAnswerState('wrong');
				}

				setTimeout(() => {
					setAnswerState('');
				}, 2000);
			}, 1000);
		},
		[activeQuestionIndex]
	);

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
				text={QUESTIONS[activeQuestionIndex].text}
				answers={QUESTIONS[activeQuestionIndex].answers}
				answerState={answerState}
				selectedAnswer={userAnswers[userAnswers.length - 1]}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
};

export default Quiz;
