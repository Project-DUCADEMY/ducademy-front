import styled, { keyframes } from 'styled-components';
import axios from 'axios'
import { useState, useEffect } from 'react';
import React from 'react'

import {
    atom,
    useRecoilState,
} from 'recoil';

import Userinfo from './Userinfo'
import Sidemenu from './Sidemenu'
import Signout from './Signout'
import Reduce from './Reduce'
let DecreaseBar = keyframes`
    0% { width: 230px; }
    100% { width: 100px; }
`
let IncreaseBar = keyframes`
    0% { width: 100px; }
    100% { width: 230px; }
`
let Main = styled.div `
    position: fixed;
    height: 100%;
    width: 230px;
    clear: both;
    float: left;
    border-right: 1px solid #b9b9ff;
    background-color: #c2ffcb;
    animation: ${props => props.open ? IncreaseBar : DecreaseBar};
    animation-duration: ${props => props.run ? '0.4s' : '0.0s'};
    animation-fill-mode: forwards;
`
let IncreaseLine = keyframes`
    0% { width: 100%; }
    100% { width: 80%; }
`
let DecreaseLine = keyframes`
    0% { width: 80%; }
    100% { width: 100%; }
`
let BorderLine = styled.hr`
    border: none;
    height: 2px;
    align: center;
    width: 80%;
    background-color: #67b771;
    animation: ${props => props.open ? IncreaseLine : DecreaseLine};
    animation-duration: inherit;
    animation-fill-mode: forwards;
`
export const sideBarState = atom({
    key: 'openState',
    default: true
})
function Sidebar(props) {
    let [menus, setMenus] = useState(new Array)
    let [open, setOpen] = useRecoilState(sideBarState)
    let [runAnime, setRunAnime] = useState(false)
    useEffect(() => {
        axios.post('/ssr/menus').
        then((result) => { 
            setMenus(result.data)
            setTimeout(() => {setRunAnime(true)}, 300)
        })
        .catch ((result) => { console.log(result) })
    }, [])
    return (
        <Main 
            open={open}
            run={runAnime}
        >
            <Userinfo userinfo={ props.userinfo }></Userinfo>
            <BorderLine open={ open }/>
            <Reduce set={() => { setOpen(!open) }}/>
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
            <Signout/>
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