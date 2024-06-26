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
            <a href="index.html#services">Services</a>
          </li>
          <li>
            <a href="index.html#about">About</a>
          </li>
          <li>
            <a href="index.html#work">Work</a>
          </li>
          <li>
            <a href="index.html#contact">Contact</a>
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
  }

  img {
    width: 5em;
  }

  .sidebar-toggle,
  .close-btn {
    background-color: white;
    border: none;
    font-size: 1.25rem;
    display: none;
  }

  ul {
    display: flex;
    gap: 2em;
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 0.9em;
    }
  }

  @media (max-width: 680px) {
    .sidebar-toggle,
    .close-btn {
      background-color: white;
      border: none;            
      font-size: 1.25rem;
      display: block;
    }
  }
`;

export default Navbar;
