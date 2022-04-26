import styled from 'styled-components';

import {atom, useRecoilState } from 'recoil'
import { useEffect, useState, Fragment } from 'react'

import LoadingPage from '../Loadingpage'
import ErrorPage from './Errorpage'

import Day from './Day'
import * as helper from './CalendarHelper'
import { loadSchedules } from './ScheduleLoader'
import MonthNav from './MonthNav'


import axios from 'axios'
import { APIkey } from '../config/config.js';
import { getCookie } from '../../global_helper/cookie.js';

import dummyAPI from '../../assets/dummy/classroomApi'

const MainContainer = styled.div`
    z-index: 0;
    width: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CalendarBody = styled.div`
    height: 500px;
    width: 100%;
    float: left;
    top: 100px;
    background-color: rgba(100, 200, 255, 0.2);
    border-radius: 5px;
    z-index: 1;
`
const Arrow = styled.div`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: red;
    cursor: pointer;
`
class DaysArray {
    constructor(dateData) {
        this.__proto__ = new Array(5)
        let counter = dateData.getDay() * -1;
        let axis = new Date(dateData.getFullYear(), dateData.getMonth(), dateData.getDate() + counter)
        for(let i = 0; i < 5; i++)
        {
            this[i] = new Array(7)
            for(let j = 0; j < 7; j++)
            {
                this[i][j] = new Object
                this[i][j].date = axis
                axis = helper.NextDay(axis)
            }
        }
    }
}


let date = new Date(2021, 11, 1)

export const calendarDatas = atom({
    key: 'calendarDatas',
    default: {
        axis: date
    }
})
export const userSchedules = atom({
    key: 'userSchedules',
    default: new Array()
})


function Calendar() {
    let [metaData, setMetaData] = useRecoilState(calendarDatas)
    let [getUserSchedule, setUserSchedule] = useRecoilState(userSchedules)
    const [getLoading, setLoading] = useState(true)
    const [getError, setError] = useState(false)


    useEffect(() => {
        /*
        loadSchedules().then(result => {
            
            setUserSchedule(result)
            setLoading(false)
            setError(false)
        })
        .catch(error => {
            setLoading(false)
            setError({message: error.message})
            console.log(error)
        })
        */
       setUserSchedule(dummyAPI)
       console.log(dummyAPI)
        setLoading(false)
        setError(false)


        // let googleToken = getCookie('google_api_access_token')
        // axios.get(`https://classroom.googleapis.com/v1/courses?key=${APIkey}`,{
        //     headers: {
        //         Authorization: 'Bearer ' + googleToken,
        //         Accept: 'application/json'
        //     }
        // }).then(console.log).catch(console.log)
    }, []);


    let daysArray = new DaysArray(metaData.axis)
    let schedules = new Array()

    getUserSchedule.forEach(element => {
        try {
            schedules.push({
                date: new Date(element.creationTime),
                title: element.title,
                workLink: element.alternateLink
            })
        } catch(ex) {
            console.log(ex)
        }
    })
    return (
        <MainContainer>
        <MonthNav/>
        <CalendarBody>
            {
                getLoading ? 
                <LoadingPage/>
                : getError ? 
                <ErrorPage message={getError.message}/> 
                : daysArray.map((row, rowIdx) => {
                    return(
                    <Fragment key={rowIdx}>
                        {
                            row.map((element, elementIdx) => {
                                let thisSchedule = new Array()
                                schedules.forEach(schedule => {
                                    if(schedule.date.getYear() === element.date.getYear()
                                    && schedule.date.getMonth() === element.date.getMonth()
                                    && schedule.date.getDate() === element.date.getDate()) {
                                        thisSchedule.push(schedule)
                                    }
                                })
                                return (<Day 
                                date = {element.date}
                                key = {rowIdx + elementIdx}
                                schedule = {thisSchedule}>
                                </Day>)
                            })
                        }
                    </Fragment>
                    )
                })
            }
        </CalendarBody>
        </MainContainer>
    )
}

export default Calendar;