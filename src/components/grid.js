import React, { useState } from "react";

const Grid = ({
  grid,
  boards,
  selectedBoard,
  handleSquareClick,
  checkSolution,
  switchBoard,
  showSolution
}) => {
  const cells = new Array(grid.cells).fill(0);
  const rows = new Array(grid.rows).fill(0);

  const [resultMessage, setResultMessage] = useState("");

  const handleClick = (rowIndex, cellIndex) => {
    handleSquareClick(rowIndex, cellIndex);
  };

  const handleCheckSolution = () => {
    setResultMessage(checkSolution());
  };

  const handleSwitchBoard = (event) => {
    switchBoard(parseInt(event.target.value));
  };

  return (
    <main>
      <h1>Grid</h1>

      {rows.map((row, rowIndex) => (
        <ul className="row" key={rowIndex}>
          {cells.map((cell, cellIndex) => (
            <li
              key={cellIndex}
              className={`item${
                boards[selectedBoard].shadeBoard[rowIndex][cellIndex]
                  ? " selected"
                  : ""
              }`}
              onClick={() => handleClick(rowIndex, cellIndex)}
            >
              {boards[selectedBoard].numberBoard[rowIndex][cellIndex] > 0
                ? boards[selectedBoard].numberBoard[rowIndex][cellIndex]
                : ""}
            </li>
          ))}
        </ul>
      ))}

      <button onClick={handleCheckSolution}>Check Solution</button>
      <p>{resultMessage}</p>

      <button onClick={showSolution}>Show Solution</button>

      <div>
        <label htmlFor="board-selector">Select Board: </label>
        <select
          id="board-selector"
          value={selectedBoard}
          onChange={handleSwitchBoard}
        >
          {boards.map((_, index) => (
            <option key={index} value={index}>
              Board {index + 1}
            </option>
          ))}
        </select>
      </div>
    </main>
  );
};

export default Grid;
