import React, { useState } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Square = ({ value, onClick }) => (
  <Button
    variant="outlined"
    onClick={onClick}
    style={{ width: "100%", height: "100%", fontSize: "24px" }}
  >
    {value}
  </Button>
);

const GameBoard = ({ boardSize, winCondition }) => {
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const navigate = useNavigate();




  const checkWinner = (newBoard) => {
    const lines = [];

    // Rows
    for (let i = 0; i < boardSize; i++) {
      lines.push([...Array(boardSize)].map((_, j) => i * boardSize + j));
    }

    // Columns
    for (let i = 0; i < boardSize; i++) {
      lines.push([...Array(boardSize)].map((_, j) => j * boardSize + i));
    }

    // Diagonals
    lines.push([...Array(boardSize)].map((_, i) => i * (boardSize + 1)));
    lines.push([...Array(boardSize)].map((_, i) => (i + 1) * (boardSize - 1)));

    for (let line of lines) {
      const [a, b, c] = line;
      if (line.every((index) => newBoard[index] === "X")) return "X";
      if (line.every((index) => newBoard[index] === "O")) return "O";
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    const gameWinner = checkWinner(newBoard);
    setWinner(gameWinner);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <Grid item xs={12 / boardSize} key={index}>
      <Square value={board[index]} onClick={() => handleClick(index)} />
    </Grid>
  );

  const handleBackClick = () => {

    navigate('/')
  }

  return (
    <div>
      <Typography variant="h6">
        Next Player: {isXNext ? 'X' : 'O'}
      </Typography>
      <Grid container spacing={1} style={{ width: '100%', height: '400px' }}>
        {[...Array(boardSize * boardSize)].map((_, index) => renderSquare(index))}
      </Grid>
      {winner && (
        <Box mt={2} textAlign="center">
          <Typography variant="h4" color="primary">
            Winner: {winner}
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleBackClick} style={{ marginTop: '20px' }}>
            Back to Home
          </Button>
        </Box>
      )}
    </div>
  );
};

export default GameBoard;
