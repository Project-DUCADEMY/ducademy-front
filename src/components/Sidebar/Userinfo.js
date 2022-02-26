import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { DisplayText, HideText } from './HideText';
import { sideBarState } from './Sidebar';
const Main = styled.div`
    position: relative;
    width: auto;
    height: 11%;
    padding: 20px;
    padding-bottom: 0px;
`
const IdPhoto = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 40%;
    position: relative;
    left: ${props=>props.open ? "0px" : "-7px"};
    transition : 0.4s;
`
const Infos = styled.div`
    position: absolute;
    right: 40px;
    bottom: 45px;
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