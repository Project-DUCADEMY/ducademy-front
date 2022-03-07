import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { setCookie } from '../global_helper/cookie'
import { clientId } from './config/config.js';
const Main = styled.div`
    float: left;
`

const onSuccess = async(response) => {
    setCookie('google_api_access_token', response.accessToken, 8.64e+7)
}
const onFailure = (error) => {
    console.log(error);
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
                onSuccess={onSuccess}
                onFailure={onFailure}
                scope={[
                    'https://www.googleapis.com/auth/classroom.courses',
                    'https://www.googleapis.com/auth/classroom.coursework.me'
                ]}/>
        </Main>
    )
}
export default Testpage