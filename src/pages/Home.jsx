import React from "react";
import { styled } from "styled-components";

let Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    flex-direction: column;
`
let Heading = styled.h1`
    font-size: 45px;
    color: blue;
`
let Subtext = styled.p`
    font-size: 25px;
`

export default function Home() {
    return (
        <Wrapper>
            <Heading>This is the start of something new.</Heading>
            <Subtext>All my learnings of <code>React</code> is stored in this website.</Subtext>
        </Wrapper>
    )
}