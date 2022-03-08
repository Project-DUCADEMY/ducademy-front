import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import style from '../../assets/css/Join.module.css'
const Main = styled.div`
    clear: both;
`
function Signpage(props) {
    //name
    //username
    //email
    //password
    //passwordCh
    const [inputName, setInputName] = useState('')
    const [inputUsername, setInputUsername] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputPwCh, setInputPwCh] = useState('')

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }
    const handleUsername = (e) => {
        setInputUsername(e.target.value)
    }
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputPwCh = (e) => {
        setInputPwCh(e.target.value)
    }

    const join = (e) => {
        axios.post( 
            '/authenticate/join', 
            { 
                name: inputName,
                username: inputUsername,
                email: inputEmail,
                password: inputPw,
                passwordCh: inputPwCh
            })
            .then( () => {
                window.location.replace("/")
            })
            .catch( console.log )
    }

    return (
        <div className={style.container}>
            <h2 className={style.h2}>회원가입</h2>
            <form className={style.form}>
                <div>
                    <label>Name</label>
                    <input className={style.input} type='text' value={inputName} onChange={handleInputName} placeholder="Name"/>
                </div>
                <div>
                    <label>Nickname</label>
                    <input className={style.input} type='text' value={inputUsername} onChange={handleUsername} placeholder="Nickname"/>
                </div>
                <div>
                    <label>Email</label>
                    <input className={style.input} type='text' value={inputEmail} onChange={handleInputEmail} placeholder="Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input className={style.input} type='password' value={inputPw} onChange={handleInputPw} placeholder="Password"/>
                </div>
                <div>
                    <label>Password Check</label>
                    <input className={style.input} type='password' value={inputPwCh} onChange={handleInputPwCh} placeholder="Password Check"/>
                </div>
                <button className={style.button} onClick={join}>Register</button>
            </form>
            <footer></footer>
        </div>
    )
    return (
        <Main>
            <input type='text' name='input_name' value={inputName} onChange={handleInputName} />
            <input type='text' name='input_username' value={inputUsername} onChange={handleUsername} />
            <input type='text' name='input_email' value={inputEmail} onChange={handleInputEmail} />
            <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            <input type='password' name='input_pwch' value={inputPwCh} onChange={handleInputPwCh} />
            
            <button onClick={ () => {
                axios.post( 
                    '/authenticate/join', 
                    { 
                        name: inputName,
                        username: inputUsername,
                        email: inputEmail,
                        password: inputPw,
                        passwordCh: inputPwCh
                    })
                    .then( () => {
                        window.location.replace("/")
                    })
                    .catch( console.log )
            }}>회원 가입</button>
        </Main>
    )
    ///authenticate/join
}
export default Signpage
