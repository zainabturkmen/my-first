import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer>
      <aside className={`${isOpen? }`}></aside>
    </SidebarContainer>
  );
};

export default Sidebar;
