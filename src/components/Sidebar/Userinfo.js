import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { DisplayText, HideText } from './HideText';
import { sideBarState } from './Sidebar';
const Main = styled.div`
    width: auto;
    height: 11%;
    padding: 20px;
    padding-bottom: 0px;
`
const DecreasePicture = keyframes`
    0% { left: 0px; }
    100% { left: -7px; }
`
const IncreasePicture = keyframes`
    0% { left: -7px; }
    100% { left: 0px; }
`
const IdPhoto = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 40%;
    position: relative;
    animation: ${props => props.open ? IncreasePicture : DecreasePicture};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
`
const Infos = styled.div`
    position: absolute;
    right: 40px;
    top: 20px;
    animation: ${props => props.open ? DisplayText : HideText};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
`
const Name = styled.div`
    position: relative;
    left: 15px;
    top: 30px;
`
const Role = styled.div`
    position: relative;
    left: 15px;
    top: 30px;
`
const errorImgLink = (e) => {
    e.target.src = '/user-directory/profile-picture/default.jpeg'
}
function Userinfo(props) {
    let [open, setOpen] = useRecoilState(sideBarState)
    return (
        <Main>
            <IdPhoto 
                src={ props.userinfo.photoLink } 
                onError={ errorImgLink }
                open = { open }
            />
            <Infos open = { open } >
                <Name>{ props.userinfo.name }</Name>
                <Role>{ props.userinfo.role }</Role>
            </Infos>
        </Main>
    )
}
export default Userinfo;