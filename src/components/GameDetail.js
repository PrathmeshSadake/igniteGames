import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { smallImage } from "../utils";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

// STAR IMAGES
import starEmpty from "../img/star-empty.png";
import startFull from "../img/star-full.png";

// GET PLATFORM IMAGES
const getPlatform = (platform) => {
  switch (platform) {
    case "PlayStation 4":
      return playstation;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }
};

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit detail handler
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflowY = "scroll";
      history.replace("/");
      // history.push('/');
    }
  };
  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  //GET Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={startFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }

    return stars;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      height="40px"
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={game.background_image}
                // src={smallImage(game.background_image, 1280)}
                alt="image"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screenshot) => (
                <img
                  key={screen.id}
                  src={smallImage(screenshot.image, 1280)}
                  alt="Game screenshot"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  //   padding: 10px 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem 0rem 5rem;
  // background: white;
  background-color: #202020;
  position: absolute;
  left: 10%;
  color: white;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.5rem;
    display: inline;
    color: yellow;
    margin-right: 2px;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 2rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
    // height: 60vh;
    // object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 2rem 0;
`;

export default GameDetail;
