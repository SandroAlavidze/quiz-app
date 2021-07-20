function Categoryselect({ setCategoryId, categories }) {
  return (
    <div id="category-section">
      <label htmlFor="categories">Pick a category:</label>
      <select id="categories" onChange={(e) => setCategoryId(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categoryselect;
