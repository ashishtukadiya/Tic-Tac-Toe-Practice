import React from "react";
import { useLocation } from "react-router-dom";
import GameBoard from "./Gameboard";
import { Container, Typography } from "@mui/material";

const GamePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const boardSize = Number(params.get("boardSize")) || 3;
  const winCondition = Number(params.get("winCondition")) || 3;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tic Tac Toe
      </Typography>
      <GameBoard boardSize={boardSize} winCondition={winCondition} />
    </Container>
  );
};

export default GamePage;
