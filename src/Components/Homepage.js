import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";

const HomePage = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [winCondition, setWinCondition] = useState(3);
  const navigate = useNavigate();

  const startGame = () => {
    navigate(`/game?boardSize=${boardSize}&winCondition=${winCondition}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Welcome to Tic Tac Toe
      </Typography>
      <TextField
        label="Board Size"
        type="number"
        value={boardSize}
        onChange={(e) => setBoardSize(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Win Condition"
        type="number"
        value={winCondition}
        onChange={(e) => setWinCondition(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={startGame}>
        Start Game
      </Button>
    </Container>
  );
};

export default HomePage;
