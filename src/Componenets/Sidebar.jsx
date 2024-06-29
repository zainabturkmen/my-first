import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
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


