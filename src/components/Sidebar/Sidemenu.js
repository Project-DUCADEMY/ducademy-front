import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Main = styled.div`
    height: 8%;
    width: auto;
    margin-left: 30px;
    margin-right: 30px;
`
const Content = styled.div`
    float: right;
    position: relative;
    top: 5px;
`
const Icon = styled.img`
    float: left;
    height: auto;
    width: 20%;
`
function Sidemenu (props) {
    return (
        <Main>
            <Link to = { props.link }>
                <Icon src={ props.icon }></Icon>
                <Content>{ props.content }</Content>
            </Link>
        </Main>
    )
} 
export default Sidemenu