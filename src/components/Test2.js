import styled from 'styled-components';
import axios from 'axios'
import { APIkey } from './config/config.js';
import { getCookie } from '../global_helper/cookie.js';

const Main = styled.div`
    float: left;
`
// let google_token = getCookie('google_api_access_token')
// const getClassroomsId = async function() {
//     let classrooms = await axios.get(`https://classroom.googleapis.com/v1/courses?key=${APIkey}`,{
//         headers: {
//             Authorization: 'Bearer ' + google_token,
//             Accept: 'application/json'
//         }
//     })
//     // console.log(classrooms)
//     let classroomsId = new Array()
//     classrooms.data.courses.forEach(element => {
//         classroomsId.push(element.id)
//     });
//     return classroomsId
// }
// getClassroomsId()
// .then(result => {
//     result.forEach(element => {
//         axios.get(
//             `https://classroom.googleapis.com/v1/courses/${element}/courseWork?key=${APIkey}`,{
//                 headers: {
//                     Authorization: 'Bearer ' + google_token
//                 }
//             }
//         ).then(result => console.log(result.data.courseWork))
//     })
// })
function Test2(props) {

    return (<Main>

    </Main>)
}
export default Test2
