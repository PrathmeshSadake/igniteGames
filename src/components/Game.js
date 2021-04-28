import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, id, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt="" />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 22vh;
  padding-top: 1rem;
  box-shadow: 0px 3px 20px rgba(120, 120, 120, 0.4);
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    margin-bottom: -10px;
  }
`;

export default Game;
