import styled from 'styled-components';
import { Link } from 'react-router-dom'
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
`
const Icon = styled.img`
    float: left;
    height: auto;
    width: 20%;
    position: relative;
    left: 8px;
    top: 50%;
    transform:translateY(-50%);
`
const Test = styled.div`
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
    return (
        <Main>
            <Link to = { props.info.link }>
                <Test color={ props.info.background }>
                    <Icon src={ props.info.iconSrc }></Icon>
                    <Content>{ props.info.content }</Content>
                </Test>
            </Link>
        </Main>
    )
} 
export default Sidemenu