import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";

const Game = ({ name, released, id, image }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <img src={image} alt="" />
      <StyledDesc>
        <h3>{name}</h3>
        <p>{released}</p>
      </StyledDesc>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 22vh;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: #202020;

  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    margin-bottom: -10px;
  }
`;

const StyledDesc = styled.div`
  margin: 1rem 0;
`;

export default Game;
