import { v4 as uuidv4 } from 'uuid';

import { useState, useEffect } from "react";

function Question({ questions, setQuestions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  function handleAnswerClick(correctAnswer) {
    if (correctAnswer === questions[currentQuestion].correct_answer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    if (currentQuestion <= questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleResetClick() {
    questions.length = 0
    setQuestions([]);
  }

  useEffect(() => {
    if (currentQuestion <= questions.length - 1) {
      let randPosition = Math.floor(Math.random() * 3) + 1;
      let incorrectChoices = [...questions[currentQuestion].incorrect_answers]
      incorrectChoices.splice(randPosition - 1, 0, questions[currentQuestion].correct_answer)
      setAnswers(incorrectChoices);
    }

  }, [currentQuestion])

  return (
    <>
      {currentQuestion !== questions.length
        ? (<>
          <div id="question-section">
            <h2 className="question-count"> Question {currentQuestion + 1}</h2>
            <h3 className="question-number">{questions[currentQuestion].question}</h3>
          </div>
          <div id="answers-section">
            {answers.map((answer) => <button key={uuidv4()} onClick={() => handleAnswerClick(answer)}>{answer}</button>)}
          </div>
        </>)
        : (
          <div id="final-sections">
            <p>{correctAnswersCount}/10 correct answers</p>
            <button id="reset-button" onClick={handleResetClick}>Reset</button>
          </div>)}
    </>
  );
}

export default Question;
