import axios from "axios";

const CATEGORY_URL = "https://opentdb.com/api_category.php";

async function getCategories() {
  try {
    const response = await axios.get(CATEGORY_URL);
    return response.data.trivia_categories;
  } catch (err) {
    return err.response;
  }
}

export { getCategories };
