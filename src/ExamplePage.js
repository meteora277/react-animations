import React,{useRef, useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Body = styled.div`
  position: relative;
  background: black;
  margin: 0;
  padding: 0;
  margin-top: 400px;
  height: 400px;
  overflow:hidden;
`;
const Notification = styled(motion.div)`
  font-family: Arial;
  background: tomato;
  color: white;
  text-align:center;
  padding: 1rem 1.5rem;
  border-radius:0.5rem;
  margin-top:0.3rem;


`;
const NotificationArea = styled.div`

    position:absolute;
    right:0.5rem;
    bottom:0.5rem;
    width: 15rem;

`


const animation = {
    hidden: {opacity: 0, x: 100},
    show:{opacity: 1, x:0 ,transition: {duration: 0.8}}
}

function ExamplePage() {

    const NotifElem = useRef()
    const [State, SetState] = useState([])

    function testRef(){

        

        if (State.length > 4){

            let newArr = [...State]
            newArr.shift()
            setTimeout(SetState(newArr), 10000)
            
            

        } else {
            SetState(prev => [...prev, "uwu"])
        }
        
    }



  return (
    <Body>
      <button onClick={testRef} >Test Notification</button>
      <NotificationArea ref={NotifElem}>
          {State.map((item,i) => (<Notification key={i} variants={animation} initial="hidden" animate="show">New Message!</Notification>))}
      </NotificationArea>
    </Body>
  );
}
export default ExamplePage;
