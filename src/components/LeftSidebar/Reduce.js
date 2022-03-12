import styled from 'styled-components';
import React from 'react'


let Main = styled.div `
    width: 0px;
    height: 0px;
    border-right: 15px solid #67b771;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    float: right;
    position: relative;
    right: 0px;
    top: -17px;
    cursor: pointer;
`

function Sidebar(props) {
    return (
        <Main onClick={props.set}>
        </Main>
    )
}
export default Sidebar