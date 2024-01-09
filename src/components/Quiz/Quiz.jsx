import React from 'react';

import QUESTIONS from '../../assets/data/questions';
import QuizCompletePNG from '../../assets/quiz-complete.png';

const Quiz = () => {
	const [userAnswers, setUserAnswers] = React.useState([]);
	const activeQuestionIndex = userAnswers.length;

	const handleSelectAnswer = (selectedAnswer) => {
		setUserAnswers((prevAnswers) => {
			return [...prevAnswers, selectedAnswer];
		});
	};

	const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

	if (isQuizComplete) {
		return (
			<div id='summary'>
				<img src={QuizCompletePNG} alt='Trophy Icon' />
				<h2>Quiz Complete!</h2>
			</div>
		);
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id='quiz'>
			<div id='question'>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{shuffledAnswers.map((answer) => (
						<li key={answer} className='answer'>
							<button onClick={() => handleSelectAnswer(answer)}>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Quiz;
