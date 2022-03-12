import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom'
const Main = styled.div`
    transition-duration: 0.2s;
    border-radius: 10px;
    height: 70px;
    width: ${props => props.isOver ? '250%' : '100%'};
    float: left;
    position: relative;
    margin-left: ${props => props.isOver ? '25%' : '10%'};
    margin-top: 10px;
    border-radius: 10px;
    :hover {
        background-color: rgba(200, 220, 200, 0.6);
        cursor: pointer;
    }
    z-index: 99;
`
const Content = styled.div`
    position: ${props => props.isOver ? 'relative' : 'absolute'};
    transition: 0.2s;
    float: right;
    top: 23px;
    right: 10px;
    opacity: ${props => props.isOver ? '1' : '0'};
    overflow: hidden;
    display: ${props => props.isOver ? '0' : 'none'};
`

const Icon = styled.img`
    height: 70%;
    width: auto;
    position: relative;
    left: 7px;
    top: 50%;
    transform:translateY(-50%);
`
function Sidemenu (props) {
    const [getOver, setOver] = useState(false)
    return (
        <Link to={props.info.link}>
            <Main
                onMouseOver={() => {setOver(true)}}
                onMouseOut={()  => {setOver(false)}}
                isOver={getOver}
                >
                <Icon src={ props.info.iconSrc }></Icon>
                {/* {props.info.content} */}
                <Content
                    isOver={getOver}>
                    { props.info.content }
                </Content>
            </Main>
        </Link>
    )
} 
export default Sidemenu