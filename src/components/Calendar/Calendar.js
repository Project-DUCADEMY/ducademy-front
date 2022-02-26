import styled from 'styled-components';
import Day from './Day'
import dummy from '../../assets/dummy/dates'
import * as helper from './CalendarHelper'
import {atom, useRecoilValue } from 'recoil'
import googleAPI from '../../assets/dummy/classroomApi.js'

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
        let axis = dateData
        let counter = dateData.getDay() * -1;
        dateData = new Date(date.getYear(), date.getMonth() - 1, date.getDate() + counter)
        for(let i = 0; i < 5; i++)
        {
            this[i] = new Array(7)
            for(let j = 0; j < 7; j++)
            {
                this[i][j] = new Object
                this[i][j].date = dateData
                dateData = helper.NextDay(dateData)
            }
        }
        dateData = axis
    }
}
let date = new Date(2021, 5, 1)

export const calendarMetaData = atom({
    key: 'calendatMetaData',
    default: {
        axis: date
    }
})
function Calendar() {
    let metaData = useRecoilValue(calendarMetaData)
    let daysArray = new DaysArray(metaData.axis)
    let schedules = new Array()
    googleAPI.courseWork.forEach(element => {
        if(element.dueDate != undefined)
        {
            try {
                schedules.push({
                    dueDate: new Date(element.dueDate.year, element.dueDate.month, element.dueDate.day),
                    title: element.title
                })
            } catch(ex) {
                console.log(ex)
            }
        }
    })
    console.log(schedules)
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
                                    if(schedule.dueDate.getMonth() === element.date.getMonth()
                                    && schedule.dueDate.getDate() === element.date.getDate()) {
                                        thisSchedule.push(schedule)
                                    }
                                })
                                console.log(thisSchedule)
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
        </Main>
    )
}

export default Calendar;