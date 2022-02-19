import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
const Main = styled.div`
    clear: both;
`
function Signpage(props) {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    return (
        <Main>
            <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            <button onClick={ () => {
                axios.post( 
                    '/sign/in', 
                    { 
                        email: inputId, 
                        password: inputPw 
                    }) 
                    .then( () => {
                        window.location.replace("/")
                    })
                    .catch( console.log )
            }}>로그인</button>
        </Main>
    )
}
export default Signpage
