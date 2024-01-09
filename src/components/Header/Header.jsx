import React from 'react';
import QuizLogoPNG from '../../assets/quiz-logo.png';

const Header = () => {
	return (
		<header>
			<img src={QuizLogoPNG} alt='Quiz Application Logo' />
			<h1>ReactQuiz</h1>
		</header>
	);
};

export default Header;
