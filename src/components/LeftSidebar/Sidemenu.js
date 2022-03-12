import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { DisplayText, HideText } from './HideText';
import { useRecoilState } from 'recoil';
import { sideBarState } from './Sidebar';
const Main = styled.div`
    transition-duration: 0.2s;
    height: 70px;
    width: ${props => props.isOver ? '180%' : '60%'};
    margin: 10px 20px 10px 20px;
    border-radius: 10px;
    :hover {
        background-color: rgba(200, 220, 200, 0.6);
        cursor: pointer;
    }
    //text-align: right;
    z-index: 99;
`
const Content = styled.div`
    /* float: right;
    position: relative;
    vertical-align: middle;
    left: -8px;
    transform:translateY(-50%);
    top: 50%; */

    //left: ${props => props.isOver ? '80%' : '0px'};
    position: ${props => props.isOver ? 'relative' : 'absolute'};
    transition: 0.2s;
    float: right;
    top: 23px;
    right: 8px;
    //bottom: ${props => props.isOver ? '-20px' : '20px'};
    opacity: ${props => props.isOver ? '1' : '0'};
    overflow: hidden;
    display: ${props => props.isOver ? '0' : 'none'};
    //display: none;
`

const Icon = styled.img`
    height: 40px;
    width: auto;
    position: relative;
    left: 10px;
    top: 50%;
    transform:translateY(-50%);
`
function Sidemenu (props) {
    let [open, setOpen] = useRecoilState(sideBarState)
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