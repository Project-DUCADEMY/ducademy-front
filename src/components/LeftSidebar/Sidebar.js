import styled from 'styled-components';
import { useState } from 'react';
import React from 'react'

import Userinfo from './Userinfo'
import Sidemenu from './Sidemenu'
import Logout from './Logout'

import '../../assets/fonts/LeagueSpartan.css'

import dummy from '../../assets/dummy/menu'
const SidebarMargin = styled.div`
    position: relative;
    float: left;
    height: 100vh;
    width: 80px;
    margin-right: 10px;
    z-index: 100;
`
const SidebarSkin = styled.div`
    position: fixed;
    height: 100vh;
    width: 80px;
    z-index: 100;
`
let SidebarContainer = styled.div `
    height: 100%;
    width: 100%;
    margin-right: 20px;
    transition : 0.4s;
    display: flex;
    flex-direction: column;
    background-color: rgba(80, 240, 120, 0.8);
    z-index: 100;
`


function Sidebar(props) {
    let [menus, setMenus] = useState(dummy)
    return (
        <SidebarMargin>
        <SidebarSkin>
        <SidebarContainer>
            <Userinfo userinfo={ props.userinfo }></Userinfo>
            {/* <BorderLine open={ open }/> */}
            {/* <Reduce set={() => { setOpen(!open) }}/> */}
            { 
                menus.map( (element, idx) => {
                    return (
                        <Sidemenu
                            info = { element }
                            key = { idx }
                        />
                    )
                })
            }
            <Logout/>
        </SidebarContainer>
        </SidebarSkin>
        </SidebarMargin>
    )
}
export default Sidebar
