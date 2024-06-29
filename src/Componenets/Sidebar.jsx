import React from "react";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import styled from "styled-components";
import links from "../Componenets/links";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
        {/* <div className="sidebar-header"> */}
        {/* <img src={logo} className="logo" alt="zainab logo" /> */}
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <FaTimes className="x" />
        </button>
        {/* </div> */}
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
  /* .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  } */

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    z-index: 1;
    background: white;
    transform: translate(-100%);
    transition: transform 1s linear;

    box-shadow: var(--bs);
    /* overflow-x: hidden; */
    /* transition: 0.5s; */
  }

  .show-sidebar {
    transform: translate(0%);
    transition: transform 1s linear;

    z-index: 999;
  }

  .close-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: #000;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.5em 1.5em;
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

  @media screen and (min-width: 700px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;

// animation: anima 1s alternate linear forwards 1;

/* @keyframes anima {
    20% {
      transition: linear 1ms;
      transform: translateX(100%);
    }
    40% {
      transition: linear ease 1ms;
      transform: translateX(-90%);
    }
    60% {
      transition: linear ease 1ms;
      transform: translateX(60%);
    }
    80% {
      transition: linear ease 1ms;
      transform: translateX(20%);
    }
    100% {
      transition: linear ease 1ms;
      transform: translateX(0%);
    }
  }*/
