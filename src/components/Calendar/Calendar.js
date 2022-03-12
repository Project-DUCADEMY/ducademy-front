import styled from 'styled-components';
import Day from './Day'
import * as helper from './CalendarHelper'
import {atom, useRecoilState } from 'recoil'
import { loadSchedules } from './Schedules.js'
import { useEffect, useState, Fragment } from 'react'
import LoadingPage from '../Loadingpage'
import ErrorPage from './Errorpage'

const MainContainer = styled.div`
    z-index: 0;
    width: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const MonthNav = styled.div`
    display: flex;
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


let date = new Date(2022, 2, 1)

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
        loadSchedules().then(result => {
            setUserSchedule(result)
            setLoading(false)
        })
        .catch(error => {
            console.error(error.response)
            setLoading(false)
            setError(true)
        })
    }, []);

    const changeMonth = function(next) {
        setMetaData({
            axis: new Date(metaData.axis.getFullYear(),
            metaData.axis.getMonth() + (next ? 1 : -1) , 
            metaData.axis.getDate())
        })
    }
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
        <CalendarBody>
            {
                getLoading ? 
                <LoadingPage/>
                : getError ? <ErrorPage/> 
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
        <MonthNav>
            <button onClick={() => changeMonth(false)}>LastMonth</button>
            <div>{metaData.axis.getFullYear()}/{metaData.axis.getMonth() + 1}</div>
            <button onClick={() => changeMonth(true)}>NextMonth</button>
        </MonthNav>
        </MainContainer>
    )
}

export default Calendar;