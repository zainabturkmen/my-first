import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="zainab logo" />
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: #000;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-accent);
  }
  .logo {
    justify-self: center;
    width: 5em;
  }
  .links {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2em;

    li {
      list-style-type: none;
    }
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: uppercase;
    transition: all 0.3s linear;
    letter-spacing: 2px;
    text-decoration: none;
    color: #000;
    font-weight: bolder;
  }

  .links a:hover {
    padding-left: 1rem;
    color: var(--clr-accent);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: white;
    transform: translate(-100%);
    transition: all 0.3s linear;
    box-shadow: var(--bs);
  }
  .show-sidebar {
    transform: translate(0%);
    z-index: 999;
    transition: all 0.3s linear;
  }

  @media screen and (min-width: 700px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;

/* @keyframes all67 {
    20% {
      transform: translateX(-30%);
    }
    40% {

      transform: translateX(40%);
    }
    60% {

      transform: translateX(-30%);
    }
    80% {
      transform: translateX(40%);
    }
    100% {

      transform: translateX(-50%);
    }
  } */
