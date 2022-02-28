import axios from 'axios'
import { APIkey } from '../config/config.js';
import { getCookie } from '../../global_helper/cookie.js';

let google_token = getCookie('google_api_access_token')

async function getClassroomsId() {
    let classrooms = await axios.get(`https://classroom.googleapis.com/v1/courses?key=${APIkey}`,{
        headers: {
            Authorization: 'Bearer ' + google_token,
            Accept: 'application/json'
        }
    })
    // console.log(classrooms)
    let classroomsId = new Array()
    classrooms.data.courses.forEach(element => {
        classroomsId.push(element.id)
    });
    return classroomsId
}




export async function loadSchedules() {
    let classroomIds = await getClassroomsId()
    let getWorks = new Array()
    classroomIds.forEach(element => {
        getWorks.push(new Promise((resolve, reject) => {
            axios.get(
                `https://classroom.googleapis.com/v1/courses/${element}/courseWork?key=${APIkey}`,{
                    headers: {
                        Authorization: 'Bearer ' + google_token
                    }
                }
            ).then(resolve).catch(resolve)
        }))
    })
    
    
    return Promise.all(getWorks)
    .then(result => {
        let responses = new Array()
        result.forEach((element) => {
            try {
                element.data.courseWork.forEach(work => {
                    responses.push(work)
                })
            } catch (error) {
                console.log(error.message)
            }
        })
        return responses
    })
    
    // .then(result => {
    //     result.forEach(element => {
    //         axios.get(
    //             `https://classroom.googleapis.com/v1/courses/${element}/courseWork?key=${APIkey}`,{
    //                 headers: {
    //                     Authorization: 'Bearer ' + google_token
    //                 }
    //             }
    //         )
    //         .then(result => {
    //             try {
    //                 let newUserSchedule = new Array()
    //                 result.data.courseWork.forEach(element =>{
    //                     newUserSchedule.push(element)
    //                 })
    //                 schedules = schedules.concat(newUserSchedule)
    //                 //console.log(schedules)
    //             } catch(error) {
    //                 console.log(error.message)
    //             }
    //         })
    //     })
    // })
    console.log(classroomIds)
}
