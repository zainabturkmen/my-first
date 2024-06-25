import React from "react";
import logo from "../assets/react.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div class="logo-and-toggle-div">
        <div class="logo">
          <img src="img/image.png" alt="" />
        </div>
        <button class="sidebar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- links --> */}
      <nav class="nav">
        <button class="close-btn">
          <i class="fas fa-times"></i>
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
  }
`;

export default Navbar;
