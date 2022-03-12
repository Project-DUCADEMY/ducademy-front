import styled from 'styled-components';
let Main = styled.div `
    position: relative;
    height: 100vh;
    width: 100px;
    transition : 0.4s;
    display: block;
    float: right;
    z-index: 100;
`
const Sidebar = () => {
    return <Main/>
}
export default Sidebar