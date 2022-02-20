import styled from 'styled-components';
import axios from 'axios';

let Main = styled.div`
    position: absolute; 
    bottom: 20px;
    left: 50%; 
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 5px 10px;
    cursor: pointer;
    color: rgb(230, 69, 0);
    :hover {
        transition-duration: 0.2s;
        background-color: rgba(230, 69, 0, 0.5);
    }
`
function Signout_button(props) {
    return (
        <Main onClick={ () => {
            axios.post( '/sign/out')
                .then( () => {
                    window.location.replace("/")
                })
        }}>
            Sign out
        </Main>
    )
}

export default Signout_button;