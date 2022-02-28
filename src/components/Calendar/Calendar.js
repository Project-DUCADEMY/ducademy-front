import styled from 'styled-components';
import Day from './Day'
import * as helper from './CalendarHelper'
import {atom, useRecoilValue, useRecoilState, useResetRecoilState, RecoilState } from 'recoil'
import googleAPI from '../../assets/dummy/classroomApi.js'
import { loadSchedules } from './Schedules.js'

let Main = styled.div`
    height: 500px;
    width: 700px;
    float: left;
    background-color: wheat;
    border-radius: 5px;
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


let date = new Date(2021, 2, 1)

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
    let [userSchedulesValue, setUserSchedule] = useRecoilState(userSchedules)
    if(userSchedulesValue.length == 0) {
        console.log('test')
        loadSchedules().then(result => {
            setUserSchedule(result)
        })
    }
    //console.log(userSchedulesValue)
    const changeMonth = function(next) {
        setMetaData({
            axis: new Date(metaData.axis.getFullYear(),
            metaData.axis.getMonth() + (next ? 1 : -1) , 
            metaData.axis.getDate())
        })
    }
    let daysArray = new DaysArray(metaData.axis)
    let schedules = new Array()

    userSchedulesValue.forEach(element => {
        if(element.dueDate != undefined)
        {
            try {
                schedules.push({
                    dueDate: new Date(element.dueDate.year, element.dueDate.month - 1, element.dueDate.day),
                    title: element.title
                })
            } catch(ex) {
                console.log(ex)
            }
        }
    })
    return (
        <Main>
            {
                daysArray.map((row, rowIdx) => {
                    return(
                    <>
                        {
                            row.map((element, elementIdx) => {
                                let thisSchedule = new Array()
                                schedules.forEach(schedule => {
                                    if(schedule.dueDate.getYear() === element.date.getYear()
                                    && schedule.dueDate.getMonth() === element.date.getMonth()
                                    && schedule.dueDate.getDate() === element.date.getDate()) {
                                        thisSchedule.push(schedule)
                                    }
                                })
                                return (<Day 
                                date = {element.date}
                                key = {rowIdx * 10 + elementIdx}
                                schedule = {thisSchedule}>
                                </Day>)
                            })
                        }
                    </>
                    )
                })
            }
            <button onClick={() => changeMonth(false)}>LastMonth</button>
            <button onClick={() => changeMonth(true)}>NextMonth</button>
            <div>{metaData.axis.getFullYear()}/{metaData.axis.getMonth() + 1}</div>
        </Main>
    )
}

export default Calendar;