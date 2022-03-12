import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import User from '../../global_helper/user'

const Main = styled.div`
    height: 10%;
    width: auto;
    display: flex;
    margin-top: 20px
`
const IdPhoto = styled.img`
    margin: 0 auto;
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 40%;
    transition : 0.4s;
`
const Infos = styled.div`
    position: absolute;
    right: 40px;
    bottom: 45px;
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
    e.target.src = '/img/default.jpeg'
}
function Userinfo(props) {
    let userinfo = useRecoilValue(User)
    return (
        <Main>
            <IdPhoto 
                src={ userinfo.userPage.photoLink } 
                onError={ errorImgLink }
            />
            {/* <Infos>
                <Name>{ userinfo.userPage.name }</Name>
                <Role>{ userinfo.userPage.role }</Role>
            </Infos> */}
        </Main>
    )
}
export default Userinfo;