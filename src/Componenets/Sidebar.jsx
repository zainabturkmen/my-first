import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png"
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer>
      <aside
        className={`${isOpen ? "sidebar show-sidebar" : "show-sidebar"}`}
      >
        <div className="sidebar-header">
            <img src={logo}/>
        </div>
      </aside>

    </SidebarContainer>
  );
};

export default Sidebar;
