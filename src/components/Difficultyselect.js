function Difficultyselect({ setDifficulty }) {
  return (
    <>
      <label htmlFor="radio-buttons">Choose difficulty:</label>
      <div id="radio-buttons" onChange={(e) => setDifficulty(e.target.value)}>
        <input type="radio" id="easy" name="difficulty" value="easy"></input>
        <label htmlFor="easy">Easy</label>
        <input type="radio" id="medium" name="difficulty" value="medium"></input>
        <label htmlFor="medium">Medium</label>
        <input type="radio" id="hard" name="difficulty" value="hard"></input>
        <label htmlFor="hard">Hard</label>
      </div>
    </>
  );
}

export default Difficultyselect;
