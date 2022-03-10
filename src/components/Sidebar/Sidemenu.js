import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { DisplayText, HideText } from './HideText';
import { useRecoilState } from 'recoil';
import { sideBarState } from './Sidebar';
const Main = styled.div`
    transition-duration: 0.2s;
    height: 8%;
    width: ${props => props.isOver ? '180%' : '60%'};
    margin: 10px 20px 10px 20px;
    border-radius: 10px;
    :hover {
        background-color: rgba(200, 220, 200, 0.6);
        cursor: pointer;
    }
    z-index: 99;
`
const Content = styled.div`
    float: right;
    position: relative;
    vertical-align: middle;
    left: -8px;
    top: 50%;
    transform:translateY(-50%);
    transition-duration: 0.1s;
    transition-delay: 0.1s;
    opacity: ${props => props.isOver ? '1' : '0'};
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
                <Content
                    isOver={getOver}>
                    { props.info.content }
                </Content>
            </Main>
        </Link>
    )
} 
export default Sidemenu