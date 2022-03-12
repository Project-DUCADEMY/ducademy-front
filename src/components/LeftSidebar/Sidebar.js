import styled from 'styled-components';
import { useState, useEffect } from 'react';
import React from 'react'

import {
    atom,
    useRecoilState,
} from 'recoil';

import Userinfo from './Userinfo'
import Sidemenu from './Sidemenu'
import Logout from './Logout'

import dummy from '../../assets/dummy/menu'
let Main = styled.div `
    position: relative;
    height: 100vh;
    width: ${props=>props.open ? "230px" : "100px"};
    transition : 0.4s;
    display: block;
    float: left;
    z-index: 100;
//  border-right: 1px solid #b9b9ff;
//  background-color: rgba(0, 0, 0, 0.03);
`
let BorderLine = styled.hr`
    border: none;
    height: 1px;
    width: ${props => props.open ? '80%' : '100%'};
    background-color: #67b771;
    transition : 0.4s;
`
export const sideBarState = atom({
    key: 'openState',
    default: false
})

function Sidebar(props) {
    let [menus, setMenus] = useState(dummy)
    let [open, setOpen] = useRecoilState(sideBarState)
    let [runAnime, setRunAnime] = useState(false)
    // useEffect(() => {
    //     axios.post('/ssr/menus')
    //     .then((result) => { 
    //         setMenus(result.data)
    //         setTimeout(() => {setRunAnime(true)}, 300)
    //     })
    //     .catch ((result) => { console.log(result) })
    // }, [])
    return (
        <Main 
            open={open}
            run={runAnime}
        >
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
        </Main>
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