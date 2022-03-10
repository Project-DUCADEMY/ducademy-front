import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import style from '../../assets/css/Login.module.css'
const Main = styled.div`
    clear: both;
`
function Signpage(props) {
    //name
    //username
    //email
    //password
    //passwordCh

    const [inputEmail, setInputEmail] = useState('')
    const [inputPw, setInputPw] = useState('')


    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const login = (e) => {
        axios.post( 
            '/authenticate/login', 
            { 
                email: inputEmail,
                password: inputPw,
            })
            .then( (response) => {
                window.location.replace('/')
                console.log(response.status);
            })
            .catch( console.log )
    }
    

    return (
        <div className={style.container}>
            <h2 className={style.h2}>로그인</h2>
            <form className={style.form}>
                <div>
                    <label>ID</label>
                    <input className={style.input}  value={inputEmail} onChange={handleInputEmail} placeholder="ID" />
                </div>
                <div>
                    <label>Password</label>
                    <input className={style.input} value={inputPw} onChange={handleInputPw} placeholder="Password" type="password" />
                </div>
                <button className={style.button} onClick={login} type="button">Log in</button>
            </form>
            
            <Link to='/join' className={style.container_footer}>
                <span style={{ color: "black" }}>계정이 없으신가요?</span>
                <span className={style.span}>회원가입</span>
            </Link>
        </div>
    )
    // return (

    //     <Main>
        
    //         <input type='text' name='input_email' value={inputEmail} onChange={handleInputEmail} />
    //         <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
    //         <button onClick={ () => {
    //         axios.post( 
    //             '/authenticate/login', 
    //             { 
    //                 username: inputEmail,
    //                 password: inputPw,
    //             })
    //             .then( (response) => {
    //                 console.log(response.body);

    //             })
    //             .catch( console.log )
    //         }}>로그인</button>
    //     </Main>
    // )
    ///authenticate/join
}
export default Signpage
