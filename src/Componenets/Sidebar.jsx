import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer>
      <aside
        // className={`${isOpen ? "sidebar show-sidebar" : "show-sidebar"}`}
      >
        <div className="sidebar-header">
            <img src={logo} alt="zainab logo"/>
            <button type="button" className="close-btn">
                <FaTimes/>
            </button>
        </div>
      </aside>

    </SidebarContainer>
  );
};

export default Sidebar;
