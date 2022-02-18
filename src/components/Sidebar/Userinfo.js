import styled from 'styled-components';
const Main = styled.div`
    width: auto;
    height: 11%;
    padding: 20px;
    padding-bottom: 0px;
`
const IdPhoto = styled.img`
    top: 20px;
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 40%;
    float: left;
`
const Datas = styled.div`
    float: left;

`
const Name = styled.div`
    position: relative;
    left: 20px;
    top: 30px;
`
const Role = styled.div`
position: relative;
    left: 20px;
    top: 30px;
`
function Userinfo(props) {
    return (
        <Main>
            <IdPhoto src = { props.userinfo.photoLink }/>
            <Datas>
                <Name>{ props.userinfo.name }</Name>
                <Role>{ props.userinfo.role }</Role>
            </Datas>
        </Main>
    )
}
export default Userinfo;