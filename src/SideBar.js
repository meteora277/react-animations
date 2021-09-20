import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const animate = {
  open: { opacity: 1, transition: 0.7 },
  close: { opacity: 0, transition: 0.7 }
};

const Nav = styled(motion.div)`
  background: grey;
  width: 300px;
  position: absolute;
  left: 0;
  padding-top:3rem;

  li {
    font-family: Arial;
    list-style-type:none;
    color:white;
    height:3rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:1.5rem;  
    border-bottom: 1px solid white;
  }
  li:nth-child(1){
    border-top:1px solid white;

  }
`;
const Menu = styled.button`
  position: absolute;
  display:block;
  z-index: 10;
  height:3rem;
  width:3rem;
  border:none;
  background:grey;
  color:white;


`;

export default function SideBar(props) {
  const [Open, SetOpen] = useState(false);

  return (
    <div>
      <Menu onClick={() => SetOpen(!Open)}>{Open ? <>&#x2715;</>:<>&#9776;</> }</Menu>
      <Nav
        initial={{ opacity: 0 }}
        animate={Open ? "open" : "close"}
        transition={{ duration: 0.5 }}
        variants={animate}
      >
        {props.children}
      </Nav>
    </div>
  );
}
