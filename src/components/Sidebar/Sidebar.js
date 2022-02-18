import styled from 'styled-components';
import Userinfo from './Userinfo'
import Sidemenu from './Sidemenu'
let Main = styled.div `
    position: fixed;
    height: 100%;
    width: 250px;
    clear: both;
    float: left;
    border-right: 1px solid #ddd;
`
let BorderLine = styled.hr`
    size: 1px;
    align: center;
    margin-bottom: 20px;
    width: 80%;
    color: #ddd;
`
function Sidebar(props) {
    return (
        <Main>
            <Userinfo userinfo = { props.userinfo }></Userinfo>
            <BorderLine/>
            {
                props.menu.map( (element, idx) => {
                    return (
                        <Sidemenu
                            icon = { element.iconSrc }
                            content = { element.content }
                            link = { element.link }
                            key = { idx }
                        />
                    )
                })
            }
        </Main>
    )
}
export default Sidebar
