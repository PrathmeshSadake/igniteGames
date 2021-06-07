import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";

import { Link } from "react-router-dom";
import { smallImage } from "../utils";
const Game = ({ name, released, id, image }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <StyledImageContainer>
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={image}
            // src={smallImage(image, 640)}
            alt=""
          />
        </StyledImageContainer>
        <StyledDesc>
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
          <p>{released}</p>
        </StyledDesc>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 22vh;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: #202020;
  // transition: transform 0.3s ease-out;
  cursor: pointer;

  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    margin-bottom: -10px;
    // transition: transform 0.7s ease-in;

    // &:hover {
    //   transform: scale(1.15);
    // }
  }
  // &:hover {
  //   transform: scale(1.05);
  //   img {
  //     transform: scale(1.15);
  //   }
  // }
`;
const StyledImageContainer = styled.div`
  overflow: hidden;
`;

const StyledDesc = styled.div`
  margin: 1rem 0;
  padding: 0 10px;
`;

export default Game;
