import axios from "axios";

const QUESTIONS_URL = "https://opentdb.com/api.php?amount=10&";

async function getQuestions(category, difficulty) {
  try {
    const response = await axios.get(
      QUESTIONS_URL + `category=${category}&difficulty=${difficulty}`
    );
    return response.data.results;
  } catch (err) {
    return err.response;
  }
}

export { getQuestions };
