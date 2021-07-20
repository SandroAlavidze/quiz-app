import { useEffect, useState } from "react";
import { getCategories } from "./api/getcategorydata";
import Quizcriteria from "./components/Quizcriteria";
import Question from "./components/Question";
import "./App.css";

function App() {
  const [categories, setCategorries] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategorries(data));
  }, []);

  return (
    <div className="App">
      {questions.length === 0 ? (
        <>
          <h1>Start the Quiz</h1>
          <Quizcriteria categories={categories} setQuestions={setQuestions} />
        </>
      ) : (
        <Question questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
}

export default App;
