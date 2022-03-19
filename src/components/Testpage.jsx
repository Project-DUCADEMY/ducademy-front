import styled from 'styled-components';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { setCookie, deleteCookie } from '../global_helper/cookie'
import { clientId } from './config/config.js';
const Main = styled.div`
    float: left;
`

const loginSuccess = (response) => {
    setCookie('google_api_access_token', response.tokenObj.access_token, 8.64e+7)
}
const logoutSuccess = (response) => {
    deleteCookie('google_api_access_token')
}
// const request = function() {
//     axios.get(`https://classroom.googleapis.com/v1/courses?key=${APIkey}`,{
//         headers: {
//             Authorization: 'Bearer ' + google_token,
//             Accept: 'application/json'
//         }
//     })
//     .then((response) => { 
//         console.log(response.data)
//     })
//     .catch ((error) => { 
//         console.log(error.response) 
//     })
// }
function Testpage(props) {
    return (
        <Main>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={loginSuccess}
                onFailure={console.log}
                scope={
                    'https://www.googleapis.com/auth/classroom.courses',
                    'https://www.googleapis.com/auth/classroom.coursework.me'
                }/>

            <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={logoutSuccess}
                onLogoutFailure={console.log}/>
        </Main>
    )
}
export default Testpage


//ya29.A0ARrdaM9KUWkZi-ShS2pQ6ZbwQ4IzXZVLRAtsG3iwDGyhmuCxplkpp_M0CTdvKgnsJiqfCmQYdVMSrOled0fpGGDLkU0BelEnCYd5SSHBQHojpcNOt99W9h9RBKYpgm3jfq18sxdcPFfJyKmuoUXBa4EsdAb6
//ya29.A0ARrdaM9KUWkZi-ShS2pQ6ZbwQ4IzXZVLRAtsG3iwDGyhmuCxplkpp_M0CTdvKgnsJiqfCmQYdVMSrOled0fpGGDLkU0BelEnCYd5SSHBQHojpcNOt99W9h9RBKYpgm3jfq18sxdcPFfJyKmuoUXBa4EsdAb6