import styled from 'styled-components';
import { setCookie } from '../assets/cookie';
import axios from 'axios';
const Main = styled.div`
    clear: both;
    float: right;
`
function Testpage(props) {
    return (
        <Main>
            <button onClick={ () => { 
                axios.post( 
                '/sign/in', 
                { 
                    email: 'qfourca3305@gmail.com', 
                    password: 'miner369' 
                }) 
                .then( console.log )
                .catch( console.log )
            }
            }>Click1</button>
            <button onClick={ () => { 
                axios.post( 
                '/sign/out', 
                {
                })
            }
            }>Click2</button>

        </Main>
    )
}
export default Testpage