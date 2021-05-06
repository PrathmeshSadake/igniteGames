import React, { useState } from "react";

// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

//
import { fetchedSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const [gameInput, setGameInput] = useState(``);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setGameInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchedSearch(gameInput));
    setGameInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearch}>
        <img src={logo} style={{ color: "white" }} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input
          type="text"
          placeholder="Search 547,123 games"
          value={gameInput}
          onChange={handleInput}
        />
        <button onClick={handleSubmit} type="submit">
          🔍
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 2rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    background-color: #f1f1f1;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1);
  }
  button {
    border: none;
    background-color: transparent;
    padding: 2rem;
    border-radius: 50%;
    padding: 0.5rem 2rem;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  h1 {
    color: white;
    margin-left: 0.5rem;
  }
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
