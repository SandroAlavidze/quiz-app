import { useState } from "react";
import { getQuestions } from "../api/getquestions";
import Categoryselect from "./Categoryselect";
import Difficultyselect from "./Difficultyselect";

function Quizcriteria({ categories, setQuestions }) {
  const [categoryid, setCategoryId] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  function handleClick(e) {
    e.preventDefault();
    getQuestions(categoryid, difficulty).then((data) => setQuestions(data));
  }

  return (
    <form>
      <Categoryselect setCategoryId={setCategoryId} categories={categories} />
      <Difficultyselect setDifficulty={setDifficulty} />
      <button id="start" type="submit" onClick={handleClick}>
        START!
      </button>
    </form>
  );
}

export default Quizcriteria;
