import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .navbar {
    padding: .3em 2em;
    box-shadow: var(--bs);
  }

  img {
    width: 5em;
  }

  nav {
    display: none;
  }

  .logo-and-toggle-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidebar-toggle,
  .close-btn {
    background-color: white;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    .navbar {
      padding: 0 5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sidebar-toggle,
    .close-btn {
      display: none;
    }

    nav {
      display: block;
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
  }
`;

export default Navbar;
