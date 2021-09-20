import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'

const Div = styled(motion.div)`
    height:100px;
    width: 100px;
    background: pink;
    border-radius: 1rem;
    margin-bottom: 3rem;
    margin-left: 3rem;

    p{
        height:100%;
        display:grid;
        place-items:center;
    }
`

export default function Animation(props){

    const animation = { x: [0,100,100,0,0], y:[0, 0, 100, 100, 0] }

    return(
        <Div 

        initial={{x:0}}
        animate={animation}
        transition={{ duration: 3 }}
        onClick={props.handleClick}
        >
        
        </Div>
    )

}