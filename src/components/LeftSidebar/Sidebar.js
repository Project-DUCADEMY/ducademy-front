import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react'

import Userinfo from './Userinfo'
import Sidemenu from './Sidemenu'
import Logout from './Logout'

import dummy from '../../assets/dummy/menu'
let SidebarContainer = styled.div `
    height: 100vh;
    width: 80px;;
    margin-right: 20px;
    transition : 0.4s;
    display: block;
    float: left;
    display: flex;
    flex-direction: column;
    background-color: rgba(50, 165, 50, 0.1);
    z-index: 100;
`


function Sidebar(props) {
    let [menus, setMenus] = useState(dummy)
    return (
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
    )
}
export default Sidebar

// export default class Sidebar extends React.Component {
//     state = {
//       persons: []
//     }
    
//     componentDidMount() {
//         axios.post('/ssr/menus').
//         then( (result) => {
//             const persons = result.data;
//             this.setState({ persons });
//             console.log(num++)
//         })
//         .catch ( (result) => {
//             console.log(result)
//         })
//     }
  
//     render() {
//         return (
//         <Main>
//             <Userinfo userinfo = { this.props.userinfo }></Userinfo>
//             <BorderLine/>
//             { 
//                 this.state.persons.map( (element, idx) => {
//                     return (
//                         <Sidemenu
//                             icon = { element.iconSrc }
//                             content = { element.content }
//                             link = { element.link }
//                             key = { idx }
//                         />
//                     )
//                 })
//             }
//             <button onClick={ () => { 
//                 axios.post( 
//                 '/sign/out', 
//                 {
//                 })
//                 .then( () => {
//                     window.location.replace("/")
//                 })
//             }
//             }>Sign out</button>
//         </Main>
//         )
//     }
//   }