import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'
import { DisplayText, HideText } from './HideText';
import { useRecoilState } from 'recoil';
import { sideBarState } from './Sidebar';
const Main = styled.div`
    height: 8%;
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
`
const Content = styled.div`
    float: right;
    position: relative;
    top: 5px;
    vertical-align: middle;
    position: relative;
    left: -8px;
    top: 50%;
    transform:translateY(-50%);
    animation: ${props => props.open ? DisplayText : HideText};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
`

const Icon = styled.img`
    height: 40px;
    width: auto;
    position: relative;
    left: 10px;
    top: 50%;
    transform:translateY(-50%);
`
const Border = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    :hover {
        transition-duration: 0.2s;
        background-color: ${props => props.color};
    }
    margin-top: 10px;
`
function Sidemenu (props) {
    let [open, setOpen] = useRecoilState(sideBarState)
    return (
        <Main>
            <Link to = { props.info.link }>
                <Border color={ props.info.background }>
                    <Icon open={open} src={ props.info.iconSrc }></Icon>
                    <Content open={open}>{ props.info.content }</Content>
                </Border>
            </Link>
        </Main>
    )
} 
export default Sidemenu