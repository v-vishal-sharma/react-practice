import { Link } from "react-router-dom"
import { styled } from "styled-components"

let Wrapper = styled.div`
    display: flex;
    padding-left: 30px;
    text-decoration: underline;
    cursor:pointer;
    color: black;
    font-size: 18px;

    background-color: #C8A2C8;

    :hover {
        color: white;
    }
`
let Navlink = styled.p`
    padding-right: 40px;
`


export default function Navbar(){
    return (
        <Wrapper>
            <Navlink>
                <Link to="/">Home</Link>
            </Navlink>
            <Navlink>
                <Link to="/component">Components</Link>
            </Navlink>
        </Wrapper>
    )
}