import styled from 'styled-components';
import axios from 'axios';

let Main = styled.div`
    position: relative;
    border-radius: 10px;
    left: 7px;
    width: 50%;
    padding: 10px;
    cursor: pointer;
    color: rgb(230, 70, 0);
    :hover {
        transition-duration: 0.2s;
        background-color: rgba(230, 70, 0, 0.5);
    }
    font-family: League Spartan;
`
function Signout_button() {
    return (
        <Main onClick={ () => {
            axios.post( '/authenticate/logout')
                .then(() => {
                    window.location.replace("/")
                })
        }}>
            Sign out
        </Main>
    )
}

export default Signout_button;