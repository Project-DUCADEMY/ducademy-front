import styled from 'styled-components';
import axios from 'axios';

let Main = styled.div`
    transform: translateX(-50%);
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin: 0px auto;
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
            axios.post( '/authenticate/logout')
                .then( () => {
                    window.location.replace("/")
                })
        }}>
            Sign out
        </Main>
    )
}

export default Signout_button;