import React, { useState } from "react";
import "./styles.css";
import Grid from "./components/grid";

export default function App() {
  const gridBase = {
    cells: 5,
    rows: 5
  };

  const [grid, setGrid] = useState(gridBase);

  const [boards, setBoards] = useState([
    { // board 1
      shadeBoard: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ],
      solutionBoard: [
        [false, false, false, false, false],
        [false, false, true, true, false],
        [false, true, false, true, false],
        [false, true, false, false, true],
        [false, false, true, true, false]
      ],
      numberBoard: [
        [0, 0, 0, 0, 0],
        [0, 0, 2, 2, 0],
        [0, 2, 0, 2, 0],
        [0, 1, 0, 1, 1],
        [0, 0, 2, 2, 0]
      ]
    },
    { // board 2
      shadeBoard: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ],
      solutionBoard: [
        [false, false, false, false, false],
        [true, true, true, false, true],
        [true, true, true, false, true],
        [false, false, false, true, false],
        [true, false, true, false, false]
      ],
      numberBoard: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2],
        [0, 0, 6, 0, 2],
        [0, 4, 0, 0, 0],
        [1, 0, 1, 0, 0]
      ]
    },
    { // board 3
      shadeBoard: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ],
      solutionBoard: [
        [false, false, false, false, false, false],
        [true, true, true, false, true, false],
        [true, true, true, false, true, false],
        [false, false, false, true, false, false],
        [true, false, true, false, false, false]
      ],
      numberBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 2, 0, 2, 0],
        [0, 2, 4, 0, 2, 0],
        [0, 0, 0, 3, 0, 0],
        [2, 0, 2, 0, 0, 0]
      ]
    }
    // Add more boards here
  ]);

  const [selectedBoard, setSelectedBoard] = useState(0);

  const handleSquareClick = (rowIndex, cellIndex) => {
    const newShadeBoard = [...boards[selectedBoard].shadeBoard];
    newShadeBoard[rowIndex][cellIndex] = !boards[selectedBoard].shadeBoard[
      rowIndex
    ][cellIndex];
    setBoards((prevBoards) => {
      const newBoards = [...prevBoards];
      newBoards[selectedBoard].shadeBoard = newShadeBoard;
      return newBoards;
    });
  };

  const checkSolution = () => {
    for (let i = 0; i < boards[selectedBoard].solutionBoard.length; i++) {
      for (let j = 0; j < boards[selectedBoard].solutionBoard[i].length; j++) {
        if (
          boards[selectedBoard].solutionBoard[i][j] !==
          boards[selectedBoard].shadeBoard[i][j]
        ) {
          // return "Incorrect solution";
          alert("Incorrect Solution");
          return;
        }
      }
    }
    // return "Correct solution!";
    alert("Correct!");
    return;
  };

  const switchBoard = (index) => {
    setSelectedBoard(index);
  };

  const showSolution = () => {
    setBoards((prevBoards) => {
      const newBoards = [...prevBoards];
      newBoards[selectedBoard].shadeBoard = newBoards[
        selectedBoard
      ].solutionBoard.map((row) => row.slice());
      return newBoards;
    });
  };

  return (
    <div className="app">
      <Grid
        grid={grid}
        handleSquareClick={handleSquareClick}
        checkSolution={checkSolution}
        switchBoard={switchBoard}
        selectedBoard={selectedBoard}
        boards={boards}
        showSolution={showSolution}
      />
    </div>
  );
}
