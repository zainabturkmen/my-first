import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "show-sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="zainab logo" />
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
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
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-accent);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    li {
      list-style-type: none;
    }
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: 2px;
    text-decoration: none;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-accent);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
