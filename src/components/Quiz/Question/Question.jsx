import React from 'react';

import QuestionTimer from '../QuestionTimer/QuestionTimer';
import Answers from '../Answers/Answers';

const Question = ({
	text,
	answers,
	onSelectAnswer,
	selectedAnswer,
	onSkipAnswer,
	answerState,
}) => {
	return (
		<div id='question'>
			<QuestionTimer timeout={10000} onTimeout={() => onSkipAnswer()} />
			<h2>{text}</h2>
			<Answers
				answers={answers}
				answerState={answerState}
				selectedAnswer={selectedAnswer}
				onSelect={onSelectAnswer}
			/>
		</div>
	);
};

export default Question;
