import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper className="navbar">
      <div class="logo-and-toggle-div">
        <div class="logo">
          <img src={logo} alt="Zainab logo" />
        </div>
        <button class="sidebar-toggle">
          <FaBars />
        </button>
      </div>
      {/* <!-- links --> */}
      <nav class="nav">
        <button class="close-btn">
          <FaTimes />
        </button>
        <ul class="links">
          <li>
            <a href="index.html" class="active">
              home
            </a>
          </li>
          <li>
            <a href="index.html#services">services</a>
          </li>
          <li>
            <a href="index.html#about">about</a>
          </li>
          <li>
            <a href="index.html#work">work</a>
          </li>
          <li>
            <a href="index.html#contact">contact</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .logo-and-toggle-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 2em;
  }

  img {
    width: 15%;
  }

  .sidebar-toggle {
    background-color: white;
    border: none;
    font-size: 1.25rem;
  }
`;

export default Navbar;
